import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Border Forex terms and conditions of service.",
};

export default function TermsPage() {
  return (
    <>
      <section className="py-16 lg:py-20 bg-surface-container-low border-b border-outline-variant/30">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <h1 className="text-[36px] sm:text-[44px] font-normal tracking-[-0.03em] text-on-surface leading-[1.08]">Terms &amp; Conditions</h1>
            <p className="mt-4 text-[17px] font-light text-on-surface-variant leading-[1.6] max-w-lg">Last updated: April 2026</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-[720px] px-6 prose-sm text-[14px] text-on-surface-variant leading-[1.7] space-y-6">
          <AnimatedSection>
            <h2 className="text-[17px] font-medium text-on-surface">1. Introduction</h2>
            <p>These terms and conditions govern your use of Border Forex services. By engaging our services, you agree to be bound by these terms. Border Forex (Pty) Ltd is an Authorised Dealer with Limited Authority as licensed by the South African Reserve Bank.</p>

            <h2 className="text-[17px] font-medium text-on-surface mt-8">2. Services</h2>
            <p>Border Forex provides foreign exchange services including travel forex, international money transfers, prepaid travel cards, foreign banknotes, and omnibus facilities. All services are subject to South African Reserve Bank Exchange Control regulations and FICA compliance requirements.</p>

            <h2 className="text-[17px] font-medium text-on-surface mt-8">3. Exchange Rates</h2>
            <p>Exchange rates displayed on our website are indicative only and subject to change. Final rates are confirmed at the time of transaction. Border Forex reserves the right to adjust rates without prior notice based on market conditions.</p>

            <h2 className="text-[17px] font-medium text-on-surface mt-8">4. Documentation Requirements</h2>
            <p>Clients are required to provide valid identification, proof of residence, and supporting documentation as required by FICA and SARB regulations. Transactions may be delayed or declined if documentation requirements are not met.</p>

            <h2 className="text-[17px] font-medium text-on-surface mt-8">5. Limitation of Liability</h2>
            <p>Border Forex shall not be liable for any losses arising from market fluctuations, delays caused by third-party banking systems, or regulatory interventions beyond our control.</p>

            <h2 className="text-[17px] font-medium text-on-surface mt-8">6. Contact</h2>
            <p>For questions regarding these terms, contact us at <a href="mailto:info@borderforex.co.za" className="text-primary hover:underline">info@borderforex.co.za</a>.</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
