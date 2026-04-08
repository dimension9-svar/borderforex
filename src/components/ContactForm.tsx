"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Travel Forex",
  "Money Transfer",
  "Prepaid Travel Cards",
  "Foreign Banknotes",
  "Omnibus Facility",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulate submission — replace with actual API route
    setTimeout(() => setStatus("sent"), 1500);
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-midnight">Message Sent</h3>
        <p className="mt-2 text-sm text-slate-500">
          Thank you for reaching out. Our team will get back to you within one
          business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-midnight mb-1.5"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-midnight placeholder:text-slate-400 focus:border-cyan focus:ring-1 focus:ring-cyan outline-none transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-midnight mb-1.5"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-midnight placeholder:text-slate-400 focus:border-cyan focus:ring-1 focus:ring-cyan outline-none transition-colors"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-midnight mb-1.5"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-midnight placeholder:text-slate-400 focus:border-cyan focus:ring-1 focus:ring-cyan outline-none transition-colors"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-midnight mb-1.5"
        >
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-midnight placeholder:text-slate-400 focus:border-cyan focus:ring-1 focus:ring-cyan outline-none transition-colors"
          placeholder="+27 12 345 6789"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-midnight mb-1.5"
        >
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-midnight focus:border-cyan focus:ring-1 focus:ring-cyan outline-none transition-colors bg-white"
        >
          <option value="">Select a service</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-midnight mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-midnight placeholder:text-slate-400 focus:border-cyan focus:ring-1 focus:ring-cyan outline-none transition-colors resize-none"
          placeholder="Tell us about your forex needs..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-cyan px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan/25 hover:bg-cyan-dark disabled:opacity-60 disabled:cursor-not-allowed transition-all"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
