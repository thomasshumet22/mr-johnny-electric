import Link from "next/link";

const serviceLinks = [
  { label: "Residential", href: "/services/residential" },
  { label: "Commercial", href: "/services/commercial" },
  { label: "EV Charger Installation", href: "/services/ev-charger-installation" },
  { label: "Troubleshooting & Repairs", href: "/services/troubleshooting-repairs" },
  { label: "Installations", href: "/services/installations" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-primary)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div>
              <span
                className="text-2xl font-extrabold tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Mr. Johnny{" "}
                <span style={{ color: "var(--color-accent)" }}>Electric</span>
              </span>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Licensed, bonded, and insured electricians serving the Greater
                Seattle area. 4.9 stars on Google · Free consultations available.
              </p>
            </div>

            {/* License + credentials */}
            <div className="text-sm text-white/70 space-y-1">
              <p className="font-semibold text-white">Licensed · Bonded · Insured</p>
              <p>WA Electrical Contractor License #ELECTIM772PP</p>
            </div>

            {/* Social placeholder */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/60 hover:text-[var(--color-accent)] transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.google.com/maps/place/Mr.+Johnny+Electric"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business"
                className="text-white/60 hover:text-[var(--color-accent)] transition-colors"
              >
                <GoogleIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <a
                  href="tel:4258948444"
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  (425) 894-8444
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mrjohnnyelectric.com"
                  className="hover:text-white transition-colors"
                >
                  info@mrjohnnyelectric.com
                </a>
              </li>
              <li className="leading-relaxed">
                22900 24th Ave S<br />
                Des Moines, WA 98198
              </li>
              <li>Mon–Fri, 7am–6pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Mr. Johnny Electric. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12a10 10 0 10-11.563 9.877v-6.987H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988A10.003 10.003 0 0022 12z" />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
    </svg>
  );
}
