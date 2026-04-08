"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowDownUp, ArrowRight } from "lucide-react";

const currencies = [
  { code: "ZAR", name: "South African Rand", flag: "🇿🇦", rate: 1 },
  { code: "USD", name: "US Dollar", flag: "🇺🇸", rate: 18.15 },
  { code: "EUR", name: "Euro", flag: "🇪🇺", rate: 19.85 },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", rate: 23.10 },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", rate: 11.75 },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", rate: 13.20 },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", rate: 20.50 },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪", rate: 4.94 },
  { code: "BWP", name: "Botswana Pula", flag: "🇧🇼", rate: 1.33 },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳", rate: 0.216 },
  { code: "KES", name: "Kenyan Shilling", flag: "🇰🇪", rate: 0.140 },
  { code: "NGN", name: "Nigerian Naira", flag: "🇳🇬", rate: 0.0113 },
];

export default function HeroCalculator() {
  const [from, setFrom] = useState("ZAR");
  const [to, setTo] = useState("USD");
  const [amount, setAmount] = useState("10000");

  function swap() {
    setFrom(to);
    setTo(from);
  }

  const rate = useMemo(() => {
    const f = currencies.find((c) => c.code === from);
    const t = currencies.find((c) => c.code === to);
    if (!f || !t || f.code === t.code) return null;
    return f.rate / t.rate;
  }, [from, to]);

  const converted = useMemo(() => {
    const num = parseFloat(amount);
    if (!num || !rate) return null;
    return num * rate;
  }, [amount, rate]);

  return (
    <div
      className="rounded-xl bg-white p-5 w-full max-w-sm"
      style={{ boxShadow: "var(--shadow-xl)" }}
    >
      {/* From */}
      <div>
        <label className="block text-[11px] font-medium uppercase tracking-widest text-label-tertiary mb-1.5">
          You send
        </label>
        <div className="flex gap-2">
          <select
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              if (e.target.value === to) setTo(from);
            }}
            className="w-[105px] shrink-0 rounded-lg border border-separator bg-surface px-2.5 py-2 text-[13px] font-medium text-label outline-none focus:border-cyan transition-colors"
          >
            {currencies.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.code}
              </option>
            ))}
          </select>
          <input
            type="text"
            inputMode="decimal"
            value={amount}
            onChange={(e) => {
              const v = e.target.value.replace(/[^0-9.]/g, "");
              setAmount(v);
            }}
            className="flex-1 min-w-0 rounded-lg border border-separator px-3 py-2 text-[16px] font-semibold text-label tabular-nums outline-none focus:border-cyan transition-colors text-right"
          />
        </div>
      </div>

      {/* Swap */}
      <div className="flex items-center justify-center my-2.5">
        <button
          type="button"
          onClick={swap}
          className="inline-flex items-center justify-center h-7 w-7 rounded-full border border-separator-light text-label-tertiary hover:border-cyan hover:text-cyan transition-colors"
          aria-label="Swap currencies"
        >
          <ArrowDownUp className="h-3 w-3" />
        </button>
      </div>

      {/* To */}
      <div>
        <label className="block text-[11px] font-medium uppercase tracking-widest text-label-tertiary mb-1.5">
          They receive
        </label>
        <div className="flex gap-2">
          <select
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
              if (e.target.value === from) setFrom(to);
            }}
            className="w-[105px] shrink-0 rounded-lg border border-separator bg-surface px-2.5 py-2 text-[13px] font-medium text-label outline-none focus:border-cyan transition-colors"
          >
            {currencies.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.code}
              </option>
            ))}
          </select>
          <div className="flex-1 min-w-0 rounded-lg border border-separator-light bg-fill px-3 py-2 text-[16px] font-semibold text-label tabular-nums text-right">
            {converted
              ? converted.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : "0.00"}
          </div>
        </div>
      </div>

      {/* Rate */}
      {rate && from !== to && (
        <p className="mt-3 text-[11px] text-label-tertiary text-center">
          Indicative rate: 1 {from} = {rate.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })} {to}
        </p>
      )}

      {/* CTA */}
      <Link
        href="/quote"
        className="mt-4 flex items-center justify-center gap-1.5 w-full rounded-lg bg-cyan px-4 py-2.5 text-[14px] font-semibold text-white hover:bg-cyan-dark transition-colors"
      >
        Get live rate
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>

      <p className="mt-2.5 text-[10px] text-label-tertiary text-center leading-snug">
        Indicative only. Final rate confirmed at time of transaction.
      </p>
    </div>
  );
}
