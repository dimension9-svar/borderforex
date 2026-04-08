"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function ParallaxBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[280px] sm:h-[360px] lg:h-[420px] overflow-hidden bg-on-surface">
      <motion.div className="absolute inset-[-15%]" style={{ y }}>
        <Image
          src="/card-lifestyle.png"
          alt="Border Forex Visa card on slate surface with luxury watch and leather wallet"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-[1120px] px-6 pb-8">
        <AnimatedSection>
          <p className="font-[family-name:var(--font-display)] text-[24px] sm:text-[32px] font-bold tracking-[-0.03em] text-white">
            The card that crosses borders.
          </p>
          <p className="mt-1 text-[14px] text-white/60">
            Multi-currency prepaid Visa. Lock in rates. Spend worldwide.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
