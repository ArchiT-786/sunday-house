import { connect, TLSSocket } from "node:tls";

type Mail = { to: string; replyTo: string; subject: string; text: string };

export async function sendSmtpMail(mail: Mail): Promise<void> {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || "465");
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  if (!user || !password || !process.env.CONTACT_EMAIL) {
    throw new Error("SMTP configuration is incomplete");
  }
  if (process.env.SMTP_SECURE !== "true" || port !== 465) {
    throw new Error("This transport requires implicit TLS on port 465");
  }

  const socket = connect({ host, port, servername: host, rejectUnauthorized: true });
  socket.setTimeout(15000);
  let buffer = "";
  const pending: Array<{ resolve: (value: string) => void; reject: (error: Error) => void }> = [];
  let responseLines: string[] = [];
  const fail = (error: Error) => {
    while (pending.length) pending.shift()!.reject(error);
  };
  socket.on("data", (chunk: Buffer) => {
    buffer += chunk.toString("utf8");
    let newline: number;
    while ((newline = buffer.indexOf("\n")) >= 0) {
      const line = buffer.slice(0, newline).replace(/\r$/, "");
      buffer = buffer.slice(newline + 1);
      responseLines.push(line);
      if (/^\d{3} /.test(line)) {
        const response = responseLines.join("\n");
        responseLines = [];
        pending.shift()?.resolve(response);
      }
    }
  });
  socket.on("error", fail);
  socket.on("timeout", () => socket.destroy(new Error("SMTP timed out")));
  socket.on("close", () => fail(new Error("SMTP connection closed")));

  const response = () => new Promise<string>((resolve, reject) => pending.push({ resolve, reject }));
  const expect = async (codes: number[]) => {
    const result = await response();
    if (!codes.includes(Number(result.slice(0, 3)))) throw new Error("SMTP rejected a command: " + result.slice(0, 3));
    return result;
  };
  const command = async (value: string, codes: number[]) => {
    const waiting = expect(codes);
    socket.write(value + "\r\n");
    return waiting;
  };
  const safeHeader = (value: string) => value.replace(/[\r\n]/g, " ").slice(0, 180);
  try {
    await expect([220]);
    await command("EHLO sundayhouses.com", [250]);
    await command("AUTH LOGIN", [334]);
    await command(Buffer.from(user).toString("base64"), [334]);
    await command(Buffer.from(password.replace(/\s/g, "")).toString("base64"), [235]);
    await command("MAIL FROM:<" + user + ">", [250]);
    await command("RCPT TO:<" + mail.to + ">", [250, 251]);
    await command("DATA", [354]);
    const body = mail.text.replace(/\r\n/g, "\n").replace(/\r/g, "\n")
      .split("\n").map(line => line.startsWith(".") ? "." + line : line).join("\r\n");
    const payload = [
      "From: Sunday Houses <" + user + ">",
      "To: " + mail.to,
      "Reply-To: " + safeHeader(mail.replyTo),
      "Subject: " + safeHeader(mail.subject),
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: 8bit",
      "", body,
    ].join("\r\n");
    await command(payload + "\r\n.", [250]);
    await command("QUIT", [221]);
  } finally {
    socket.end();
    socket.destroy();
  }
}
