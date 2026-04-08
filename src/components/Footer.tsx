import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";

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
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-[1120px] px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Logo size={28} />
              <span className="text-[15px] font-semibold tracking-tight">
                Border<span className="text-cyan">Forex</span>
              </span>
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed text-gray-400 max-w-xs">
              Your trusted partner for foreign exchange, international money
              transfers, and travel currency solutions in South Africa.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-gray-400 hover:text-cyan transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-gray-400 hover:text-cyan transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-cyan mt-0.5 shrink-0" />
                <span className="text-[13px] leading-snug text-gray-400">
                  Unit 63, Block 4, Lombardy Business Park,
                  <br />
                  66 Graham Road, Shere, Pretoria, 0084
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-cyan shrink-0" />
                <a href="mailto:info@borderforex.co.za" className="text-[13px] text-gray-400 hover:text-cyan transition-colors">
                  info@borderforex.co.za
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 text-cyan shrink-0" />
                <a href="tel:+27123456789" className="text-[13px] text-gray-400 hover:text-cyan transition-colors">
                  +27 (0) 12 345 6789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-gray-600">
            &copy; {new Date().getFullYear()} Border Forex. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-600">
            Authorised Financial Services Provider
          </p>
        </div>
      </div>
    </footer>
  );
}
