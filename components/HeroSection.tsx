import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center min-h-[90vh] overflow-hidden">
      {/* ── Background layers ─────────────────────────────────────── */}

      {/* 1. Base dark gradient — replace with <Image> when hero.jpg is ready */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #07071a 0%, #111128 45%, #1a1a2e 100%)",
        }}
      />

      {/* 2. Amber radial glow — gives warmth near the heading */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 15% 55%, rgba(245,166,35,0.10) 0%, transparent 70%)",
        }}
      />

      {/* 3. Dot-grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* 4. Right-side decorative bolt */}
      <BoltDecoration />

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
            <Stars />
            <span className="text-sm font-semibold text-white">
              4.9 stars · 47 verified Google reviews
            </span>
          </div>

          {/* H1 */}
          <h1
            className="text-white font-bold mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(42px, 7vw, 80px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Seattle Electricians
            <br />
            You Can{" "}
            <span style={{ color: "var(--color-accent)" }}>Count On.</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Upfront pricing. Same-day response. Licensed WA State electrical contractor.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary — phone */}
            <a
              href="tel:4258948444"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md font-bold text-base sm:text-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-primary)",
              }}
            >
              <PhoneIcon className="w-5 h-5 flex-shrink-0 transition-transform group-hover:rotate-12" />
              <span>Call&nbsp;(425)&nbsp;894-8444</span>
            </a>

            {/* Secondary — quote */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold text-base sm:text-lg border-2 border-white/30 text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 active:scale-[0.98]"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust micro-line */}
          <p className="mt-8 text-sm font-medium" style={{ color: "rgba(255,255,255,0.42)" }}>
            Licensed · Bonded · Insured · Free Consultations · WA Lic #ELECTIM772PP
          </p>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-surface))",
        }}
      />
    </section>
  );
}

/* ── Decorative lightning bolt ──────────────────────────────────────── */
function BoltDecoration() {
  return (
    <div
      aria-hidden="true"
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 select-none pointer-events-none hidden lg:block"
    >
      <svg
        viewBox="0 0 200 320"
        className="w-[340px] xl:w-[440px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer glow */}
        <path
          d="M140 10L20 175H100L60 310L200 130H110L140 10Z"
          fill="rgba(245,166,35,0.04)"
        />
        {/* Mid glow */}
        <path
          d="M140 10L20 175H100L60 310L200 130H110L140 10Z"
          fill="rgba(245,166,35,0.06)"
          transform="scale(0.88) translate(13,20)"
        />
        {/* Core bolt */}
        <path
          d="M140 10L20 175H100L60 310L200 130H110L140 10Z"
          fill="rgba(245,166,35,0.10)"
          transform="scale(0.78) translate(22,35)"
        />
        {/* Outline */}
        <path
          d="M140 10L20 175H100L60 310L200 130H110L140 10Z"
          stroke="rgba(245,166,35,0.18)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

/* ── Icon helpers ───────────────────────────────────────────────────── */
function Stars() {
  return (
    <span className="flex items-center gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5"
          viewBox="0 0 20 20"
          style={{ fill: "var(--color-accent)" }}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.95 2.678c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </span>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
      />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
