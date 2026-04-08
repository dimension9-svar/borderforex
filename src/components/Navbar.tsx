"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className="font-[family-name:var(--font-display)] text-[22px] font-bold tracking-[-0.04em] text-on-surface leading-none">
            border<span className="text-primary">forex</span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-[13px] font-medium text-on-surface-variant hover:text-on-surface transition-colors rounded-[var(--radius-sm)]">
              Home
            </Link>
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <Link href="/services" className="flex items-center gap-0.5 px-3 py-2 text-[13px] font-medium text-on-surface-variant hover:text-on-surface transition-colors rounded-[var(--radius-sm)]">
                Services <ChevronDown className="h-3 w-3" />
              </Link>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 rounded-[var(--radius-md)] bg-surface-container-low border border-outline-variant/30 p-1.5"
                    style={{ boxShadow: "var(--shadow-level2)" }}
                  >
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className="block px-3 py-2 text-[13px] font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-[var(--radius-sm)] transition-colors">
                        {s.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/about" className="px-3 py-2 text-[13px] font-medium text-on-surface-variant hover:text-on-surface transition-colors rounded-[var(--radius-sm)]">
              About
            </Link>
            <Link href="/contact" className="px-3 py-2 text-[13px] font-medium text-on-surface-variant hover:text-on-surface transition-colors rounded-[var(--radius-sm)]">
              Contact
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Link href="/quote" className="px-3 py-2 text-[13px] font-medium text-primary hover:text-on-primary-container transition-colors">
              Get a quote
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-[var(--radius-xl)] bg-primary px-5 py-2 text-[13px] font-medium text-on-primary hover:opacity-90 transition-opacity">
              Contact us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-[var(--radius-sm)] text-on-surface-variant" aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-outline-variant/30 bg-surface-container-lowest"
          >
            <div className="px-6 py-4 space-y-0.5">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-[14px] font-medium text-on-surface-variant rounded-[var(--radius-sm)]">Home</Link>
              <Link href="/services" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-[14px] font-medium text-on-surface-variant rounded-[var(--radius-sm)]">Services</Link>
              {services.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block pl-7 pr-3 py-2 text-[13px] text-outline rounded-[var(--radius-sm)]">{s.name}</Link>
              ))}
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-[14px] font-medium text-on-surface-variant rounded-[var(--radius-sm)]">About</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-[14px] font-medium text-on-surface-variant rounded-[var(--radius-sm)]">Contact</Link>
              <div className="pt-3 flex gap-3">
                <Link href="/quote" onClick={() => setMobileOpen(false)} className="flex-1 text-center rounded-[var(--radius-xl)] border border-outline px-4 py-2.5 text-[14px] font-medium text-primary">Get a quote</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex-1 text-center rounded-[var(--radius-xl)] bg-primary px-4 py-2.5 text-[14px] font-medium text-on-primary">Contact us</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
