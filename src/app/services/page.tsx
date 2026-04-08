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
    "Explore Border Forex's complete range of foreign exchange services including travel forex, money transfers, prepaid cards, and more.",
};

const services = [
  {
    icon: Globe,
    title: "Travel Forex",
    slug: "travel-forex",
    description:
      "Planning an international trip? We offer competitive exchange rates for buying and selling foreign currency. Whether you need Dollars, Euros, Pounds, or any other major currency, our team ensures you get the best value.",
    features: [
      "Competitive exchange rates",
      "All major world currencies",
      "Same-day availability",
      "Expert travel advisory",
    ],
  },
  {
    icon: Send,
    title: "Money Transfer",
    slug: "money-transfer",
    description:
      "Send and receive money internationally with confidence. Our secure transfer corridors connect South Africa to the world, with fast processing and transparent fee structures.",
    features: [
      "Global transfer network",
      "Transparent pricing",
      "Fast processing times",
      "SARB-compliant transfers",
    ],
  },
  {
    icon: CreditCard,
    title: "Prepaid Travel Cards",
    slug: "prepaid-travel-cards",
    description:
      "Travel smart with our multi-currency prepaid cards. Load your card with the currencies you need, lock in rates, and spend abroad with the convenience of a card.",
    features: [
      "Multi-currency support",
      "Lock in exchange rates",
      "Accepted worldwide",
      "Easy online management",
    ],
  },
  {
    icon: Banknote,
    title: "Foreign Banknotes",
    slug: "foreign-banknotes",
    description:
      "Sometimes you need cash in hand. We stock a wide range of foreign banknotes, available for immediate purchase. Walk in, exchange, and walk out ready.",
    features: [
      "Wide currency selection",
      "Walk-in availability",
      "Competitive cash rates",
      "All denominations",
    ],
  },
  {
    icon: Building2,
    title: "Omnibus Facility",
    slug: "omnibus-facility",
    description:
      "Our specialised omnibus facility caters to businesses and financial institutions requiring bulk forex services. Tailored solutions for high-volume currency management.",
    features: [
      "Bulk currency solutions",
      "Institutional-grade service",
      "Dedicated account management",
      "Custom rate structures",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-900 via-[#0a1628] to-navy-dark py-24 lg:py-28">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-cyan">
                Our Services
              </p>
              <h1 className="mt-2 text-[40px] sm:text-[48px] font-bold tracking-tight text-white leading-[1.05]">
                Complete Forex Solutions
              </h1>
              <p className="mt-4 text-[17px] text-gray-400 leading-relaxed">
                From individual travellers to large financial institutions, we
                provide a comprehensive suite of foreign exchange services
                tailored to your needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6 space-y-4">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.04}>
              <div
                className="group rounded-2xl bg-white border border-separator-light p-7 lg:p-8 hover:border-cyan/20 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-fill text-cyan group-hover:bg-cyan group-hover:text-white transition-all duration-300">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-[18px] font-bold text-label">
                        {service.title}
                      </h2>
                    </div>
                    <p className="mt-3 text-[14px] text-label-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-widest text-label-tertiary mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-[13px] text-label-secondary">
                          <div className="h-1 w-1 rounded-full bg-cyan shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 mt-4 text-[13px] font-semibold text-cyan hover:text-cyan-dark transition-colors"
                    >
                      Learn more <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-fill">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-[24px] sm:text-[28px] font-bold tracking-tight text-label">
              Not sure which service is right for you?
            </h2>
            <p className="mt-3 text-[16px] text-label-secondary max-w-lg mx-auto">
              Our team is here to guide you. Get in touch and we&apos;ll help you
              find the perfect solution.
            </p>
            <div className="mt-6 flex gap-3 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-cyan/20 hover:bg-cyan-dark transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-separator px-6 py-3 text-[14px] font-semibold text-label hover:bg-fill transition-all"
              >
                Talk to Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
