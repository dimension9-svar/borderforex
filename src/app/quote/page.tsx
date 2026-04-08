import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import QuoteCalculator from "@/components/QuoteCalculator";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Get an indicative foreign exchange quote from Border Forex. Select currencies, enter an amount, and request a live rate.",
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-900 via-[#0a1628] to-navy-dark py-20 lg:py-28">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <p className="text-[12px] font-medium uppercase tracking-widest text-cyan">Quote</p>
            <h1 className="mt-2 text-[36px] sm:text-[44px] font-normal tracking-[-0.03em] text-white leading-[1.08]">
              Get your rate
            </h1>
            <p className="mt-4 text-[17px] font-light text-gray-400 leading-[1.6] max-w-lg">
              Select currencies and enter an amount for an indicative quote.
              Submit the form to receive a locked-in live rate from our team —
              usually within the hour during business hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <QuoteCalculator />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
