"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan to-navy flex items-center justify-center">
              <span className="text-white font-bold text-sm">BF</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-midnight">
              Border<span className="text-cyan">Forex</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan transition-colors rounded-lg hover:bg-slate-50"
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
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan transition-colors rounded-lg hover:bg-slate-50"
              >
                Services
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100 p-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-3 py-2.5 text-sm text-slate-600 hover:text-cyan hover:bg-slate-50 rounded-lg transition-colors"
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
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan transition-colors rounded-lg hover:bg-slate-50"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan transition-colors rounded-lg hover:bg-slate-50"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-cyan/25 hover:bg-cyan-dark transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50"
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
            className="lg:hidden overflow-hidden border-t border-slate-100 bg-white"
          >
            <div className="px-6 py-4 space-y-1">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-cyan rounded-lg"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-cyan rounded-lg"
              >
                Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setMobileOpen(false)}
                  className="block pl-7 pr-3 py-2 text-sm text-slate-400 hover:text-cyan rounded-lg"
                >
                  {service.name}
                </Link>
              ))}
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-cyan rounded-lg"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-cyan rounded-lg"
              >
                Contact
              </Link>
              <div className="pt-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
