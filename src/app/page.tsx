import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Clock,
  Award,
  Users,
  Lock,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroCalculator from "@/components/HeroCalculator";
import ServiceCard from "@/components/ServiceCard";
import CountUp from "@/components/CountUp";
import CurrencyTicker from "@/components/CurrencyTicker";
import ParallaxBanner from "@/components/ParallaxBanner";
import Testimonials from "@/components/Testimonials";

const services = [
  { iconName: "Globe", title: "Travel Forex", description: "Buy and sell 30+ foreign currencies at competitive rates for international travel.", href: "/services/travel-forex" },
  { iconName: "Send", title: "Money Transfer", description: "Send money to 100+ countries with same-day processing and transparent fees.", href: "/services/money-transfer" },
  { iconName: "CreditCard", title: "Prepaid Travel Cards", description: "Lock in rates before you travel. Spend in local currency at 36M+ merchants worldwide.", href: "/services/prepaid-travel-cards" },
  { iconName: "Banknote", title: "Foreign Banknotes", description: "Walk in, exchange, walk out. Major currencies in stock, no appointment needed.", href: "/services/foreign-banknotes" },
  { iconName: "Building2", title: "Omnibus Facility", description: "Wholesale forex for bureaux, MTOs, and financial institutions. Custom rate structures.", href: "/services/omnibus-facility" },
];

const trustPoints = [
  { icon: Shield, title: "SARB Authorised", description: "Authorised Dealer with Limited Authority, fully compliant with SA Reserve Bank Exchange Control regulations." },
  { icon: Clock, title: "Same-Day Processing", description: "Most forex transactions processed within 4 business hours. Transfers settled within 24 hours to major corridors." },
  { icon: Award, title: "Transparent Pricing", description: "No hidden fees. Our rate includes our margin — what you see on the quote is what you pay." },
  { icon: Users, title: "Dedicated Support", description: "Named account managers for every client. Direct line, direct email, direct answers." },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-inverse-surface min-h-[540px]">
        <Image src="/hero-travel.jpg" alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#191c1d]/95 via-[#191c1d]/80 to-[#191c1d]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191c1d]/30 to-transparent" />

        <div className="relative mx-auto max-w-[1120px] px-6 py-20 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <AnimatedSection>
                <h1 className="text-[36px] sm:text-[44px] lg:text-[48px] font-normal tracking-[-0.03em] text-inverse-on-surface leading-[1.08]">
                  Exchange currency at
                  <br />
                  <span className="font-semibold text-inverse-primary">rates you can verify.</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.05}>
                <p className="mt-5 text-[17px] font-light text-inverse-on-surface/70 leading-[1.6] max-w-md">
                  Border Forex is an authorised dealer providing foreign
                  exchange, international transfers, and travel currency
                  across South Africa. Transparent rates. No hidden fees.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-xl)] bg-primary px-6 py-3 text-[14px] font-medium text-on-primary hover:opacity-90 transition-opacity">
                    View services <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-xl)] border border-inverse-on-surface/20 px-6 py-3 text-[14px] font-medium text-inverse-on-surface hover:bg-inverse-on-surface/5 transition-colors">
                    Contact us
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-inverse-on-surface/50">
                  <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-inverse-primary" /> SARB Authorised Dealer</span>
                  <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-inverse-primary" /> FSCA Regulated</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-inverse-primary" /> FICA Compliant</span>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.1} className="flex justify-center lg:justify-end">
              <HeroCalculator />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Currency ticker ── */}
      <CurrencyTicker />

      {/* ── Stats ── */}
      <section className="border-b border-outline-variant/30 bg-surface-container-lowest">
        <div className="mx-auto max-w-[1120px] px-6 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-outline-variant/30">
            {[
              { value: "10+", label: "Years operating" },
              { value: "30+", label: "Currencies traded" },
              { value: "100+", label: "Transfer countries" },
              { value: "4hrs", label: "Avg. processing" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:px-6">
                <CountUp value={stat.value} className="text-[24px] font-semibold tracking-tight text-on-surface" />
                <div className="mt-0.5 text-[12px] text-on-surface-variant">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <p className="text-[12px] font-medium uppercase tracking-widest text-primary">Services</p>
            <h2 className="mt-2 text-[28px] sm:text-[32px] font-normal tracking-[-0.02em] text-on-surface">What we offer</h2>
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.04}>
                <ServiceCard
                  iconName={s.iconName}
                  title={s.title}
                  description={s.description}
                  href={s.href}
                  index={i}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lifestyle banner (parallax) ── */}
      <ParallaxBanner />

      {/* ── Why us ── */}
      <section className="py-20 lg:py-28 bg-surface-container-low">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <p className="text-[12px] font-medium uppercase tracking-widest text-primary">Why us</p>
                <h2 className="mt-2 text-[28px] sm:text-[32px] font-normal tracking-[-0.02em] text-on-surface leading-tight">
                  Built on compliance. Backed by service.
                </h2>
                <p className="mt-4 text-[15px] text-on-surface-variant leading-[1.6]">
                  We hold an Authorised Dealer with Limited Authority licence
                  from the South African Reserve Bank. Every transaction is
                  FICA-verified, exchange control compliant, and supported
                  by a named account manager.
                </p>
                <Link href="/about" className="inline-flex items-center gap-1.5 mt-6 text-[13px] font-medium text-primary hover:underline">
                  About our company <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trustPoints.map((p, i) => (
                <AnimatedSection key={p.title} delay={i * 0.04}>
                  <div className="flex flex-col h-full rounded-[var(--radius-lg)] bg-surface-container-lowest border border-outline-variant/30 p-5" style={{ boxShadow: "var(--shadow-level1)" }}>
                    <p.icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 text-[14px] font-medium text-on-surface">{p.title}</h3>
                    <p className="mt-1 text-[13px] text-on-surface-variant leading-[1.5] flex-1">{p.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── CTA ── */}
      <section className="py-20 lg:py-24 bg-primary-container">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-[28px] sm:text-[36px] font-normal tracking-[-0.02em] text-on-primary-container">
              Ready to exchange?
            </h2>
            <p className="mt-3 text-[16px] text-on-primary-container/70 max-w-md mx-auto">
              Get a live rate from our team within the hour during business
              hours. No obligation, no hidden fees.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/quote" className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-xl)] bg-primary px-6 py-3 text-[14px] font-medium text-on-primary hover:opacity-90 transition-opacity">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="mailto:info@borderforex.co.za" className="inline-flex items-center justify-center rounded-[var(--radius-xl)] border border-on-primary-container/20 px-6 py-3 text-[14px] font-medium text-on-primary-container hover:bg-on-primary-container/5 transition-colors">
                info@borderforex.co.za
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
