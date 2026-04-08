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
    "Learn about Border Forex — South Africa's trusted foreign exchange partner with over a decade of experience in forex and money transfer services.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with complete transparency. Every rate, every fee, every process is communicated clearly to our clients.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for the highest standards in service delivery, compliance, and client satisfaction — every single day.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description:
      "Your needs drive everything we do. We listen, understand, and deliver solutions tailored to your specific requirements.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "We make foreign exchange accessible to everyone — from first-time travellers to large financial institutions.",
  },
];

const milestones = [
  {
    year: "Founded",
    title: "Border Forex Established",
    description:
      "Started operations with a vision to make forex accessible and transparent for all South Africans.",
  },
  {
    year: "Growth",
    title: "Service Expansion",
    description:
      "Expanded our service offering to include money transfers, prepaid travel cards, and omnibus facilities.",
  },
  {
    year: "Scale",
    title: "50,000+ Clients",
    description:
      "Reached a milestone of serving over 50,000 clients across South Africa with our comprehensive forex solutions.",
  },
  {
    year: "Today",
    title: "Trusted Partner",
    description:
      "Recognised as a leading forex services provider, serving individuals, businesses, and financial institutions nationwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-midnight via-navy to-navy-dark py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan">
                About Us
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Built on Trust.
                <br />
                Driven by Service.
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                For over a decade, Border Forex has been South Africa&apos;s trusted
                partner for foreign exchange and international money transfers.
                We combine regulatory excellence with personal service to deliver
                results you can count on.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 lg:p-10 h-full">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-cyan/10 text-cyan">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-midnight">
                  Our Mission
                </h2>
                <p className="mt-3 text-slate-500 leading-relaxed">
                  To provide accessible, transparent, and reliable foreign
                  exchange services that empower South Africans to transact
                  globally with confidence. We believe everyone deserves fair
                  rates, clear communication, and expert guidance — regardless
                  of the size of their transaction.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 lg:p-10 h-full">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-cyan/10 text-cyan">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-midnight">
                  Our Vision
                </h2>
                <p className="mt-3 text-slate-500 leading-relaxed">
                  To be South Africa&apos;s most trusted foreign exchange services
                  provider — known for integrity, innovation, and unwavering
                  commitment to our clients. We envision a future where
                  international currency exchange is seamless, transparent, and
                  accessible to all.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan">
                Our Journey
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-midnight">
                Growing with South Africa
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, i) => (
              <AnimatedSection key={milestone.title} delay={i * 0.1}>
                <div className="relative rounded-2xl bg-white border border-slate-200 p-6 h-full">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan">
                    {milestone.year}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-midnight">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan">
                Our Values
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-midnight">
                What We Stand For
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="text-center rounded-2xl border border-slate-200 p-8 h-full">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-cyan/10 text-cyan mx-auto">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-midnight">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-navy to-midnight">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { icon: Clock, value: "10+", label: "Years in Business" },
                { icon: Users, value: "50K+", label: "Happy Clients" },
                { icon: Globe, value: "30+", label: "Currencies" },
                { icon: Shield, value: "100%", label: "SARB Compliant" },
              ].map((stat) => (
                <div key={stat.label}>
                  <stat.icon className="h-6 w-6 text-cyan mx-auto mb-3" />
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

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-midnight">
              Want to work with us?
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
              Whether you&apos;re an individual traveller or a financial institution,
              we&apos;d love to hear from you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan/25 hover:bg-cyan-dark transition-all"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-midnight hover:bg-slate-50 transition-colors"
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
