"use client";

const pairs = [
  { pair: "USD/ZAR", rate: "18.15", change: "+0.12" },
  { pair: "EUR/ZAR", rate: "19.85", change: "-0.08" },
  { pair: "GBP/ZAR", rate: "23.10", change: "+0.23" },
  { pair: "AUD/ZAR", rate: "11.75", change: "+0.05" },
  { pair: "CAD/ZAR", rate: "13.20", change: "-0.03" },
  { pair: "CHF/ZAR", rate: "20.50", change: "+0.15" },
  { pair: "JPY/ZAR", rate: "0.121", change: "-0.001" },
  { pair: "AED/ZAR", rate: "4.94", change: "+0.02" },
  { pair: "INR/ZAR", rate: "0.216", change: "+0.003" },
  { pair: "CNY/ZAR", rate: "2.50", change: "-0.01" },
];

function TickerItem({ pair, rate, change }: { pair: string; rate: string; change: string }) {
  const isUp = change.startsWith("+");
  return (
    <span className="inline-flex items-center gap-3 px-5 text-[12px] whitespace-nowrap">
      <span className="font-semibold text-on-surface">{pair}</span>
      <span className="tabular-nums text-on-surface-variant">{rate}</span>
      <span className={`tabular-nums ${isUp ? "text-[#10b981]" : "text-[#ef4444]"}`}>
        {change}
      </span>
    </span>
  );
}

export default function CurrencyTicker() {
  // Duplicate for seamless loop
  const items = [...pairs, ...pairs];

  return (
    <div className="overflow-hidden bg-surface-container-high/50 border-y border-outline-variant/20 py-2.5">
      <div className="flex animate-[ticker_30s_linear_infinite]">
        {items.map((p, i) => (
          <TickerItem key={`${p.pair}-${i}`} pair={p.pair} rate={p.rate} change={p.change} />
        ))}
      </div>
    </div>
  );
}
