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
      <section className="bg-gradient-to-br from-midnight via-navy to-navy-dark py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan">
                Contact Us
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Let&apos;s Talk Currency
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                Have a question about our services? Need a quote? Our team is
                ready to help you with all your foreign exchange needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-midnight">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-slate-500">
                  Fill out the form below and we&apos;ll get back to you within one
                  business day.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-8">
              {contactDetails.map((detail, i) => (
                <AnimatedSection key={detail.title} delay={i * 0.1}>
                  <div className="flex gap-4">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-cyan/10 text-cyan shrink-0">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-midnight">
                        {detail.title}
                      </h3>
                      <div className="mt-1.5 space-y-0.5">
                        {detail.lines.map((line) =>
                          detail.href ? (
                            <a
                              key={line}
                              href={detail.href}
                              className="block text-sm text-slate-500 hover:text-cyan transition-colors"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={line} className="text-sm text-slate-500">
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              {/* Map Placeholder */}
              <AnimatedSection delay={0.4}>
                <div className="rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="h-8 w-8 text-slate-300 mx-auto mb-3" />
                    <p className="text-sm text-slate-400">
                      Lombardy Business Park
                      <br />
                      Pretoria, South Africa
                    </p>
                    <a
                      href="https://maps.google.com/?q=Lombardy+Business+Park+Pretoria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
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
