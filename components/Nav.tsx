"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { label: "Residential", href: "/services/residential", icon: "🏠" },
  { label: "Commercial", href: "/services/commercial", icon: "🏢" },
  { label: "EV Charger Installation", href: "/services/ev-charger-installation", icon: "⚡" },
  { label: "Installations", href: "/services/installations", icon: "💡" },
  { label: "Troubleshooting & Repairs", href: "/services/troubleshooting-repairs", icon: "🔧" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Projects", href: "/projects" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md backdrop-blur-sm" : "border-b border-black/[.06]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span
              className="text-xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--color-primary)",
              }}
            >
              Mr. Johnny
            </span>
            <span
              className="text-xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--color-accent)",
              }}
            >
              Electric
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((v) => !v)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-[var(--color-accent)]"
                    style={{ color: "var(--color-text)" }}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-black/[.06] py-2 z-50">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-[var(--color-surface)] transition-colors"
                          style={{ color: "var(--color-text)" }}
                        >
                          <span className="text-base">{s.icon}</span>
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-[var(--color-accent)]"
                  style={{
                    color:
                      pathname === link.href
                        ? "var(--color-accent)"
                        : "var(--color-text)",
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-md text-sm font-bold transition-colors hover:bg-[var(--color-accent-dark)]"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-primary)",
            }}
          >
            Get a Free Quote
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            style={{ color: "var(--color-primary)" }}
          >
            {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[calc(36px+64px)] z-40 overflow-y-auto"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <nav className="px-4 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label}>
                  <p
                    className="px-4 py-3 text-sm font-semibold uppercase tracking-wider opacity-60"
                    style={{ color: "white" }}
                  >
                    Services
                  </p>
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-white/10"
                      style={{ color: "white" }}
                    >
                      <span>{s.icon}</span>
                      {s.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-white/10"
                  style={{
                    color:
                      pathname === link.href
                        ? "var(--color-accent)"
                        : "white",
                  }}
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="mt-4 px-4">
              <a
                href="/contact"
                className="flex items-center justify-center w-full py-3 rounded-md text-base font-bold"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-primary)",
                }}
              >
                Get a Free Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
