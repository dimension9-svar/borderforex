import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Globe,
  Clock,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Border Forex — South Africa's trusted foreign exchange partner with over a decade of experience.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Complete transparency in every rate, fee, and process we communicate to our clients.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "The highest standards in service delivery, compliance, and client satisfaction — every day.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description:
      "Your needs drive everything we do. Tailored solutions for your specific requirements.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "Making forex accessible to everyone — from first-time travellers to large institutions.",
  },
];

const milestones = [
  {
    year: "Founded",
    title: "Border Forex Established",
    description: "Started with a vision to make forex accessible and transparent for all South Africans.",
  },
  {
    year: "Growth",
    title: "Service Expansion",
    description: "Expanded to money transfers, prepaid travel cards, and omnibus facilities.",
  },
  {
    year: "Scale",
    title: "50,000+ Clients",
    description: "Reached a milestone of serving over 50,000 clients across South Africa.",
  },
  {
    year: "Today",
    title: "Trusted Partner",
    description: "Recognised as a leading forex provider serving individuals, businesses, and institutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-900 via-[#0a1628] to-navy-dark py-24 lg:py-28">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-cyan">
                About Us
              </p>
              <h1 className="mt-2 text-[40px] sm:text-[48px] font-bold tracking-tight text-white leading-[1.05]">
                Built on Trust.
                <br />
                Driven by Service.
              </h1>
              <p className="mt-4 text-[17px] text-gray-400 leading-relaxed">
                For over a decade, Border Forex has been South Africa&apos;s trusted
                partner for foreign exchange and international money transfers.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <AnimatedSection>
              <div
                className="h-full rounded-2xl bg-white border border-separator-light p-8"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-fill text-cyan">
                  <Target className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-[20px] font-bold text-label">
                  Our Mission
                </h2>
                <p className="mt-2 text-[14px] text-label-secondary leading-relaxed">
                  To provide accessible, transparent, and reliable foreign
                  exchange services that empower South Africans to transact
                  globally with confidence. We believe everyone deserves fair
                  rates, clear communication, and expert guidance — regardless
                  of transaction size.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <div
                className="h-full rounded-2xl bg-white border border-separator-light p-8"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-fill text-cyan">
                  <Eye className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-[20px] font-bold text-label">
                  Our Vision
                </h2>
                <p className="mt-2 text-[14px] text-label-secondary leading-relaxed">
                  To be South Africa&apos;s most trusted foreign exchange services
                  provider — known for integrity, innovation, and unwavering
                  commitment to our clients. We envision a future where
                  international currency exchange is seamless and accessible to
                  all.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24 lg:py-32 bg-fill">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-cyan">
                Our Journey
              </p>
              <h2 className="mt-2 text-[32px] sm:text-[36px] font-bold tracking-tight text-label leading-tight">
                Growing with South Africa
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((milestone, i) => (
              <AnimatedSection key={milestone.title} delay={i * 0.08}>
                <div
                  className="flex flex-col h-full rounded-2xl bg-white border border-separator-light p-6"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <span className="text-[11px] font-bold uppercase tracking-widest text-cyan">
                    {milestone.year}
                  </span>
                  <h3 className="mt-2 text-[15px] font-semibold text-label">
                    {milestone.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-label-secondary leading-relaxed flex-1">
                    {milestone.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <div className="text-center max-w-xl mx-auto">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-cyan">
                Our Values
              </p>
              <h2 className="mt-2 text-[32px] sm:text-[36px] font-bold tracking-tight text-label leading-tight">
                What We Stand For
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div
                  className="flex flex-col h-full text-center rounded-2xl bg-white border border-separator-light p-7"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-fill text-cyan mx-auto">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold text-label">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-label-secondary leading-relaxed flex-1">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-b from-navy to-gray-900">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { icon: Clock, value: "10+", label: "Years in Business" },
                { icon: Users, value: "50K+", label: "Happy Clients" },
                { icon: Globe, value: "30+", label: "Currencies" },
                { icon: Shield, value: "100%", label: "SARB Compliant" },
              ].map((stat) => (
                <div key={stat.label}>
                  <stat.icon className="h-5 w-5 text-cyan mx-auto mb-2" />
                  <div className="text-[28px] font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="mt-0.5 text-[12px] font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-[24px] sm:text-[28px] font-bold tracking-tight text-label">
              Want to work with us?
            </h2>
            <p className="mt-3 text-[16px] text-label-secondary max-w-lg mx-auto">
              Whether you&apos;re an individual traveller or a financial institution,
              we&apos;d love to hear from you.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-cyan/20 hover:bg-cyan-dark transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-separator px-6 py-3 text-[14px] font-semibold text-label hover:bg-fill transition-all"
              >
                View Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
