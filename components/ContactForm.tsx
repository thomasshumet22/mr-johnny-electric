"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const SERVICES = [
  "Residential Electrical",
  "Commercial Electrical",
  "EV Charger Installation",
  "Repairs & Troubleshooting",
  "Installations",
  "Other",
];

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [fields, setFields] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });

      if (!res.ok) throw new Error("Request failed");

      setState("success");
      setFields({ name: "", phone: "", email: "", service: "", message: "" });
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full min-h-[320px] gap-4 py-8">
        <span
          className="flex items-center justify-center w-14 h-14 rounded-full"
          style={{ backgroundColor: "rgba(245,166,35,0.12)" }}
        >
          <CheckIcon
            className="w-7 h-7"
            style={{ color: "var(--color-accent)" }}
          />
        </span>
        <h3
          className="text-xl font-bold"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-primary)",
          }}
        >
          You&apos;re all set!
        </h3>
        <p className="text-sm max-w-xs" style={{ color: "var(--color-text-muted)" }}>
          We&apos;ll call you back within 2–4 hours, Mon–Sat. For same-day
          service, call us directly at{" "}
          <a
            href="tel:4258948444"
            className="font-semibold"
            style={{ color: "var(--color-accent)" }}
          >
            (425) 894-8444
          </a>
          .
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-2 text-sm font-medium underline underline-offset-2"
          style={{ color: "var(--color-text-muted)" }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  if (!FORMSPREE_ENDPOINT) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full min-h-[320px] gap-4 py-8">
        <p className="text-base font-semibold" style={{ color: "var(--color-primary)" }}>
          Call or text us to get started
        </p>
        <a
          href="tel:4258948444"
          className="text-2xl font-bold"
          style={{ color: "var(--color-accent)" }}
        >
          (425) 894-8444
        </a>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          Mon–Sat, 7 am – 7 pm
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          value={fields.name}
          onChange={handleChange}
          required
        />
        <Field
          label="Phone"
          id="phone"
          name="phone"
          type="tel"
          placeholder="(206) 555-0100"
          value={fields.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email */}
      <Field
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="jane@example.com"
        value={fields.email}
        onChange={handleChange}
        required
      />

      {/* Service dropdown */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="service"
          className="text-sm font-semibold"
          style={{ color: "var(--color-primary)" }}
        >
          Service needed
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={fields.service}
            onChange={handleChange}
            className="w-full appearance-none bg-white border rounded-[8px] px-4 py-3 text-sm transition-all duration-150 focus:outline-none pr-10"
            style={
              {
                borderColor: "rgba(0,0,0,0.12)",
                color: fields.service
                  ? "var(--color-primary)"
                  : "var(--color-text-muted)",
                "--tw-ring-color": "var(--color-accent)",
              } as React.CSSProperties
            }
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.boxShadow =
                "0 0 0 3px rgba(245,166,35,0.15)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {/* Custom chevron */}
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDown
              className="w-4 h-4"
              style={{ color: "var(--color-text-muted)" }}
            />
          </span>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-sm font-semibold"
          style={{ color: "var(--color-primary)" }}
        >
          Message{" "}
          <span
            className="text-xs font-normal"
            style={{ color: "var(--color-text-muted)" }}
          >
            (optional)
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your project or what you need help with…"
          value={fields.message}
          onChange={handleChange}
          className="w-full bg-white border rounded-[8px] px-4 py-3 text-sm resize-none transition-all duration-150 focus:outline-none"
          style={{ borderColor: "rgba(0,0,0,0.12)", color: "var(--color-primary)" }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--color-accent)";
            e.currentTarget.style.boxShadow =
              "0 0 0 3px rgba(245,166,35,0.15)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Error banner */}
      {state === "error" && (
        <p
          className="text-sm px-4 py-3 rounded-[8px]"
          style={{
            backgroundColor: "rgba(217,79,79,0.08)",
            color: "var(--color-danger)",
          }}
        >
          Something went wrong. Please try again or call us at{" "}
          <a href="tel:4258948444" className="font-semibold underline">
            (425) 894-8444
          </a>
          .
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-[8px] font-bold text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:brightness-110 active:scale-[0.98]"
        style={{
          backgroundColor: "var(--color-accent)",
          color: "var(--color-primary)",
        }}
      >
        {state === "submitting" ? (
          <>
            <Spinner className="w-4 h-4 animate-spin" />
            Sending your request…
          </>
        ) : (
          <>
            Request My Free Estimate
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-xs text-center" style={{ color: "var(--color-text-muted)" }}>
        No spam. We only use your info to follow up about your project.
      </p>
    </form>
  );
}

/* ── Reusable text field ─────────────────────────────────────────── */
function Field({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-semibold"
        style={{ color: "var(--color-primary)" }}
      >
        {label}{" "}
        {required && (
          <span style={{ color: "var(--color-accent)" }} aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white border rounded-[8px] px-4 py-3 text-sm transition-all duration-150 focus:outline-none"
        style={{ borderColor: "rgba(0,0,0,0.12)", color: "var(--color-primary)" }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--color-accent)";
          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,166,35,0.15)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    </div>
  );
}

/* ── Icons ───────────────────────────────────────────────────────── */
function CheckIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function ChevronDown({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
