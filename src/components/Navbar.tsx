"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

const services = [
  { name: "Travel Forex", href: "/services/travel-forex" },
  { name: "Money Transfer", href: "/services/money-transfer" },
  { name: "Prepaid Travel Cards", href: "/services/prepaid-travel-cards" },
  { name: "Foreign Banknotes", href: "/services/foreign-banknotes" },
  { name: "Omnibus Facility", href: "/services/omnibus-facility" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-separator-light/60">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="flex h-12 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo size={28} />
            <span className="text-[15px] font-semibold tracking-tight text-label">
              Border<span className="text-cyan">Forex</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/"
              className="px-3 py-1.5 text-xs font-medium text-label-secondary hover:text-label transition-colors rounded-lg"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="flex items-center gap-0.5 px-3 py-1.5 text-xs font-medium text-label-secondary hover:text-label transition-colors rounded-lg"
              >
                Services
                <ChevronDown className="h-3 w-3" />
              </Link>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-xl bg-white/80 backdrop-blur-2xl backdrop-saturate-150 shadow-lg border border-separator-light/60 p-1.5"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-3 py-2 text-xs font-medium text-label-secondary hover:text-cyan hover:bg-fill rounded-lg transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="px-3 py-1.5 text-xs font-medium text-label-secondary hover:text-label transition-colors rounded-lg"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-medium text-label-secondary hover:text-label transition-colors rounded-lg"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/quote"
              className="px-3 py-1.5 text-xs font-medium text-cyan hover:text-cyan-dark transition-colors"
            >
              Get a quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-cyan px-4 py-1.5 text-xs font-medium text-white hover:bg-cyan-dark transition-colors"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 rounded-lg text-label-secondary hover:bg-fill transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-separator-light/60 bg-surface/90 backdrop-blur-2xl"
          >
            <div className="px-6 py-4 space-y-0.5">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-label-secondary hover:text-cyan rounded-lg">
                Home
              </Link>
              <Link href="/services" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-label-secondary hover:text-cyan rounded-lg">
                Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setMobileOpen(false)}
                  className="block pl-7 pr-3 py-2 text-sm text-label-tertiary hover:text-cyan rounded-lg"
                >
                  {service.name}
                </Link>
              ))}
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-label-secondary hover:text-cyan rounded-lg">
                About
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-label-secondary hover:text-cyan rounded-lg">
                Contact
              </Link>
              <div className="pt-3 flex gap-3">
                <Link href="/quote" onClick={() => setMobileOpen(false)} className="flex-1 text-center rounded-lg border border-separator px-4 py-2.5 text-sm font-medium text-cyan">
                  Get a quote
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex-1 text-center rounded-lg bg-cyan px-4 py-2.5 text-sm font-medium text-white">
                  Contact us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
