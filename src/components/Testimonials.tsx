"use client";

import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Thabo Molefe",
    role: "Frequent traveller",
    text: "I've been using Border Forex for three years now. Their rates are consistently better than what my bank offers, and the prepaid card saved me a fortune on my last trip to Europe.",
    rating: 5,
  },
  {
    name: "Sarah van der Merwe",
    role: "Import/Export business owner",
    text: "The omnibus facility transformed how we manage our forex. Having a dedicated account manager who understands our cash flow cycle makes all the difference.",
    rating: 5,
  },
  {
    name: "Dr. Aisha Patel",
    role: "Medical professional, Pretoria",
    text: "Transferred funds to my daughter studying in the UK. The process was seamless — submitted documents, got a rate locked in the same day, and she received it within 24 hours.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-[1120px] px-6">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-widest text-primary">
                Testimonials
              </p>
              <h2 className="mt-2 text-[28px] sm:text-[32px] font-normal tracking-[-0.02em] text-on-surface">
                What our clients say
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <span className="text-[13px] font-medium text-on-surface">4.9/5</span>
              <span className="text-[13px] text-on-surface-variant">from 200+ reviews</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.05}>
              <div
                className="flex flex-col h-full rounded-[var(--radius-lg)] bg-surface-container-lowest border border-outline-variant/30 p-6"
                style={{ boxShadow: "var(--shadow-level1)" }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-[14px] text-on-surface-variant leading-[1.6] flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-outline-variant/20">
                  <p className="text-[13px] font-medium text-on-surface">{t.name}</p>
                  <p className="text-[12px] text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
