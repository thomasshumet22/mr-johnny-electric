import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Electrical Projects — Seattle, WA",
  description:
    "Browse recent work by Mr. Johnny Electric: panel upgrades, EV charger installations, home rewires, and commercial build-outs across the greater Seattle area.",
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: "Electrical Projects | Mr. Johnny Electric — Seattle, WA",
    description:
      "Panel upgrades, EV charger installs, rewires, and more. See recent electrical work completed across Des Moines, Renton, Burien, Kent, and Seattle.",
    url: `${SITE_URL}/projects`,
    type: "website",
  },
};

const PROJECT_TYPES = [
  "Panel Upgrades",
  "EV Charger Installations",
  "Full Home Rewires",
  "Commercial Build-Outs",
  "Lighting Upgrades",
  "Sub-Panel Additions",
];

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|avif|gif)$/i;

function getGalleryImages(): string[] {
  try {
    const galleryDir = path.join(process.cwd(), "public", "gallery");
    return fs
      .readdirSync(galleryDir)
      .filter((f) => IMAGE_EXTENSIONS.test(f))
      .sort();
  } catch {
    return [];
  }
}

export default function ProjectsPage() {
  const images = getGalleryImages();
  const hasImages = images.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Recent"
        highlight="Projects."
        description="A look at electrical work we've completed for homeowners and businesses across Des Moines, Renton, Burien, Kent, and the greater Seattle area."
      />

      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {PROJECT_TYPES.map((type) => (
              <span
                key={type}
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{
                  borderColor: "rgba(0,0,0,0.10)",
                  color: "var(--color-text-muted)",
                  backgroundColor: "white",
                }}
              >
                {type}
              </span>
            ))}
          </div>

          {hasImages ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {images.map((filename) => (
                <div
                  key={filename}
                  className="group relative aspect-[4/3] rounded-[12px] overflow-hidden border border-black/[.06] bg-white"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/gallery/${filename}`}
                    alt={formatAlt(filename)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(26,26,46,0.75) 0%, transparent 60%)",
                    }}
                  >
                    <p className="text-sm font-medium text-white">
                      {formatAlt(filename)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-[12px] border border-black/[.06] flex flex-col items-center justify-center gap-2"
                  style={{ backgroundColor: "white" }}
                >
                  <CameraIcon className="w-8 h-8" />
                  <p
                    className="text-xs font-medium"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Photo coming soon
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-14 pt-10 border-t border-black/[.06] text-center">
            <p
              className="text-base mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              Want work like this done at your home or business?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm transition-all hover:brightness-110"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-primary)",
              }}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/** Convert a filename like "panel-upgrade-renton.jpg" → "Panel Upgrade Renton" */
function formatAlt(filename: string): string {
  return filename
    .replace(IMAGE_EXTENSIONS, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      style={{ color: "var(--color-text-muted)" }}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
      />
    </svg>
  );
}
