import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Target, Eye, Heart, Award, Users, Globe, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Border Forex is an authorised dealer providing foreign exchange services across South Africa for over a decade.",
};

const values = [
  { icon: Shield, title: "Integrity", description: "Full transparency in every rate, fee, and process. Our margin is built into the rate — no hidden charges." },
  { icon: Award, title: "Excellence", description: "SARB-compliant processes, FICA-verified clients, and institutional-grade service standards." },
  { icon: Heart, title: "Client-first", description: "Named account managers, direct contact lines, and solutions tailored to your requirements." },
  { icon: Globe, title: "Accessibility", description: "Forex for everyone — from first-time travellers to financial institutions managing bulk currency." },
];

const milestones = [
  { year: "Founded", title: "Border Forex established", description: "Licensed as an Authorised Dealer with Limited Authority under the SA Reserve Bank." },
  { year: "Growth", title: "Service expansion", description: "Added international transfers, prepaid travel cards, and omnibus wholesale facilities." },
  { year: "Scale", title: "50,000+ clients served", description: "Individuals, SMEs, corporates, and financial institutions across South Africa." },
  { year: "Today", title: "Full-service forex provider", description: "30+ currencies, 100+ corridors, same-day processing, dedicated institutional desk." },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 lg:py-20 bg-surface-container-low border-b border-outline-variant/30">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <p className="text-[12px] font-medium uppercase tracking-widest text-primary">About</p>
            <h1 className="mt-2 text-[36px] sm:text-[44px] font-normal tracking-[-0.03em] text-on-surface leading-[1.08]">Built on compliance.<br />Driven by service.</h1>
            <p className="mt-4 text-[17px] font-light text-on-surface-variant leading-[1.6] max-w-lg">
              Border Forex is an authorised foreign exchange dealer operating under licence from the South African Reserve Bank. For over a decade, we&apos;ve served individuals, businesses, and financial institutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <AnimatedSection>
              <div className="h-full rounded-[var(--radius-lg)] bg-surface-container-lowest border border-outline-variant/30 p-7" style={{ boxShadow: "var(--shadow-level1)" }}>
                <Target className="h-5 w-5 text-primary" />
                <h2 className="mt-3 text-[17px] font-medium text-on-surface">Our mission</h2>
                <p className="mt-2 text-[14px] text-on-surface-variant leading-[1.6]">To provide accessible, transparent, and SARB-compliant foreign exchange services that let South Africans transact globally with confidence — regardless of transaction size.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.04}>
              <div className="h-full rounded-[var(--radius-lg)] bg-surface-container-lowest border border-outline-variant/30 p-7" style={{ boxShadow: "var(--shadow-level1)" }}>
                <Eye className="h-5 w-5 text-primary" />
                <h2 className="mt-3 text-[17px] font-medium text-on-surface">Our vision</h2>
                <p className="mt-2 text-[14px] text-on-surface-variant leading-[1.6]">To be South Africa&apos;s most trusted forex provider — recognised for regulatory integrity, rate transparency, and service that treats every client like an institution.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 lg:py-28 bg-surface-container-low">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <p className="text-[12px] font-medium uppercase tracking-widest text-primary">Our journey</p>
            <h2 className="mt-2 text-[28px] sm:text-[32px] font-normal tracking-[-0.02em] text-on-surface">Growing with South Africa</h2>
          </AnimatedSection>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.title} delay={i * 0.04}>
                <div className="flex flex-col h-full rounded-[var(--radius-lg)] bg-surface-container-lowest border border-outline-variant/30 p-5" style={{ boxShadow: "var(--shadow-level1)" }}>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-primary">{m.year}</span>
                  <h3 className="mt-2 text-[14px] font-medium text-on-surface">{m.title}</h3>
                  <p className="mt-1 text-[13px] text-on-surface-variant leading-[1.5] flex-1">{m.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <p className="text-[12px] font-medium uppercase tracking-widest text-primary">Values</p>
            <h2 className="mt-2 text-[28px] sm:text-[32px] font-normal tracking-[-0.02em] text-on-surface">What we stand for</h2>
          </AnimatedSection>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.04}>
                <div className="flex flex-col h-full rounded-[var(--radius-lg)] bg-surface-container-lowest border border-outline-variant/30 p-5" style={{ boxShadow: "var(--shadow-level1)" }}>
                  <v.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 text-[14px] font-medium text-on-surface">{v.title}</h3>
                  <p className="mt-1 text-[13px] text-on-surface-variant leading-[1.5] flex-1">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary-container">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Clock, value: "10+", label: "Years operating" },
              { icon: Users, value: "50K+", label: "Clients served" },
              { icon: Globe, value: "30+", label: "Currencies traded" },
              { icon: Shield, value: "100%", label: "SARB compliant" },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="h-5 w-5 text-on-secondary-container mx-auto mb-2" />
                <div className="text-[24px] font-semibold tracking-tight text-on-secondary-container">{stat.value}</div>
                <div className="mt-0.5 text-[12px] text-on-secondary-container/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-[22px] font-normal tracking-[-0.01em] text-on-surface">Work with us</h2>
            <p className="mt-2 text-[15px] text-on-surface-variant max-w-md mx-auto">Individual, corporate, or institutional — we&apos;d like to hear from you.</p>
            <div className="mt-6 flex gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-xl)] bg-primary px-6 py-3 text-[14px] font-medium text-on-primary hover:opacity-90 transition-opacity">Get in touch <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-[var(--radius-xl)] border border-outline px-6 py-3 text-[14px] font-medium text-on-surface hover:bg-surface-container transition-colors">View services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
