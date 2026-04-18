import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Residential Electrician — Seattle, WA",
  description:
    "Licensed residential electrician serving Des Moines, Renton, Burien, Kent & Seattle, WA. Panel upgrades, rewires, outlets, lighting & more. Call (425) 894-8444.",
  alternates: { canonical: `${SITE_URL}/services/residential` },
  openGraph: {
    title: "Residential Electrician in Seattle, WA | Mr. Johnny Electric",
    description:
      "Panel upgrades, outlet installation, lighting, and full home rewires in the greater Seattle area. Licensed, bonded & insured. Call (425) 894-8444.",
    url: `${SITE_URL}/services/residential`,
    type: "website",
  },
};

const SERVICES = [
  {
    title: "Panel Upgrades",
    description: "Replace outdated 100A panels with modern 200A service to safely handle today's electrical loads.",
  },
  {
    title: "Outlet Installation",
    description: "Add new outlets, GFCI protection in kitchens and bathrooms, and USB charging receptacles.",
  },
  {
    title: "Lighting",
    description: "Recessed lighting, ceiling fan installs, dimmer switches, and exterior lighting.",
  },
  {
    title: "Full Home Rewires",
    description: "Replace aging or unsafe wiring — aluminum, knob-and-tube, or fire-damaged — with new copper wiring.",
  },
  {
    title: "Smoke & CO Detectors",
    description: "Hard-wired, interconnected smoke and carbon monoxide detector installation to code.",
  },
  {
    title: "Home Additions",
    description: "Electrical rough-in and finish work for room additions, ADUs, and garage conversions.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="Home Electrical"
        highlight="Services."
        description="From single outlets to full panel replacements — licensed electrical work you can trust. Free consultations, same-day response."
      />

      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl lg:text-3xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--color-primary)" }}
          >
            What we offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-[12px] p-6 border border-black/[.05] shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="block w-8 h-1 rounded-full mb-4"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-black/[.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-base font-medium" style={{ color: "var(--color-text-muted)" }}>
              Free consultations · Same-day response · Licensed & insured
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm transition-all hover:brightness-110"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
            >
              Get My Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
