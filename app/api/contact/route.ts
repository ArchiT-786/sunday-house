import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendSmtpMail } from "@/lib/contact-smtp";

export const runtime = "nodejs";

const enquiry = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30).optional().default(""),
  property: z.enum(["Whistling House", "Chaaya Glades", "Not sure yet"]),
  arrival: z.string().max(20).optional().default(""),
  departure: z.string().max(20).optional().default(""),
  message: z.string().trim().min(10).max(3000),
  website: z.string().max(200).optional().default(""),
});

export async function POST(request: NextRequest) {
  try {
    if (Number(request.headers.get("content-length") || 0) > 12000) {
      return NextResponse.json({ error: "Request too large." }, { status: 413 });
    }
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");
    if (origin && (!host || new URL(origin).host !== host)) {
      return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
    }
    const data = enquiry.safeParse(await request.json());
    if (!data.success) {
      return NextResponse.json({ error: "Please check your details and message." }, { status: 400 });
    }
    if (data.data.website) return NextResponse.json({ success: true });
    const { name, email, phone, property: stay, arrival, departure, message } = data.data;
    const to = process.env.CONTACT_EMAIL;
    if (!to) throw new Error("Missing CONTACT_EMAIL");
    await sendSmtpMail({
      to, replyTo: email,
      subject: "Sunday Houses enquiry - " + stay,
      text: [
        "New Sunday Houses enquiry", "",
        "Name: " + name,
        "Email: " + email,
        "Phone: " + (phone || "Not provided"),
        "Property: " + stay,
        "Arrival: " + (arrival || "Not specified"),
        "Departure: " + (departure || "Not specified"),
        "", "Message:", message,
      ].join("\n"),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact enquiry delivery failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "We couldn't send your enquiry. Please email us directly." }, { status: 500 });
  }
}
