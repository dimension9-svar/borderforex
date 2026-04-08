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
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan to-navy-light flex items-center justify-center">
                <span className="text-white font-bold text-sm">BF</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Border<span className="text-cyan">Forex</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-xs">
              Your trusted partner for foreign exchange, international money
              transfers, and travel currency solutions in South Africa.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-cyan mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  Unit 63, Block 4, Lombardy Business Park,
                  <br />
                  66 Graham Road, Shere, Pretoria, 0084
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan shrink-0" />
                <a
                  href="mailto:info@borderforex.co.za"
                  className="text-sm text-slate-400 hover:text-cyan transition-colors"
                >
                  info@borderforex.co.za
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan shrink-0" />
                <a
                  href="tel:+27123456789"
                  className="text-sm text-slate-400 hover:text-cyan transition-colors"
                >
                  +27 (0) 12 345 6789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Border Forex. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Authorised Financial Services Provider
          </p>
        </div>
      </div>
    </footer>
  );
}
