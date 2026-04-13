import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Our Seattle Electricians",
  description:
    "Mr. Johnny Electric is a licensed, bonded & insured electrical contractor serving Des Moines, Renton, Burien, Kent, and greater Seattle, WA. Learn about our team.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Mr. Johnny Electric | Seattle, WA Electrician",
    description:
      "Licensed WA State electrical contractors serving the greater Seattle area. Locally owned, fully insured, and committed to quality work.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

const VALUES = [
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed WA State electrical contractors. Every job is permitted, inspected, and done to code — not cut to a handyman's standard.",
  },
  {
    title: "Locally Owned",
    description:
      "Not a franchise. We're a local business — we live in the same neighborhoods we work in, and our reputation depends on it.",
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind every job. If something isn't right, we make it right — no excuses, no extra charge.",
  },
  {
    title: "Upfront Pricing",
    description:
      "Free estimates, no hidden fees. You'll know exactly what you're paying before we lift a tool.",
  },
  {
    title: "We Show Up On Time",
    description:
      "No four-hour windows. We give you a specific arrival time and we stick to it.",
  },
  {
    title: "Clean Work, Always",
    description:
      "We protect your floors, clean up completely, and leave your home exactly as we found it — just with better electrical.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Local Electricians You Can"
        highlight="Trust."
        description="Locally owned, 4.9-rated, and serving Des Moines, Renton, Burien, Kent, and the greater Seattle area. We do the job right — the first time."
      />

      {/* Values grid */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-12"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.025em", color: "var(--color-primary)" }}
          >
            Why homeowners choose us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
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
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 pt-10 border-t border-black/[.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-base font-medium" style={{ color: "var(--color-text-muted)" }}>
              Free estimates · Same-day response · 4.9 stars on Google
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm transition-all hover:brightness-110"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
            >
              Get My Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
