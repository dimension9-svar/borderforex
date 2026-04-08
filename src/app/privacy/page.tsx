import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Border Forex privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="py-16 lg:py-20 bg-surface-container-low border-b border-outline-variant/30">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <h1 className="text-[36px] sm:text-[44px] font-normal tracking-[-0.03em] text-on-surface leading-[1.08]">Privacy Policy</h1>
            <p className="mt-4 text-[17px] font-light text-on-surface-variant leading-[1.6] max-w-lg">Last updated: April 2026</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-[720px] px-6 prose-sm text-[14px] text-on-surface-variant leading-[1.7] space-y-6">
          <AnimatedSection>
            <h2 className="text-[17px] font-medium text-on-surface">1. Information We Collect</h2>
            <p>We collect personal information necessary to provide our foreign exchange services, including: full name, identity/passport number, residential address, contact details, banking information, and documentation required under FICA regulations.</p>

            <h2 className="text-[17px] font-medium text-on-surface mt-8">2. How We Use Your Information</h2>
            <p>Your information is used to process transactions, comply with SARB Exchange Control and FICA requirements, communicate about your transactions, and improve our services. We do not sell your personal information to third parties.</p>

            <h2 className="text-[17px] font-medium text-on-surface mt-8">3. Data Protection</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal information in accordance with the Protection of Personal Information Act (POPIA). Access to client data is restricted to authorised personnel only.</p>

            <h2 className="text-[17px] font-medium text-on-surface mt-8">4. Data Retention</h2>
            <p>We retain client records for a minimum of five years as required by FICA and other applicable legislation. Records may be retained longer where required by law or ongoing business relationships.</p>

            <h2 className="text-[17px] font-medium text-on-surface mt-8">5. Your Rights</h2>
            <p>Under POPIA, you have the right to access, correct, and request deletion of your personal information. To exercise these rights, contact our Information Officer at <a href="mailto:info@borderforex.co.za" className="text-primary hover:underline">info@borderforex.co.za</a>.</p>

            <h2 className="text-[17px] font-medium text-on-surface mt-8">6. Cookies</h2>
            <p>Our website uses essential cookies to maintain session state and user preferences (such as theme selection). We do not use tracking or advertising cookies.</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
