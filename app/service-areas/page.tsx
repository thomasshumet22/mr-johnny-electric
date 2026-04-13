import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Electrician Service Areas — Des Moines, Renton, Kent, WA",
  description:
    "Mr. Johnny Electric serves Des Moines, Renton, Burien, Kent, Auburn, Federal Way, Tukwila & the greater Seattle, WA area. Call (425) 894-8444.",
  alternates: { canonical: `${SITE_URL}/service-areas` },
  openGraph: {
    title: "Electrician Service Areas | Mr. Johnny Electric — Seattle, WA",
    description:
      "Licensed electricians serving Des Moines, Renton, Burien, Kent, Auburn, Federal Way, Tukwila & greater Seattle, WA. Call (425) 894-8444.",
    url: `${SITE_URL}/service-areas`,
    type: "website",
  },
};

const AREAS = [
  { city: "Des Moines",    note: "Primary service area"    },
  { city: "Renton",        note: "Primary service area"    },
  { city: "Burien",        note: "Primary service area"    },
  { city: "Kent",          note: "Primary service area"    },
  { city: "Auburn",        note: ""                        },
  { city: "Federal Way",   note: ""                        },
  { city: "Tukwila",       note: ""                        },
  { city: "SeaTac",        note: ""                        },
  { city: "Covington",     note: ""                        },
  { city: "Maple Valley",  note: ""                        },
  { city: "Newcastle",     note: ""                        },
  { city: "Bellevue",      note: ""                        },
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Areas We"
        highlight="Serve."
        description="We provide residential and commercial electrical services throughout the greater Seattle area. Not sure if we cover your area? Give us a call."
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
            Cities &amp; Communities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AREAS.map(({ city, note }) => (
              <div
                key={city}
                className="flex items-center gap-3 bg-white rounded-[10px] px-5 py-4 border border-black/[.05] shadow-sm"
              >
                <CheckIcon className="w-4 h-4 shrink-0" />
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-primary)" }}>
                    {city}
                  </p>
                  {note && (
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                      {note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Fallback prompt */}
          <div
            className="mt-10 rounded-[12px] px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between"
            style={{ backgroundColor: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.2)" }}
          >
            <div>
              <p className="font-semibold text-sm" style={{ color: "var(--color-primary)" }}>
                Don&apos;t see your city?
              </p>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                We may still be able to help. Call us or send a message to find out.
              </p>
            </div>
            <a
              href="tel:4258948444"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-bold text-sm transition-all hover:brightness-110"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
            >
              Call (425) 894-8444
            </a>
          </div>

          {/* CTA */}
          <div className="mt-14 pt-10 border-t border-black/[.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-base font-medium" style={{ color: "var(--color-text-muted)" }}>
              Ready to book an electrician in your area?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm transition-all hover:brightness-110"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" style={{ color: "var(--color-accent)" }} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
