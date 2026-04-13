type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
};

export default function PageHero({ eyebrow, title, highlight, description }: Props) {
  return (
    <section
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #07071a 0%, #111128 45%, #1a1a2e 100%)",
      }}
    >
      {/* Dot-grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Amber radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(245,166,35,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-xs font-bold uppercase tracking-[0.18em] mb-4"
          style={{ color: "var(--color-accent)" }}
        >
          {eyebrow}
        </p>
        <h1
          className="font-bold mb-5"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "white",
          }}
        >
          {highlight ? (
            <>
              {title}{" "}
              <span style={{ color: "var(--color-accent)" }}>{highlight}</span>
            </>
          ) : (
            title
          )}
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-2xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
