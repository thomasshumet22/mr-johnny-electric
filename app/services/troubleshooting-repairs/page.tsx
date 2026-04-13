import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Electrical Repairs & Troubleshooting — Seattle, WA",
  description:
    "Tripped breakers, flickering lights, dead outlets? Licensed Seattle, WA electrician diagnoses and fixes electrical problems fast. Call (425) 894-8444.",
  alternates: { canonical: `${SITE_URL}/services/troubleshooting-repairs` },
  openGraph: {
    title: "Electrical Repairs & Troubleshooting | Mr. Johnny Electric — Seattle, WA",
    description:
      "Fast electrical diagnosis and repair across greater Seattle, WA. Tripped breakers, flickering lights, dead outlets — fixed right the first time.",
    url: `${SITE_URL}/services/troubleshooting-repairs`,
    type: "website",
  },
};

const ISSUES = [
  {
    title: "Tripped Breakers",
    description: "Breaker that won't reset or keeps tripping is a warning sign. We find the cause and fix it.",
  },
  {
    title: "Flickering Lights",
    description: "Flickering can indicate loose connections, a failing fixture, or a larger wiring issue.",
  },
  {
    title: "Dead Outlets",
    description: "An outlet with no power could be a tripped GFCI, a loose wire, or a bad receptacle.",
  },
  {
    title: "Burning Smell or Sparks",
    description: "Never ignore burning smells from outlets or panels — this is an emergency. Call us immediately.",
  },
  {
    title: "High Electric Bills",
    description: "Unexpected spikes in your electric bill can point to faulty wiring or failing appliances.",
  },
  {
    title: "Overloaded Circuits",
    description: "If your circuits are constantly maxed out, we can add dedicated circuits to balance the load.",
  },
];

export default function TroubleshootingPage() {
  return (
    <>
      <PageHero
        eyebrow="Troubleshooting & Repairs"
        title="Diagnosed &"
        highlight="Fixed Right."
        description="Electrical problems don't get better on their own. We find the root cause and fix it — the first time."
      />

      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Emergency callout */}
          <div
            className="rounded-[12px] px-7 py-5 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ backgroundColor: "rgba(217,79,79,0.06)", border: "1px solid rgba(217,79,79,0.15)" }}
          >
            <div>
              <p className="font-bold text-sm" style={{ color: "#D94F4F" }}>
                Don&apos;t wait — this could be a fire hazard.
              </p>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                Burning smell, sparking outlets, or a panel that won&apos;t reset? Call us immediately.
              </p>
            </div>
            <a
              href="tel:4258948444"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-bold text-sm"
              style={{ backgroundColor: "#D94F4F", color: "white" }}
            >
              Call (425) 894-8444
            </a>
          </div>

          <h2
            className="text-2xl lg:text-3xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--color-primary)" }}
          >
            Common problems we solve
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ISSUES.map((s) => (
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
              Not sure what&apos;s wrong? Describe it — we&apos;ll give you a straight answer.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm transition-all hover:brightness-110"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
            >
              Book a Diagnostic Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
