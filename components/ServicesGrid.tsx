import Link from "next/link";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  cta: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: <HomeIcon />,
    title: "Residential",
    description:
      "Panel upgrades, rewires, outlets, lighting — done clean and on time. No callbacks.",
    href: "/services/residential",
    cta: "See Residential Services",
  },
  {
    icon: <BuildingIcon />,
    title: "Commercial",
    description:
      "From routine maintenance to complex new builds — on schedule and within budget, every time.",
    href: "/services/commercial",
    cta: "See Commercial Services",
  },
  {
    icon: <BoltIcon />,
    title: "EV Charger Installation",
    description:
      "Level 2 home charging for any EV. Professional installation for all major EV brands.",
    href: "/services/ev-charger-installation",
    cta: "Free Consultation",
    featured: true,
  },
  {
    icon: <WrenchIcon />,
    title: "Repairs & Troubleshooting",
    description:
      "Tripped breakers, flickering lights, dead outlets — diagnosed and fixed right the first time.",
    href: "/services/troubleshooting-repairs",
    cta: "Schedule a Service Call",
  },
  {
    icon: <BulbIcon />,
    title: "Installations",
    description:
      "Ceiling fans, fixtures, smart switches, sub-panels — by a licensed electrician, not a handyman.",
    href: "/services/installations",
    cta: "See Installations",
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Our Services
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "var(--color-primary)",
            }}
          >
            Electrical work done{" "}
            <br className="hidden sm:block" />
            <span style={{ color: "var(--color-accent)" }}>right, every time.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) =>
            service.featured ? (
              <FeaturedCard key={service.title} service={service} />
            ) : (
              <ServiceCard key={service.title} service={service} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Standard card ────────────────────────────────────────────────── */
function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col bg-white rounded-[12px] p-7 shadow-sm border border-black/[.05] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10"
    >
      {/* Amber top accent line */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-7 right-7 h-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: "var(--color-accent)" }}
      />

      {/* Icon */}
      <span
        className="flex items-center justify-center w-12 h-12 rounded-[10px] mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "rgba(245,166,35,0.12)" }}
      >
        <span style={{ color: "var(--color-accent)" }}>{service.icon}</span>
      </span>

      {/* Text */}
      <h3
        className="text-lg mb-2"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          color: "var(--color-primary)",
        }}
      >
        {service.title}
      </h3>
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "var(--color-text-muted)" }}
      >
        {service.description}
      </p>

      {/* CTA */}
      <span
        className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold transition-gap duration-200"
        style={{ color: "var(--color-accent)" }}
      >
        {service.cta}
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

/* ── Featured (EV) card ───────────────────────────────────────────── */
function FeaturedCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col rounded-[12px] p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2 lg:col-span-1"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Subtle inner glow on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1.5px rgba(245,166,35,0.4)",
        }}
      />

      {/* "Most Popular" badge */}
      <span
        className="absolute top-5 right-5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide"
        style={{
          backgroundColor: "rgba(245,166,35,0.18)",
          color: "var(--color-accent)",
        }}
      >
        Popular
      </span>

      {/* Icon */}
      <span
        className="flex items-center justify-center w-12 h-12 rounded-[10px] mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "rgba(245,166,35,0.2)" }}
      >
        <span style={{ color: "var(--color-accent)" }}>{service.icon}</span>
      </span>

      {/* Text */}
      <h3
        className="text-lg mb-2 text-white"
        style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.01em" }}
      >
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed flex-1 text-white/65">
        {service.description}
      </p>

      {/* Compatibility chips */}
      <div className="flex flex-wrap gap-2 mt-4">
        {["Tesla", "Rivian", "Ford", "BMW", "Any EV"].map((brand) => (
          <span
            key={brand}
            className="px-2.5 py-1 rounded-full text-[11px] font-medium"
            style={{
              backgroundColor: "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            {brand}
          </span>
        ))}
      </div>

      {/* CTA */}
      <span
        className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold transition-colors duration-200"
        style={{ color: "var(--color-accent)" }}
      >
        {service.cta}
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

/* ── Icons ────────────────────────────────────────────────────────── */
function HomeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
