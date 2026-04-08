import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Border Forex for forex quotes, money transfer enquiries, or currency questions.",
};

const contactDetails = [
  { icon: MapPin, title: "Visit us", lines: ["Unit 63, Block 4", "Lombardy Business Park", "66 Graham Road, Shere", "Pretoria, 0084"] },
  { icon: Mail, title: "Email us", lines: ["info@borderforex.co.za"], href: "mailto:info@borderforex.co.za" },
  { icon: Phone, title: "Call us", lines: ["+27 (0) 12 345 6789"], href: "tel:+27123456789" },
  { icon: Clock, title: "Business hours", lines: ["Mon – Fri: 08:00 – 17:00", "Sat: 09:00 – 13:00", "Sun: Closed"] },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-16 lg:py-20 bg-surface-container-low border-b border-outline-variant/30">
        <div className="mx-auto max-w-[1120px] px-6">
          <AnimatedSection>
            <p className="text-[12px] font-medium uppercase tracking-widest text-primary">Contact</p>
            <h1 className="mt-2 text-[36px] sm:text-[44px] font-normal tracking-[-0.03em] text-on-surface leading-[1.08]">Get in touch</h1>
            <p className="mt-4 text-[17px] font-light text-on-surface-variant leading-[1.6] max-w-lg">
              Need a rate? Have a question? Our team responds within one business day — usually within the hour during office hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="text-[17px] font-medium text-on-surface">Send us a message</h2>
                <p className="mt-1 text-[14px] text-on-surface-variant">We&apos;ll respond within one business day.</p>
                <div className="mt-6"><ContactForm /></div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-2 space-y-6">
              {contactDetails.map((d, i) => (
                <AnimatedSection key={d.title} delay={i * 0.04}>
                  <div className="flex gap-3">
                    <d.icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-[13px] font-medium text-on-surface">{d.title}</h3>
                      <div className="mt-1 space-y-0.5">
                        {d.lines.map((line) =>
                          d.href ? <a key={line} href={d.href} className="block text-[13px] text-on-surface-variant hover:text-primary transition-colors">{line}</a>
                            : <p key={line} className="text-[13px] text-on-surface-variant">{line}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
              <AnimatedSection delay={0.16}>
                <div className="rounded-[var(--radius-lg)] bg-surface-container-lowest border border-outline-variant/30 overflow-hidden aspect-[4/3] flex items-center justify-center" style={{ boxShadow: "var(--shadow-level1)" }}>
                  <div className="text-center p-6">
                    <MapPin className="h-5 w-5 text-outline mx-auto mb-2" />
                    <p className="text-[13px] text-on-surface-variant">Lombardy Business Park<br />Pretoria, South Africa</p>
                    <a href="https://maps.google.com/?q=Lombardy+Business+Park+Pretoria" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-[12px] font-medium text-primary hover:underline">Open in Google Maps</a>
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
