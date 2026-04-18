import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "EV Charger Installation — Seattle, WA",
  description:
    "Level 2 home EV charger installation in Seattle, WA. Works with Tesla, Rivian, Ford, BMW & any EV. Professional service by a licensed electrician. Call (425) 894-8444.",
  alternates: { canonical: `${SITE_URL}/services/ev-charger-installation` },
  openGraph: {
    title: "EV Charger Installation in Seattle, WA | Mr. Johnny Electric",
    description:
      "Level 2 home EV charger installation for any electric vehicle. Professional service by a licensed Seattle electrician.",
    url: `${SITE_URL}/services/ev-charger-installation`,
    type: "website",
  },
};

const STEPS = [
  {
    step: "01",
    title: "Free Site Assessment",
    description: "We assess your panel capacity and determine the best location for your charger.",
  },
  {
    step: "02",
    title: "Planning & Scheduling",
    description: "We plan the job and schedule the installation at your convenience.",
  },
  {
    step: "03",
    title: "Professional Installation",
    description: "A licensed electrician installs and wires your Level 2 charger to code.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description: "We walk through the completed installation with you to make sure everything is working correctly.",
  },
];

const COMPATIBLE = ["Tesla", "Rivian", "Ford", "GM / Chevy", "BMW", "Kia / Hyundai", "Volkswagen", "Any EV"];

export default function EvChargerPage() {
  return (
    <>
      <PageHero
        eyebrow="EV Charger Installation"
        title="Level 2 Home Charging,"
        highlight="By a Pro."
        description="Level 2 EV charger installation for any electric vehicle. Faster charging, properly wired and professionally installed by a licensed electrician."
      />

      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* How it works */}
          <h2
            className="text-2xl lg:text-3xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--color-primary)" }}
          >
            How it works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-[12px] p-6 border border-black/[.05] shadow-sm"
              >
                <span
                  className="block text-3xl mb-3 leading-none"
                  style={{ color: "var(--color-accent)", fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.02em" }}
                >
                  {s.step}
                </span>
                <h3 className="font-bold text-base mb-2" style={{ color: "var(--color-primary)" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* Compatible vehicles */}
          <h2
            className="text-xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-primary)" }}
          >
            Compatible with every EV
          </h2>
          <div className="flex flex-wrap gap-2 mb-14">
            {COMPATIBLE.map((brand) => (
              <span
                key={brand}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "rgba(245,166,35,0.10)",
                  color: "var(--color-accent-dark)",
                }}
              >
                {brand}
              </span>
            ))}
          </div>

          <div className="pt-10 border-t border-black/[.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-base font-medium" style={{ color: "var(--color-text-muted)" }}>
              Most installations are completed in a single day. Free site assessment included.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm transition-all hover:brightness-110"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
            >
              Schedule My Installation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
