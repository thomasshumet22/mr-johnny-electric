const reviews = [
  {
    body: "Jupiter did a great job installing our panel upgrade. He was on time, explained everything clearly, and the work was spotless. I wouldn't call anyone else for electrical.",
    name: "Joshua D.",
    initials: "JD",
  },
  {
    body: "Easy and knowledgeable. We had a tricky outlet issue that two other electricians couldn't diagnose. They found it in 20 minutes and fixed it the same day. Very fair pricing.",
    name: "Estuardo R.",
    initials: "ER",
  },
  {
    body: "Cameron helped us upgrade our entire home safely and on budget. He walked us through every step and was genuinely one of the best contractors we've worked with.",
    name: "Jimmy T.",
    initials: "JT",
  },
];

export default function ReviewsSection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient amber glow — bottom right */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(245,166,35,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Verified Google Reviews
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.025em" }}
          >
            Real Reviews from Seattle Homeowners
          </h2>
          {/* Rating summary */}
          <div className="inline-flex items-center gap-2.5">
            <StarRow count={5} />
            <span className="text-base font-semibold text-white">4.9 average</span>
            <span className="text-white/40">·</span>
            <span className="text-base text-white/60">47+ five-star reviews on Google</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Mr.+Johnny+Electric"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-md font-semibold text-sm border-2 border-white/20 text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10"
          >
            <GoogleMark className="w-5 h-5" />
            Read All Reviews on Google
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Review card ─────────────────────────────────────────────────── */
function ReviewCard({
  review,
}: {
  review: { body: string; name: string; initials: string };
}) {
  return (
    <div className="relative flex flex-col bg-white rounded-[12px] p-7 shadow-sm">
      {/* Decorative large quote mark */}
      <span
        aria-hidden="true"
        className="absolute top-5 right-6 text-7xl font-serif leading-none select-none pointer-events-none"
        style={{ color: "rgba(245,166,35,0.12)", fontFamily: "Georgia, serif" }}
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="mb-4">
        <StarRow count={5} />
      </div>

      {/* Review text */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "var(--color-text-muted)" }}
      >
        &ldquo;{review.body}&rdquo;
      </p>

      {/* Divider */}
      <div
        className="my-5 h-px"
        style={{ backgroundColor: "rgba(0,0,0,0.06)" }}
      />

      {/* Reviewer */}
      <div className="flex items-center gap-3">
        <span
          className="flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold flex-shrink-0"
          style={{
            backgroundColor: "rgba(245,166,35,0.12)",
            color: "var(--color-accent-dark)",
          }}
        >
          {review.initials}
        </span>
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            {review.name}
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            Google Review
          </p>
        </div>
        {/* Google G — far right */}
        <span className="ml-auto">
          <GoogleMark className="w-4 h-4 opacity-30" />
        </span>
      </div>
    </div>
  );
}

/* ── Helpers ─────────────────────────────────────────────────────── */
function StarRow({ count }: { count: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
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

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
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
