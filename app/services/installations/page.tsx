import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Electrical Installations — Seattle, WA",
  description:
    "Ceiling fans, light fixtures, smart switches & sub-panels installed by a licensed Seattle, WA electrician. Clean work, no guesswork. Call (425) 894-8444.",
  alternates: { canonical: `${SITE_URL}/services/installations` },
  openGraph: {
    title: "Electrical Installations in Seattle, WA | Mr. Johnny Electric",
    description:
      "Ceiling fans, fixtures, smart switches, sub-panels & more. Licensed electrician serving Des Moines, Renton, Burien, Kent & greater Seattle, WA.",
    url: `${SITE_URL}/services/installations`,
    type: "website",
  },
};

const SERVICES = [
  {
    title: "Ceiling Fans",
    description: "New ceiling fan install or replacement — including wiring a new switch if needed.",
  },
  {
    title: "Light Fixtures",
    description: "Pendant lights, chandeliers, vanity bars, and exterior fixtures installed and wired.",
  },
  {
    title: "Smart Switches & Dimmers",
    description: "Lutron, Leviton, or any smart switch brand — installed and connected to your network.",
  },
  {
    title: "Sub-Panels",
    description: "Add a sub-panel for a workshop, garage, ADU, or any area needing dedicated power.",
  },
  {
    title: "Dedicated Circuits",
    description: "New 20A or 30A circuits for appliances, home offices, hot tubs, or EV chargers.",
  },
  {
    title: "USB & USB-C Outlets",
    description: "Modern outlets with built-in USB-A and USB-C charging ports installed throughout your home.",
  },
];

export default function InstallationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Installations"
        title="Electrical Installations,"
        highlight="Clean & Correct."
        description="Ceiling fans, fixtures, smart switches, sub-panels — installed by a licensed electrician. No handyman shortcuts. Quality work, every time."
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
            Common installations
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
              Not sure if we cover your job? Just ask — we almost certainly do.
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
