import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import QuoteCalculator from "@/components/QuoteCalculator";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Get an indicative foreign exchange quote from Border Forex. Select currencies, enter an amount, and request a live rate.",
};

export default function QuotePage() {
  return (
    <>
      <section className="py-16 lg:py-20 bg-surface-container-low border-b border-outline-variant/30">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <p className="text-[12px] font-medium uppercase tracking-widest text-primary">Quote</p>
            <h1 className="mt-2 text-[36px] sm:text-[44px] font-normal tracking-[-0.03em] text-on-surface leading-[1.08]">Get your rate</h1>
            <p className="mt-4 text-[17px] font-light text-on-surface-variant leading-[1.6] max-w-lg">
              Select currencies and enter an amount for an indicative quote. Submit the form to receive a locked-in live rate — usually within the hour during business hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection><QuoteCalculator /></AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
