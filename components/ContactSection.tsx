import ContactForm from "./ContactForm";

const contactDetails = [
  {
    icon: <PhoneIcon />,
    label: "Call us",
    value: "(425) 894-8444",
    href: "tel:4258948444",
  },
  {
    icon: <EmailIcon />,
    label: "Email us",
    value: "info@mrjohnnyelectric.com",
    href: "mailto:info@mrjohnnyelectric.com",
  },
  {
    icon: <LocationIcon />,
    label: "Service area",
    value: "Serving the Greater Seattle Area",
    href: "/service-areas",
  },
  {
    icon: <ClockIcon />,
    label: "Hours",
    value: "Mon–Sat, 7am–6pm",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left column ───────────────────────────────────────── */}
          <div className="flex flex-col gap-8">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
                style={{ color: "var(--color-accent)" }}
              >
                Free Estimates · Fast Response
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                  color: "var(--color-primary)",
                }}
              >
                Need an electrician?
                <br />
                We respond the same day.
              </h2>
              <p className="text-lg" style={{ color: "var(--color-text-muted)" }}>
                Most requests get a callback within 2–4 hours, Mon–Sat.
                For same-day service, call us directly at{" "}
                <a
                  href="tel:4258948444"
                  className="font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  (425) 894-8444
                </a>
                .
              </p>
            </div>

            {/* Contact details */}
            <ul className="flex flex-col gap-5">
              {contactDetails.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-[10px] flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(245,166,35,0.10)" }}
                  >
                    <span style={{ color: "var(--color-accent)" }}>
                      {item.icon}
                    </span>
                  </span>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-base font-medium transition-colors hover:opacity-70"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="text-base font-medium"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Trust badge */}
            <div
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-[10px] self-start"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <ShieldIcon className="w-5 h-5 flex-shrink-0" style={{ color: "var(--color-accent)" }} />
              <span className="text-sm font-semibold" style={{ color: "var(--color-primary)" }}>
                Licensed · Bonded · Insured
              </span>
              <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                WA State Electrical Contractor
              </span>
            </div>
          </div>

          {/* ── Right column — form card ───────────────────────────── */}
          <div
            className="rounded-[16px] p-7 sm:p-9 shadow-sm border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "rgba(0,0,0,0.06)",
            }}
          >
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Icons ───────────────────────────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ShieldIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
