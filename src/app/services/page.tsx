import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Send,
  CreditCard,
  Banknote,
  Building2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Border Forex services: travel forex, international money transfers, prepaid travel cards, foreign banknotes, and omnibus facilities.",
};

const services = [
  {
    icon: Globe,
    title: "Travel Forex",
    slug: "travel-forex",
    description:
      "Buy and sell 30+ foreign currencies at competitive rates. Same-day availability on all major currencies. SARB exchange control documentation handled for you.",
    features: ["30+ currencies", "Same-day processing", "SARB-compliant documentation", "Walk-in or pre-order"],
  },
  {
    icon: Send,
    title: "Money Transfer",
    slug: "money-transfer",
    description:
      "Send and receive international payments through secure SARB-compliant corridors. Most transfers settled within 24 hours with full tracking and transparent fee breakdown.",
    features: ["100+ destination countries", "24-hour settlement", "Real-time tracking", "Transparent fees"],
  },
  {
    icon: CreditCard,
    title: "Prepaid Travel Cards",
    slug: "prepaid-travel-cards",
    description:
      "Load multiple currencies onto a single card. Lock in rates before departure and spend at 36 million+ merchants worldwide. Manage your balance online.",
    features: ["Multi-currency loading", "Rate lock at purchase", "36M+ merchants", "Online management"],
  },
  {
    icon: Banknote,
    title: "Foreign Banknotes",
    slug: "foreign-banknotes",
    description:
      "Walk-in availability of major foreign banknotes in various denominations. No appointment needed. Buyback service for unused currency when you return.",
    features: ["Walk-in service", "All denominations", "Competitive cash rates", "Currency buyback"],
  },
  {
    icon: Building2,
    title: "Omnibus Facility",
    slug: "omnibus-facility",
    description:
      "Wholesale forex for bureaux de change, money transfer operators, travel agencies, and financial institutions. Custom rate structures with dedicated institutional account management.",
    features: ["Wholesale rates", "Bulk currency supply", "Dedicated account manager", "Custom agreements"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-900 via-[#0a1628] to-navy-dark py-20 lg:py-28">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <p className="text-[12px] font-medium uppercase tracking-widest text-cyan">Services</p>
            <h1 className="mt-2 text-[36px] sm:text-[44px] font-normal tracking-[-0.03em] text-white leading-[1.08]">
              What we offer
            </h1>
            <p className="mt-4 text-[17px] font-light text-gray-400 leading-[1.6] max-w-lg">
              A complete suite of foreign exchange services for individuals,
              businesses, and financial institutions — all regulated under
              the South African Reserve Bank.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6 space-y-3">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.03}>
              <div
                className="group rounded-xl bg-white border border-separator-light p-6 lg:p-8 hover:border-cyan/20 transition-all duration-200"
                style={{ boxShadow: "var(--shadow-xs)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3">
                      <service.icon className="h-5 w-5 text-cyan shrink-0" />
                      <h2 className="text-[17px] font-medium text-label">{service.title}</h2>
                    </div>
                    <p className="mt-3 text-[14px] text-label-secondary leading-[1.6]">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[13px] text-label-secondary">
                          <div className="h-1 w-1 rounded-full bg-cyan shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 mt-4 text-[13px] font-medium text-cyan hover:text-cyan-dark transition-colors"
                    >
                      Details <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-16 bg-fill">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-[22px] font-normal tracking-[-0.01em] text-label">
              Not sure which service fits?
            </h2>
            <p className="mt-2 text-[15px] text-label-secondary max-w-md mx-auto">
              Our team will recommend the right product for your situation.
              No obligation.
            </p>
            <div className="mt-6 flex gap-3 justify-center">
              <Link href="/quote" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-3 text-[14px] font-medium text-white hover:bg-cyan-dark transition-colors">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-separator px-6 py-3 text-[14px] font-medium text-label hover:bg-fill transition-colors">
                Talk to us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
