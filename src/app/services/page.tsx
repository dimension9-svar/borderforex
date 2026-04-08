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
      "Planning an international trip? We offer competitive exchange rates for buying and selling foreign currency. Whether you need Dollars, Euros, Pounds, or any other major currency, our team ensures you get the best value for your money.",
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
      "Send and receive money internationally with confidence. Our secure transfer corridors connect South Africa to the world, with fast processing times and transparent fee structures.",
    features: [
      "Global transfer network",
      "Transparent pricing",
      "Fast processing times",
      "Secure SARB-compliant transfers",
    ],
  },
  {
    icon: CreditCard,
    title: "Prepaid Travel Cards",
    slug: "prepaid-travel-cards",
    description:
      "Travel smart with our multi-currency prepaid cards. Load your card with the currencies you need before you depart, lock in rates, and spend abroad with the convenience of a card.",
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
      "Sometimes you need cash in hand. We stock a wide range of foreign banknotes, available for immediate purchase. Walk in, exchange, and walk out ready for your journey.",
    features: [
      "Wide currency selection",
      "Walk-in availability",
      "Competitive cash rates",
      "Small and large denominations",
    ],
  },
  {
    icon: Building2,
    title: "Omnibus Facility",
    slug: "omnibus-facility",
    description:
      "Our specialised omnibus facility caters to businesses and financial institutions that require bulk foreign exchange services. Tailored solutions for high-volume currency management.",
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
      <section className="bg-gradient-to-br from-midnight via-navy to-navy-dark py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan">
                Our Services
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Complete Forex Solutions
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                From individual travellers to large financial institutions, we
                provide a comprehensive suite of foreign exchange services
                tailored to your needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.05}>
              <div className="group rounded-2xl border border-slate-200 p-8 lg:p-10 hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/5 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-cyan/10 text-cyan">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-xl font-bold text-midnight">
                        {service.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-slate-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-sm text-slate-600"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-cyan hover:text-cyan-dark transition-colors"
                    >
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-midnight">
              Not sure which service is right for you?
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
              Our team is here to guide you. Get in touch and we&apos;ll help you
              find the perfect solution.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan/25 hover:bg-cyan-dark transition-all"
              >
                Talk to Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
