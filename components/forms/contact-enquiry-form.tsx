"use client";

import { FormEvent, useState } from "react";

export default function ContactEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send enquiry.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send enquiry.");
      setStatus("error");
    }
  }
  const inputClass = "homestay-input w-full";
  return (
    <form onSubmit={submit} className="mt-8 space-y-5">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-primary">Your name *
          <input name="name" required minLength={2} maxLength={100} className={inputClass} placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium text-primary">Email *
          <input name="email" type="email" required maxLength={254} className={inputClass} placeholder="you@example.com" />
        </label>
      </div>
      <label className="block text-sm font-medium text-primary">Phone / WhatsApp
        <input name="phone" type="tel" maxLength={30} className={inputClass} placeholder="Your phone number" />
      </label>
      <label className="block text-sm font-medium text-primary">Interested property
        <select name="property" className={inputClass} defaultValue="Not sure yet">
          <option>Not sure yet</option>
          <option>Whistling House</option>
          <option>Chaaya Glades</option>
        </select>
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-primary">Arrival
          <input name="arrival" type="date" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-primary">Departure
          <input name="departure" type="date" className={inputClass} />
        </label>
      </div>
      <label className="block text-sm font-medium text-primary">Message *
        <textarea name="message" required minLength={10} maxLength={3000} rows={5}
          className="w-full resize-none rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
          placeholder="Tell us about your trip..." />
      </label>
      <button type="submit" disabled={status === "sending"}
        className="homestay-primary-button w-full disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending..." : "Send enquiry"}
      </button>
      {status === "success" && <p role="status" className="text-sm text-green-700">Your enquiry has been sent. We'll get back to you soon.</p>}
      {status === "error" && <p role="alert" className="text-sm text-red-700">{error} You can also contact email.sundayhouse@gmail.com.</p>}
    </form>
  );
}
