"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: string; // e.g. "10+", "30+", "<4hrs", "100%"
  className?: string;
}

export default function CountUp({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse the numeric part
    const prefix = value.match(/^[<>≈]*/)?.[0] ?? "";
    const suffix = value.match(/[+%a-zA-Z]*$/)?.[0] ?? "";
    const numStr = value.replace(/^[<>≈]*/, "").replace(/[+%a-zA-Z]*$/, "");
    const target = parseFloat(numStr);

    if (isNaN(target)) {
      setDisplay(value);
      return;
    }

    const duration = 1200;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      // Ease-out cubic
      const progress = 1 - Math.pow(1 - step / steps, 3);
      const current = Math.round(target * progress);

      if (step >= steps) {
        setDisplay(`${prefix}${target}${suffix}`);
        clearInterval(interval);
      } else {
        setDisplay(`${prefix}${current}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {isInView ? display : "0"}
    </span>
  );
}
