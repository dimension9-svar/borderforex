import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Border Forex for foreign exchange quotes, money transfer enquiries, or any currency-related questions.",
};

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      "Unit 63, Block 4",
      "Lombardy Business Park",
      "66 Graham Road, Shere",
      "Pretoria, 0084",
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@borderforex.co.za"],
    href: "mailto:info@borderforex.co.za",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+27 (0) 12 345 6789"],
    href: "tel:+27123456789",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Fri: 08:00 – 17:00", "Sat: 09:00 – 13:00", "Sun: Closed"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-900 via-[#0a1628] to-navy-dark py-24 lg:py-28">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-cyan">
                Contact Us
              </p>
              <h1 className="mt-2 text-[40px] sm:text-[48px] font-bold tracking-tight text-white leading-[1.05]">
                Let&apos;s Talk Currency
              </h1>
              <p className="mt-4 text-[17px] text-gray-400 leading-relaxed">
                Have a question about our services? Need a quote? Our team is
                ready to help you with all your foreign exchange needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="text-[20px] font-bold text-label">
                  Send Us a Message
                </h2>
                <p className="mt-1.5 text-[14px] text-label-secondary">
                  Fill out the form below and we&apos;ll get back to you within one
                  business day.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-6">
              {contactDetails.map((detail, i) => (
                <AnimatedSection key={detail.title} delay={i * 0.08}>
                  <div className="flex gap-3">
                    <div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-fill text-cyan shrink-0">
                      <detail.icon className="h-[18px] w-[18px]" />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-semibold text-label">
                        {detail.title}
                      </h3>
                      <div className="mt-1 space-y-0.5">
                        {detail.lines.map((line) =>
                          detail.href ? (
                            <a key={line} href={detail.href} className="block text-[13px] text-label-secondary hover:text-cyan transition-colors">
                              {line}
                            </a>
                          ) : (
                            <p key={line} className="text-[13px] text-label-secondary">{line}</p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              {/* Map */}
              <AnimatedSection delay={0.32}>
                <div
                  className="rounded-2xl bg-white border border-separator-light overflow-hidden aspect-[4/3] flex items-center justify-center"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="text-center p-6">
                    <MapPin className="h-6 w-6 text-label-tertiary mx-auto mb-2" />
                    <p className="text-[13px] text-label-secondary">
                      Lombardy Business Park
                      <br />
                      Pretoria, South Africa
                    </p>
                    <a
                      href="https://maps.google.com/?q=Lombardy+Business+Park+Pretoria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-[13px] font-medium text-cyan hover:text-cyan-dark transition-colors"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
