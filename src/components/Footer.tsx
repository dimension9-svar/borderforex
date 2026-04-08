import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Travel Forex", href: "/services/travel-forex" },
    { name: "Money Transfer", href: "/services/money-transfer" },
    { name: "Prepaid Travel Cards", href: "/services/prepaid-travel-cards" },
    { name: "Foreign Banknotes", href: "/services/foreign-banknotes" },
    { name: "Omnibus Facility", href: "/services/omnibus-facility" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Get a Quote", href: "/quote" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant/30">
      <div className="mx-auto max-w-[1120px] px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <Link href="/" className="font-[family-name:var(--font-display)] text-[20px] font-bold tracking-[-0.04em] text-on-surface leading-none">
              border<span className="text-primary">forex</span>
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed text-on-surface-variant max-w-xs">
              Authorised dealer providing foreign exchange, international
              transfers, and travel currency solutions across South Africa.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-outline">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.services.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-[13px] text-on-surface-variant hover:text-primary transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-outline">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-[13px] text-on-surface-variant hover:text-primary transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-outline">Contact</h3>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                <span className="text-[13px] leading-snug text-on-surface-variant">Unit 63, Block 4, Lombardy Business Park,<br />66 Graham Road, Shere, Pretoria, 0084</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <a href="mailto:info@borderforex.co.za" className="text-[13px] text-on-surface-variant hover:text-primary transition-colors">info@borderforex.co.za</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                <a href="tel:+27123456789" className="text-[13px] text-on-surface-variant hover:text-primary transition-colors">+27 (0) 12 345 6789</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-outline">&copy; {new Date().getFullYear()} Border Forex. All rights reserved.</p>
          <p className="text-[11px] text-outline">Authorised Financial Services Provider</p>
        </div>
      </div>
    </footer>
  );
}
