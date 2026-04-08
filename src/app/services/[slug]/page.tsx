import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Globe,
  Send,
  CreditCard,
  Banknote,
  Building2,
  CheckCircle2,
  FileText,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface ServiceData {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string[];
  features: string[];
  requirements: string[];
  process: { step: string; description: string }[];
}

const serviceData: Record<string, ServiceData> = {
  "travel-forex": {
    icon: Globe,
    title: "Travel Forex",
    tagline: "Competitive rates for your international journey",
    description: [
      "Planning a trip abroad? Border Forex provides comprehensive travel forex services designed to give you the best value on your foreign currency. We offer exchange services across all major world currencies with rates that are consistently competitive.",
      "Our experienced consultants will help you plan your currency needs, advise on the best time to exchange, and ensure you have everything you need for a seamless international travel experience.",
    ],
    features: [
      "Competitive exchange rates across 30+ currencies",
      "Real-time rate monitoring and advisory",
      "Flexible transaction sizes — from holiday cash to business travel",
      "SARB-compliant documentation handled for you",
      "Same-day processing on most transactions",
      "Dedicated travel forex consultants",
    ],
    requirements: [
      "Valid South African ID or passport",
      "Proof of travel (flight bookings or itinerary)",
      "SARB tax clearance (for amounts exceeding allowances)",
      "Completed application form",
    ],
    process: [
      { step: "Enquire", description: "Contact us with your currency needs and travel dates." },
      { step: "Quote", description: "We provide a competitive rate locked for the transaction." },
      { step: "Documentation", description: "Submit the required documents for compliance." },
      { step: "Exchange", description: "Complete the transaction and collect your currency." },
    ],
  },
  "money-transfer": {
    icon: Send,
    title: "Money Transfer",
    tagline: "Fast, secure international transfers",
    description: [
      "Whether you're sending money to family abroad or receiving international payments, Border Forex provides fast and secure money transfer services through established global corridors.",
      "Our transfers are fully compliant with South African Reserve Bank regulations, ensuring your money moves safely and transparently across borders.",
    ],
    features: [
      "Global transfer network spanning 100+ countries",
      "Transparent fee structure with no hidden charges",
      "Fast processing — most transfers within 24 hours",
      "Real-time transfer tracking",
      "Inbound and outbound transfer support",
      "Business and personal transfer solutions",
    ],
    requirements: [
      "Valid South African ID or passport",
      "Proof of source of funds",
      "Beneficiary banking details",
      "SARB approval for large amounts",
    ],
    process: [
      { step: "Initiate", description: "Provide transfer details including amount and beneficiary." },
      { step: "Verify", description: "We verify documentation and compliance requirements." },
      { step: "Transfer", description: "Funds are sent through our secure transfer network." },
      { step: "Confirm", description: "Receive confirmation once funds reach the beneficiary." },
    ],
  },
  "prepaid-travel-cards": {
    icon: CreditCard,
    title: "Prepaid Travel Cards",
    tagline: "Smart spending across the globe",
    description: [
      "Our prepaid travel cards offer the perfect blend of convenience and security for international travellers. Load your card with the currencies you need before departure, lock in favourable exchange rates, and spend anywhere in the world.",
      "No more carrying large amounts of cash or worrying about fluctuating rates while abroad. Your prepaid travel card works just like a regular debit card at millions of merchants and ATMs worldwide.",
    ],
    features: [
      "Multi-currency loading capability",
      "Lock in exchange rates at time of loading",
      "Accepted at millions of merchants worldwide",
      "ATM withdrawals in local currency",
      "Online balance management",
      "Chip and PIN security",
    ],
    requirements: [
      "Valid South African ID or passport",
      "Proof of residential address",
      "Minimum loading amount applies",
      "Travel documentation for SARB compliance",
    ],
    process: [
      { step: "Apply", description: "Complete the card application at our office." },
      { step: "Load", description: "Choose your currencies and load your card." },
      { step: "Travel", description: "Use your card worldwide at merchants and ATMs." },
      { step: "Reload", description: "Top up online or visit us for additional loads." },
    ],
  },
  "foreign-banknotes": {
    icon: Banknote,
    title: "Foreign Banknotes",
    tagline: "Physical currency, ready when you are",
    description: [
      "Sometimes you need cash in hand. Border Forex stocks a comprehensive range of foreign banknotes across all major world currencies. Walk into our office, make your exchange, and leave ready for your journey.",
      "We maintain stock of popular currencies in various denominations to suit your needs, whether you're looking for spending money for a holiday or need specific denominations for business purposes.",
    ],
    features: [
      "Wide range of major world currencies in stock",
      "Various denominations available",
      "Walk-in service — no appointment needed",
      "Competitive cash exchange rates",
      "Buyback service for unused currency",
      "Small and large transaction support",
    ],
    requirements: [
      "Valid South African ID or passport",
      "Transactions within annual travel allowance limits",
      "Proof of travel for amounts exceeding daily limits",
    ],
    process: [
      { step: "Visit", description: "Walk into our office during business hours." },
      { step: "Select", description: "Choose the currencies and amounts you need." },
      { step: "Exchange", description: "Complete the transaction with ID verification." },
      { step: "Collect", description: "Receive your foreign banknotes immediately." },
    ],
  },
  "omnibus-facility": {
    icon: Building2,
    title: "Omnibus Facility",
    tagline: "Institutional-grade forex solutions",
    description: [
      "Our omnibus facility is designed for businesses, financial institutions, and forex bureaux that require wholesale access to foreign exchange markets. We provide bulk currency solutions with institutional-grade pricing and dedicated account management.",
      "Whether you're a money transfer operator, travel agency, or financial institution, our omnibus facility gives you the tools and rates to serve your own clients effectively while maintaining full regulatory compliance.",
    ],
    features: [
      "Wholesale exchange rates",
      "Bulk currency supply and management",
      "Dedicated institutional account manager",
      "Custom rate structures and agreements",
      "Regulatory compliance support",
      "Real-time market intelligence",
    ],
    requirements: [
      "Registered South African business",
      "FSCA licence (where applicable)",
      "SARB authorisation for forex dealing",
      "KYC and AML documentation",
    ],
    process: [
      { step: "Consult", description: "Meet with our institutional team to discuss your needs." },
      { step: "Agreement", description: "We structure a custom arrangement and rate agreement." },
      { step: "Onboard", description: "Complete compliance requirements and account setup." },
      { step: "Operate", description: "Access wholesale rates and dedicated support." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) return {};
  return { title: service.title, description: service.tagline };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-900 via-[#0a1628] to-navy-dark py-24 lg:py-28">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-[13px] text-gray-500 hover:text-cyan transition-colors mb-6"
            >
              <ArrowLeft className="h-3 w-3" />
              All Services
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-cyan/15 text-cyan">
                <Icon className="h-6 w-6" />
              </div>
              <h1 className="text-[36px] sm:text-[44px] font-bold tracking-tight text-white">
                {service.title}
              </h1>
            </div>
            <p className="text-[17px] text-gray-400 max-w-xl">
              {service.tagline}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-2 space-y-14">
              <AnimatedSection>
                <div className="space-y-3">
                  {service.description.map((p, i) => (
                    <p key={i} className="text-[15px] text-label-secondary leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-[20px] font-bold text-label mb-5">
                  Service Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-cyan mt-0.5 shrink-0" />
                      <span className="text-[13px] text-label-secondary">{f}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-[20px] font-bold text-label mb-5">
                  How It Works
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.process.map((step, i) => (
                    <div
                      key={step.step}
                      className="relative rounded-2xl bg-white border border-separator-light p-5"
                      style={{ boxShadow: "var(--shadow-sm)" }}
                    >
                      <div className="absolute -top-2.5 left-4 inline-flex items-center justify-center h-5 w-5 rounded-full bg-cyan text-white text-[10px] font-bold">
                        {i + 1}
                      </div>
                      <h3 className="text-[13px] font-semibold text-label mt-0.5">
                        {step.step}
                      </h3>
                      <p className="mt-1 text-[12px] text-label-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedSection>
                <div
                  className="rounded-2xl bg-white border border-separator-light p-6"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-navy" />
                    <h3 className="text-[13px] font-semibold text-label">
                      Requirements
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {service.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-[13px] text-label-secondary">
                        <div className="h-1 w-1 rounded-full bg-navy mt-1.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <div className="rounded-2xl bg-gradient-to-br from-navy to-gray-900 p-6 text-white">
                  <h3 className="text-[17px] font-bold">Ready to get started?</h3>
                  <p className="mt-1.5 text-[13px] text-gray-400">
                    Contact our team for a personalised quote and expert guidance.
                  </p>
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2 mt-4 w-full rounded-full bg-cyan px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-cyan-dark transition-all"
                  >
                    Get a Quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href="mailto:info@borderforex.co.za"
                    className="block mt-2 text-center text-[12px] text-gray-500 hover:text-cyan transition-colors"
                  >
                    info@borderforex.co.za
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
