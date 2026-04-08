import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Send, CreditCard, Banknote, Building2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Services",
  description: "Border Forex services: travel forex, international money transfers, prepaid travel cards, foreign banknotes, and omnibus facilities.",
};

const services = [
  { icon: Globe, title: "Travel Forex", slug: "travel-forex", description: "Buy and sell 30+ foreign currencies at competitive rates. Same-day availability on all major currencies. SARB exchange control documentation handled for you.", features: ["30+ currencies", "Same-day processing", "SARB-compliant documentation", "Walk-in or pre-order"] },
  { icon: Send, title: "Money Transfer", slug: "money-transfer", description: "Send and receive international payments through secure SARB-compliant corridors. Most transfers settled within 24 hours with full tracking and transparent fees.", features: ["100+ destination countries", "24-hour settlement", "Real-time tracking", "Transparent fees"] },
  { icon: CreditCard, title: "Prepaid Travel Cards", slug: "prepaid-travel-cards", description: "Load multiple currencies onto a single card. Lock in rates before departure and spend at 36 million+ merchants worldwide.", features: ["Multi-currency loading", "Rate lock at purchase", "36M+ merchants", "Online management"] },
  { icon: Banknote, title: "Foreign Banknotes", slug: "foreign-banknotes", description: "Walk-in availability of major foreign banknotes in various denominations. No appointment needed. Buyback service for unused currency.", features: ["Walk-in service", "All denominations", "Competitive cash rates", "Currency buyback"] },
  { icon: Building2, title: "Omnibus Facility", slug: "omnibus-facility", description: "Wholesale forex for bureaux de change, money transfer operators, travel agencies, and financial institutions. Custom rate structures.", features: ["Wholesale rates", "Bulk currency supply", "Dedicated account manager", "Custom agreements"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 lg:py-20 bg-surface-container-low border-b border-outline-variant/30">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <p className="text-[12px] font-medium uppercase tracking-widest text-primary">Services</p>
            <h1 className="mt-2 text-[36px] sm:text-[44px] font-normal tracking-[-0.03em] text-on-surface leading-[1.08]">What we offer</h1>
            <p className="mt-4 text-[17px] font-light text-on-surface-variant leading-[1.6] max-w-lg">
              A complete suite of foreign exchange services for individuals, businesses, and financial institutions — all regulated under the South African Reserve Bank.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6 space-y-3">
          {services.map((s, i) => (
            <AnimatedSection key={s.slug} delay={i * 0.03}>
              <div className="group rounded-[var(--radius-lg)] bg-surface-container-lowest border border-outline-variant/30 p-6 lg:p-8 hover:border-primary/30 transition-all duration-200" style={{ boxShadow: "var(--shadow-level1)" }}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3">
                      <s.icon className="h-5 w-5 text-primary shrink-0" />
                      <h2 className="text-[17px] font-medium text-on-surface">{s.title}</h2>
                    </div>
                    <p className="mt-3 text-[14px] text-on-surface-variant leading-[1.6]">{s.description}</p>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[13px] text-on-surface-variant">
                          <div className="h-1 w-1 rounded-[var(--radius-full)] bg-primary shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-1 mt-4 text-[13px] font-medium text-primary hover:underline">
                      Details <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary-container">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-[22px] font-normal tracking-[-0.01em] text-on-primary-container">Not sure which service fits?</h2>
            <p className="mt-2 text-[15px] text-on-primary-container/70 max-w-md mx-auto">Our team will recommend the right product. No obligation.</p>
            <div className="mt-6 flex gap-3 justify-center">
              <Link href="/quote" className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-xl)] bg-primary px-6 py-3 text-[14px] font-medium text-on-primary hover:opacity-90 transition-opacity">Get a quote <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-[var(--radius-xl)] border border-on-primary-container/20 px-6 py-3 text-[14px] font-medium text-on-primary-container hover:bg-on-primary-container/5 transition-colors">Talk to us</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
