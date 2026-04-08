"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface Props {
  iconName: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

import * as icons from "lucide-react";

export default function ServiceCard({ iconName, title, description, href, index }: Props) {
  const Icon = (icons as unknown as Record<string, LucideIcon>)[iconName] ?? icons.CircleDot;
  const [flipped, setFlipped] = useState(false);

  function handleTap() {
    setFlipped((prev) => !prev);
  }

  return (
    <div
      className="group perspective-[800px] h-[200px] sm:h-[220px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={handleTap}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── Front ── */}
        <div
          className="absolute inset-0 rounded-[var(--radius-xl)] p-5 sm:p-6 flex flex-col justify-between overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            background: "linear-gradient(135deg, #4a3580 0%, #65479e 25%, #8266b8 50%, #65479e 75%, #4a3580 100%)",
            boxShadow: "var(--shadow-level3)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.1) 40%, transparent 50%, rgba(255,255,255,0.3) 70%, transparent 80%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white/60" />
            <div className="absolute top-0 right-0 text-[36px] sm:text-[48px] font-bold text-white/[0.04] font-[family-name:var(--font-display)] leading-none select-none">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-[16px] sm:text-[18px] font-semibold text-white font-[family-name:var(--font-display)] tracking-[-0.02em]">
              {title}
            </h3>
            <p className="mt-1 text-[11px] sm:text-[12px] text-white/40 font-medium uppercase tracking-widest">
              Border Forex
            </p>
          </div>

          {/* Mobile tap hint */}
          <div className="absolute bottom-3 right-4 text-[10px] text-white/30 sm:hidden">
            Tap to flip
          </div>
        </div>

        {/* ── Back ── */}
        <div
          className="absolute inset-0 rounded-[var(--radius-xl)] p-5 sm:p-6 flex flex-col justify-between overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #3d2b6e 0%, #553d8a 30%, #7155a8 60%, #553d8a 100%)",
            boxShadow: "var(--shadow-level3)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              background: "linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <h3 className="text-[14px] sm:text-[15px] font-semibold text-white font-[family-name:var(--font-display)] tracking-[-0.01em]">
              {title}
            </h3>
            <p className="mt-2 sm:mt-3 text-[12px] sm:text-[13px] text-white/70 leading-[1.5]">
              {description}
            </p>
          </div>

          <Link
            href={href}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 inline-flex items-center gap-1.5 mt-3 text-[12px] sm:text-[13px] font-medium text-white/90 hover:text-white transition-colors"
          >
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
