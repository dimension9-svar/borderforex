import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import QuoteCalculator from "@/components/QuoteCalculator";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Get an indicative foreign exchange quote from Border Forex. Select your currencies, enter an amount, and request a live rate.",
};

export default function QuotePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-900 via-[#0a1628] to-navy-dark py-24 lg:py-28">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-cyan">
                Quote Calculator
              </p>
              <h1 className="mt-2 text-[40px] sm:text-[48px] font-bold tracking-tight text-white leading-[1.05]">
                Get Your Rate
              </h1>
              <p className="mt-4 text-[17px] text-gray-400 leading-relaxed">
                Select your currencies and amount below for an indicative quote.
                For a locked-in live rate, submit the form and our team will
                respond within the hour during business hours.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-24 lg:py-32 bg-surface">
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
