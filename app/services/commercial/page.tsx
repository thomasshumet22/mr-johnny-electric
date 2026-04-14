import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Commercial Electrician — Seattle, WA",
  description:
    "Licensed commercial electrician serving greater Seattle, WA. New construction, tenant improvements, panel upgrades & maintenance. Call (425) 894-8444.",
  alternates: { canonical: `${SITE_URL}/services/commercial` },
  openGraph: {
    title: "Commercial Electrician in Seattle, WA | Mr. Johnny Electric",
    description:
      "Commercial electrical contracting for offices, retail, warehouses & new builds across the greater Seattle area. Licensed, bonded & insured.",
    url: `${SITE_URL}/services/commercial`,
    type: "website",
  },
};

const SERVICES = [
  {
    title: "New Construction",
    description: "Electrical rough-in and finish work for commercial new builds — coordinated with your GC.",
  },
  {
    title: "Tenant Improvements",
    description: "Panel upgrades, lighting redesigns, and power distribution for office and retail build-outs.",
  },
  {
    title: "Maintenance Contracts",
    description: "Scheduled preventive maintenance to keep your facility running without unexpected downtime.",
  },
  {
    title: "Parking Lot Lighting",
    description: "LED retrofit and new pole lighting for commercial parking lots and exterior areas.",
  },
  {
    title: "Panel & Service Upgrades",
    description: "Increase electrical capacity to support growing equipment loads and code compliance.",
  },
  {
    title: "Emergency Service",
    description: "When the lights go out or a breaker won't reset, we respond fast to get you back online.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Commercial Electrical"
        highlight="Contracting."
        description="From routine maintenance to complex new construction — fully licensed, on schedule, and within budget. Request a free site walkthrough."
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
            Commercial services
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
              Free site walkthroughs · Licensed & insured · WA Lic #ELECTIM772PP
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm transition-all hover:brightness-110"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
            >
              Request a Free Walkthrough
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
