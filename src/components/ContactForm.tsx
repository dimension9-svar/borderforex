"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const serviceOptions = ["Travel Forex", "Money Transfer", "Prepaid Travel Cards", "Foreign Banknotes", "Omnibus Facility", "Other"];

const inputClass =
  "w-full rounded-[var(--radius-sm)] border border-outline-variant bg-surface-container-lowest px-3.5 py-2.5 text-[14px] text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  }

  if (status === "sent") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-outline-variant/30 bg-surface-container-low p-8 text-center">
        <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-3" />
        <h3 className="text-[16px] font-medium text-on-surface">Message sent</h3>
        <p className="mt-1 text-[14px] text-on-surface-variant">We&apos;ll respond within one business day.</p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-[13px] font-medium text-primary hover:underline">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-[13px] font-medium text-on-surface mb-1">First name</label>
          <input id="firstName" name="firstName" type="text" required className={inputClass} placeholder="John" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-[13px] font-medium text-on-surface mb-1">Last name</label>
          <input id="lastName" name="lastName" type="text" required className={inputClass} placeholder="Doe" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-[13px] font-medium text-on-surface mb-1">Email</label>
        <input id="email" name="email" type="email" required className={inputClass} placeholder="john@example.com" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-[13px] font-medium text-on-surface mb-1">Phone</label>
        <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+27 12 345 6789" />
      </div>
      <div>
        <label htmlFor="service" className="block text-[13px] font-medium text-on-surface mb-1">Service</label>
        <select id="service" name="service" required className={inputClass}>
          <option value="">Select a service</option>
          {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-[13px] font-medium text-on-surface mb-1">Message</label>
        <textarea id="message" name="message" rows={4} required className={`${inputClass} resize-none`} placeholder="Tell us what you need..." />
      </div>
      <button type="submit" disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-[var(--radius-xl)] bg-primary px-6 py-2.5 text-[14px] font-medium text-on-primary hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity">
        {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Send message</>}
      </button>
    </form>
  );
}
