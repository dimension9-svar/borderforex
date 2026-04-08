import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Send,
  CreditCard,
  Banknote,
  Building2,
  Shield,
  Clock,
  Award,
  Users,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Globe,
    title: "Travel Forex",
    description:
      "Competitive exchange rates for your international travel needs. Buy and sell foreign currency with ease and confidence.",
    href: "/services/travel-forex",
  },
  {
    icon: Send,
    title: "Money Transfer",
    description:
      "Fast, secure international money transfers to and from South Africa. Reliable corridors with transparent pricing.",
    href: "/services/money-transfer",
  },
  {
    icon: CreditCard,
    title: "Prepaid Travel Cards",
    description:
      "Load multiple currencies onto a single card. Spend abroad without the hassle of carrying cash or worrying about rates.",
    href: "/services/prepaid-travel-cards",
  },
  {
    icon: Banknote,
    title: "Foreign Banknotes",
    description:
      "Access a wide range of foreign banknotes for your travels. Available in all major world currencies.",
    href: "/services/foreign-banknotes",
  },
  {
    icon: Building2,
    title: "Omnibus Facility",
    description:
      "Specialised wholesale forex solutions for businesses and institutions requiring bulk currency management.",
    href: "/services/omnibus-facility",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50K+", label: "Clients Served" },
  { value: "30+", label: "Currencies" },
  { value: "24hr", label: "Processing" },
];

const trustPoints = [
  {
    icon: Shield,
    title: "Fully Regulated",
    description:
      "Authorised Financial Services Provider, fully compliant with South African Reserve Bank regulations.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description:
      "Same-day processing on most transactions. Your time matters — we move at the speed of business.",
  },
  {
    icon: Award,
    title: "Best Rates",
    description:
      "Competitive exchange rates with transparent pricing. No hidden fees, no surprises.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description:
      "Dedicated account managers who understand your needs and guide you through every transaction.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-midnight via-navy to-navy-dark">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-28 sm:py-36 lg:py-44">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm text-cyan backdrop-blur-sm mb-8">
                <Shield className="h-3.5 w-3.5" />
                Authorised Financial Services Provider
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Your Currency.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-cyan-light">
                  Our Expertise.
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Border Forex delivers trusted foreign exchange, international
                money transfers, and travel currency solutions across South
                Africa. Competitive rates. Seamless service. Complete peace of
                mind.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan/25 hover:bg-cyan-dark transition-all hover:shadow-cyan/40"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Get a Quote
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats Bar */}
          <AnimatedSection delay={0.4}>
            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 lg:p-0">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:py-6">
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan">
                What We Offer
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-midnight">
                Complete Forex Solutions
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                From individual travellers to large institutions, we provide
                tailored foreign exchange services to meet every need.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group block h-full rounded-2xl border border-slate-200 p-8 hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/5 transition-all"
                >
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-cyan/10 text-cyan group-hover:bg-cyan group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-midnight group-hover:text-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan">
                  Why Border Forex
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-midnight">
                  Trusted by Thousands Across South Africa
                </h2>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                  We combine regulatory compliance, competitive rates, and
                  personal service to deliver a forex experience you can rely on
                  — every single time.
                </p>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-cyan-dark transition-colors"
                  >
                    Learn more about us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustPoints.map((point, i) => (
                <AnimatedSection key={point.title} delay={i * 0.1}>
                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-cyan/10 text-cyan">
                      <point.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-midnight">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-midnight py-24 lg:py-28">
        <div className="absolute top-0 left-1/2 w-[600px] h-[400px] bg-cyan/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Ready to Exchange?
            </h2>
            <p className="mt-5 text-lg text-slate-300 max-w-xl mx-auto">
              Whether you&apos;re travelling abroad or sending money home, we&apos;re
              here to help. Get in touch for a personalised quote.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan/25 hover:bg-cyan-dark transition-all"
              >
                Contact Us Today
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:info@borderforex.co.za"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                info@borderforex.co.za
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
