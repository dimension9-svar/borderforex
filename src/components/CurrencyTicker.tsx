"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

const pairs = [
  { from: "USD", to: "ZAR", flag: "🇺🇸", rate: "18.15", change: "+0.12", up: true },
  { from: "EUR", to: "ZAR", flag: "🇪🇺", rate: "19.85", change: "-0.08", up: false },
  { from: "GBP", to: "ZAR", flag: "🇬🇧", rate: "23.10", change: "+0.23", up: true },
  { from: "AUD", to: "ZAR", flag: "🇦🇺", rate: "11.75", change: "+0.05", up: true },
  { from: "CAD", to: "ZAR", flag: "🇨🇦", rate: "13.20", change: "-0.03", up: false },
  { from: "CHF", to: "ZAR", flag: "🇨🇭", rate: "20.50", change: "+0.15", up: true },
  { from: "JPY", to: "ZAR", flag: "🇯🇵", rate: "0.121", change: "-0.001", up: false },
  { from: "AED", to: "ZAR", flag: "🇦🇪", rate: "4.94", change: "+0.02", up: true },
  { from: "INR", to: "ZAR", flag: "🇮🇳", rate: "0.216", change: "+0.003", up: true },
  { from: "CNY", to: "ZAR", flag: "🇨🇳", rate: "2.50", change: "-0.01", up: false },
];

function Chip({ from, flag, rate, change, up }: typeof pairs[number]) {
  return (
    <span
      className="inline-flex items-center gap-2 sm:gap-2.5 mx-1.5 sm:mx-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-[var(--radius-xl)] bg-surface-container-lowest border border-outline-variant/20 whitespace-nowrap"
      style={{ boxShadow: "var(--shadow-level1)" }}
    >
      <span className="text-[14px]">{flag}</span>
      <span className="text-[13px] font-semibold text-on-surface font-[family-name:var(--font-display)] tracking-tight">
        {from}<span className="text-on-surface-variant font-normal">/ZAR</span>
      </span>
      <span className="tabular-nums text-[13px] font-medium text-on-surface">{rate}</span>
      <span className={`inline-flex items-center gap-0.5 tabular-nums text-[11px] font-medium px-1.5 py-0.5 rounded-[var(--radius-sm)] ${
        up
          ? "text-[#0d9668] bg-[#0d9668]/10"
          : "text-[#dc2626] bg-[#dc2626]/10"
      }`}>
        {up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
        {change}
      </span>
    </span>
  );
}

export default function CurrencyTicker() {
  const items = [...pairs, ...pairs];

  return (
    <div className="overflow-hidden py-4 bg-surface-container-low/50">
      <div className="flex animate-[ticker_35s_linear_infinite] hover:[animation-play-state:paused]">
        {items.map((p, i) => (
          <Chip key={`${p.from}-${i}`} {...p} />
        ))}
      </div>
    </div>
  );
}
