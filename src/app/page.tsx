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
import HeroGraphic from "@/components/HeroGraphic";

const services = [
  {
    icon: Globe,
    title: "Travel Forex",
    description:
      "Competitive exchange rates for your international travel. Buy and sell foreign currency with confidence.",
    href: "/services/travel-forex",
  },
  {
    icon: Send,
    title: "Money Transfer",
    description:
      "Fast, secure international money transfers to and from South Africa with transparent pricing.",
    href: "/services/money-transfer",
  },
  {
    icon: CreditCard,
    title: "Prepaid Travel Cards",
    description:
      "Load multiple currencies onto a single card. Lock in rates and spend abroad with ease.",
    href: "/services/prepaid-travel-cards",
  },
  {
    icon: Banknote,
    title: "Foreign Banknotes",
    description:
      "Access a wide range of foreign banknotes for your travels, available in all major currencies.",
    href: "/services/foreign-banknotes",
  },
  {
    icon: Building2,
    title: "Omnibus Facility",
    description:
      "Wholesale forex solutions for businesses and institutions requiring bulk currency management.",
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
      "Authorised Financial Services Provider, fully compliant with SARB regulations.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description:
      "Same-day processing on most transactions. We move at the speed of business.",
  },
  {
    icon: Award,
    title: "Best Rates",
    description:
      "Competitive exchange rates with transparent pricing. No hidden fees.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description:
      "Dedicated account managers who understand your needs and guide every transaction.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-[#0a1628] to-navy-dark">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }} />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan/[0.06] rounded-full blur-[150px] translate-x-1/4 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-light/20 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />

        <div className="relative mx-auto max-w-[1120px] px-6 py-24 sm:py-32 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <AnimatedSection>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.07] border border-white/[0.08] px-3 py-1 text-[12px] font-medium text-cyan backdrop-blur-sm mb-6">
                  <Shield className="h-3 w-3" />
                  Authorised Financial Services Provider
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight text-white leading-[1.05]">
                  Your Currency.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-cyan-light to-cyan">
                    Our Expertise.
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.16}>
                <p className="mt-5 text-[17px] text-gray-400 leading-relaxed max-w-lg">
                  Border Forex delivers trusted foreign exchange, international
                  money transfers, and travel currency solutions across South
                  Africa. Competitive rates. Seamless service.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.24}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-cyan/20 hover:bg-cyan-dark transition-all hover:shadow-cyan/30 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Explore Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[14px] font-semibold text-white hover:bg-white/[0.06] transition-all backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Get a Quote
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Animated SVG Graphic */}
            <AnimatedSection delay={0.2}>
              <HeroGraphic />
            </AnimatedSection>
          </div>

          {/* Stats Bar */}
          <AnimatedSection delay={0.32}>
            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/[0.06] border border-white/[0.06] backdrop-blur-sm">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center py-6 px-4 bg-white/[0.02]">
                  <div className="text-[28px] font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="mt-0.5 text-[12px] font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <div className="text-center max-w-xl mx-auto">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-cyan">
                What We Offer
              </p>
              <h2 className="mt-2 text-[32px] sm:text-[36px] font-bold tracking-tight text-label leading-tight">
                Complete Forex Solutions
              </h2>
              <p className="mt-3 text-[16px] text-label-secondary leading-relaxed">
                From individual travellers to large institutions, we provide
                tailored foreign exchange services to meet every need.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.06}>
                <Link
                  href={service.href}
                  className="group flex flex-col h-full rounded-2xl bg-white border border-separator-light p-7 hover:border-cyan/20 hover:shadow-lg transition-all duration-300"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-fill text-cyan group-hover:bg-cyan group-hover:text-white transition-all duration-300">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold text-label group-hover:text-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-label-secondary leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-cyan opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 lg:py-32 bg-fill">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-widest text-cyan">
                  Why Border Forex
                </p>
                <h2 className="mt-2 text-[32px] sm:text-[36px] font-bold tracking-tight text-label leading-tight">
                  Trusted by Thousands Across South Africa
                </h2>
                <p className="mt-3 text-[16px] text-label-secondary leading-relaxed">
                  We combine regulatory compliance, competitive rates, and
                  personal service to deliver a forex experience you can rely on
                  — every single time.
                </p>
                <div className="mt-6">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-cyan hover:text-cyan-dark transition-colors"
                  >
                    Learn more about us
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map((point, i) => (
                <AnimatedSection key={point.title} delay={i * 0.08}>
                  <div
                    className="flex flex-col h-full rounded-2xl bg-white border border-separator-light p-6"
                    style={{ boxShadow: "var(--shadow-sm)" }}
                  >
                    <div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-fill text-cyan">
                      <point.icon className="h-[18px] w-[18px]" />
                    </div>
                    <h3 className="mt-3 text-[14px] font-semibold text-label">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-label-secondary leading-relaxed flex-1">
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
      <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy-dark to-gray-900 py-24 lg:py-28">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-cyan/[0.06] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative mx-auto max-w-[1120px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-bold tracking-tight text-white leading-tight">
              Ready to Exchange?
            </h2>
            <p className="mt-4 text-[17px] text-gray-400 max-w-lg mx-auto">
              Whether you&apos;re travelling abroad or sending money home, we&apos;re
              here to help. Get in touch for a personalised quote.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-3 text-[14px] font-semibold text-white shadow-lg shadow-cyan/20 hover:bg-cyan-dark transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:info@borderforex.co.za"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-[14px] font-semibold text-white hover:bg-white/[0.06] transition-all"
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
