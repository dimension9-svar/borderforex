"use client";

import { useState, useMemo, type FormEvent } from "react";
import {
  ArrowDownUp,
  Send,
  Loader2,
  CheckCircle2,
  TrendingUp,
  Info,
} from "lucide-react";

interface Currency {
  code: string;
  name: string;
  flag: string;
  indicativeRate: number; // vs ZAR
}

const currencies: Currency[] = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸", indicativeRate: 18.15 },
  { code: "EUR", name: "Euro", flag: "🇪🇺", indicativeRate: 19.85 },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", indicativeRate: 23.10 },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", indicativeRate: 11.75 },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", indicativeRate: 13.20 },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", indicativeRate: 20.50 },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", indicativeRate: 0.121 },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳", indicativeRate: 2.50 },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳", indicativeRate: 0.216 },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪", indicativeRate: 4.94 },
  { code: "BWP", name: "Botswana Pula", flag: "🇧🇼", indicativeRate: 1.33 },
  { code: "MZN", name: "Mozambican Metical", flag: "🇲🇿", indicativeRate: 0.284 },
  { code: "MUR", name: "Mauritian Rupee", flag: "🇲🇺", indicativeRate: 0.397 },
  { code: "KES", name: "Kenyan Shilling", flag: "🇰🇪", indicativeRate: 0.140 },
  { code: "NGN", name: "Nigerian Naira", flag: "🇳🇬", indicativeRate: 0.0113 },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬", indicativeRate: 13.65 },
  { code: "NZD", name: "New Zealand Dollar", flag: "🇳🇿", indicativeRate: 10.80 },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰", indicativeRate: 2.33 },
  { code: "SEK", name: "Swedish Krona", flag: "🇸🇪", indicativeRate: 1.77 },
  { code: "NOK", name: "Norwegian Krone", flag: "🇳🇴", indicativeRate: 1.72 },
  { code: "DKK", name: "Danish Krone", flag: "🇩🇰", indicativeRate: 2.66 },
  { code: "THB", name: "Thai Baht", flag: "🇹🇭", indicativeRate: 0.527 },
  { code: "PLN", name: "Polish Zloty", flag: "🇵🇱", indicativeRate: 4.72 },
  { code: "ILS", name: "Israeli Shekel", flag: "🇮🇱", indicativeRate: 5.02 },
  { code: "BRL", name: "Brazilian Real", flag: "🇧🇷", indicativeRate: 3.18 },
  { code: "TRY", name: "Turkish Lira", flag: "🇹🇷", indicativeRate: 0.475 },
  { code: "ZMW", name: "Zambian Kwacha", flag: "🇿🇲", indicativeRate: 0.675 },
];

const serviceTypes = [
  "Travel Forex",
  "Money Transfer",
  "Prepaid Travel Card",
  "Foreign Banknotes",
  "Omnibus Facility",
];

type Direction = "buy" | "sell";

export default function QuoteCalculator() {
  const [fromCurrency, setFromCurrency] = useState("ZAR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [direction, setDirection] = useState<Direction>("buy");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const allCurrencies = useMemo(
    () => [
      { code: "ZAR", name: "South African Rand", flag: "🇿🇦", indicativeRate: 1 },
      ...currencies,
    ],
    []
  );

  function swap() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setDirection((d) => (d === "buy" ? "sell" : "buy"));
  }

  const rate = useMemo(() => {
    const from = allCurrencies.find((c) => c.code === fromCurrency);
    const to = allCurrencies.find((c) => c.code === toCurrency);
    if (!from || !to || from.code === to.code) return null;
    return from.indicativeRate / to.indicativeRate;
  }, [fromCurrency, toCurrency, allCurrencies]);

  const convertedAmount = useMemo(() => {
    const num = parseFloat(amount);
    if (!num || !rate) return null;
    return num * rate;
  }, [amount, rate]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  }

  if (status === "sent") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-outline-variant/30 bg-surface-container-low p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
        <h3 className="text-[17px] font-bold text-on-surface">Quote Request Sent</h3>
        <p className="mt-2 text-[14px] text-on-surface-variant max-w-md mx-auto">
          Our team will send you a locked-in live rate within the hour during
          business hours (Mon–Fri 08:00–17:00).
        </p>
        <div className="mt-5 rounded-[var(--radius-md)] bg-white border border-outline-variant/30 p-4 max-w-sm mx-auto text-left">
          <div className="text-[13px] text-on-surface-variant space-y-1.5">
            <p>
              <span className="font-medium text-on-surface">Direction:</span>{" "}
              {direction === "buy" ? "Buying" : "Selling"} {toCurrency}
            </p>
            <p>
              <span className="font-medium text-on-surface">Amount:</span>{" "}
              {parseFloat(amount).toLocaleString()} {fromCurrency}
            </p>
            {convertedAmount && (
              <p>
                <span className="font-medium text-on-surface">Indicative:</span>{" "}
                ≈ {convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {toCurrency}
              </p>
            )}
            <p>
              <span className="font-medium text-on-surface">Service:</span>{" "}
              {service}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setStatus("idle");
            setAmount("");
            setName("");
            setEmail("");
            setPhone("");
            setService("");
          }}
          className="mt-5 text-[13px] font-medium text-primary hover:text-primary-dark transition-colors"
        >
          Get another quote
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Calculator Card */}
      <div className="rounded-[var(--radius-lg)] border border-outline-variant/30 bg-surface-container-lowest overflow-hidden" style={{ boxShadow: "var(--shadow-level3)" }}>
        {/* Direction Toggle */}
        <div className="flex border-b border-outline-variant/30">
          <button
            type="button"
            onClick={() => {
              setDirection("buy");
              setFromCurrency("ZAR");
              if (toCurrency === "ZAR") setToCurrency("USD");
            }}
            className={`flex-1 py-3 text-[13px] font-semibold transition-colors ${
              direction === "buy"
                ? "bg-primary text-on-primary"
                : "bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:text-on-surface"
            }`}
          >
            I want to Buy Foreign Currency
          </button>
          <button
            type="button"
            onClick={() => {
              setDirection("sell");
              setToCurrency("ZAR");
              if (fromCurrency === "ZAR") setFromCurrency("USD");
            }}
            className={`flex-1 py-3 text-[13px] font-semibold transition-colors ${
              direction === "sell"
                ? "bg-primary text-on-primary"
                : "bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:text-on-surface"
            }`}
          >
            I want to Sell Foreign Currency
          </button>
        </div>

        <div className="p-6 lg:p-8 space-y-5">
          {/* From */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-widest text-outline mb-1.5">
              {direction === "buy" ? "You Pay" : "You Send"}
            </label>
            <div className="flex gap-3">
              <select
                value={fromCurrency}
                onChange={(e) => {
                  setFromCurrency(e.target.value);
                  if (e.target.value === toCurrency) {
                    setToCurrency(fromCurrency);
                  }
                }}
                className="w-28 sm:w-48 shrink-0 rounded-[var(--radius-md)] border border-outline-variant px-3 py-2.5 text-[13px] font-medium text-on-surface bg-white focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
              >
                {allCurrencies.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code} — {c.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                min="0"
                step="any"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="flex-1 rounded-[var(--radius-md)] border border-outline-variant px-4 py-2.5 text-[18px] font-semibold text-on-surface placeholder:text-outline focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none tabular-nums transition-all"
              />
            </div>
          </div>

          {/* Swap */}
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={swap}
              className="inline-flex items-center justify-center h-9 w-9 rounded-[var(--radius-full)] border border-outline-variant/30 text-outline hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
              aria-label="Swap currencies"
            >
              <ArrowDownUp className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* To */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-widest text-outline mb-1.5">
              {direction === "buy" ? "You Receive" : "You Get (ZAR)"}
            </label>
            <div className="flex gap-3">
              <select
                value={toCurrency}
                onChange={(e) => {
                  setToCurrency(e.target.value);
                  if (e.target.value === fromCurrency) {
                    setFromCurrency(toCurrency);
                  }
                }}
                className="w-28 sm:w-48 shrink-0 rounded-[var(--radius-md)] border border-outline-variant px-3 py-2.5 text-[13px] font-medium text-on-surface bg-white focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
              >
                {allCurrencies.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code} — {c.name}
                  </option>
                ))}
              </select>
              <div className="flex-1 rounded-[var(--radius-md)] border border-outline-variant/30 bg-surface-container-low px-4 py-2.5 text-[18px] font-semibold text-on-surface tabular-nums">
                {convertedAmount
                  ? convertedAmount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : "0.00"}
              </div>
            </div>
          </div>

          {/* Rate Display */}
          {rate && fromCurrency !== toCurrency && (
            <div className="flex items-center gap-2 rounded-[var(--radius-md)] bg-primary/[0.04] border border-primary/10 px-4 py-2.5">
              <TrendingUp className="h-3.5 w-3.5 text-primary shrink-0" />
              <span className="text-[13px] text-on-surface-variant">
                <span className="font-semibold text-on-surface">Indicative rate:</span>{" "}
                1 {fromCurrency} ={" "}
                <span className="font-semibold text-primary">
                  {rate.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
                </span>{" "}
                {toCurrency}
              </span>
            </div>
          )}

          {/* Disclaimer */}
          <div className="flex items-start gap-2 text-[11px] text-outline">
            <Info className="h-3 w-3 mt-0.5 shrink-0" />
            <span>
              This is an indicative rate for illustration only. Your final rate
              will be confirmed based on live market conditions at time of transaction.
            </span>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="rounded-[var(--radius-lg)] border border-outline-variant/30 bg-surface-container-lowest p-4 sm:p-6 lg:p-8 space-y-4" style={{ boxShadow: "var(--shadow-level3)" }}>
        <div>
          <h3 className="text-[17px] font-bold text-on-surface">Request a Live Rate</h3>
          <p className="text-[13px] text-on-surface-variant mt-0.5">
            Submit your details and we&apos;ll send you a locked-in rate you can transact on.
          </p>
        </div>

        <div>
          <label htmlFor="quote-service" className="block text-[13px] font-medium text-on-surface mb-1">Service Type</label>
          <select id="quote-service" required value={service} onChange={(e) => setService(e.target.value)} className="w-full rounded-[var(--radius-md)] border border-outline-variant px-4 py-2.5 text-[14px] text-on-surface bg-white focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all">
            <option value="">Select a service</option>
            {serviceTypes.map((s) => (<option key={s} value={s}>{s}</option>))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="quote-name" className="block text-[13px] font-medium text-on-surface mb-1">Full Name</label>
            <input id="quote-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-[var(--radius-md)] border border-outline-variant px-4 py-2.5 text-[14px] text-on-surface placeholder:text-outline focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="quote-phone" className="block text-[13px] font-medium text-on-surface mb-1">Phone Number</label>
            <input id="quote-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-[var(--radius-md)] border border-outline-variant px-4 py-2.5 text-[14px] text-on-surface placeholder:text-outline focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all" placeholder="+27 12 345 6789" />
          </div>
        </div>

        <div>
          <label htmlFor="quote-email" className="block text-[13px] font-medium text-on-surface mb-1">Email Address</label>
          <input id="quote-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-[var(--radius-md)] border border-outline-variant px-4 py-2.5 text-[14px] text-on-surface placeholder:text-outline focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all" placeholder="john@example.com" />
        </div>

        <button
          type="submit"
          disabled={status === "sending" || !amount || fromCurrency === toCurrency}
          className="inline-flex items-center justify-center gap-2 w-full rounded-[var(--radius-xl)] bg-primary px-6 py-3 text-[14px] font-medium text-on-primary hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {status === "sending" ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</>
          ) : (
            <><Send className="h-4 w-4" /> Request Live Rate</>
          )}
        </button>
      </div>
    </form>
  );
}
