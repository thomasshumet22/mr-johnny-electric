import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Get a Free Consultation — Seattle Electrician",
  description:
    "Request a free electrical estimate from Mr. Johnny Electric. Serving Des Moines, Renton, Burien, Kent & Seattle, WA. Call (425) 894-8444 or fill out our form.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Get a Free Consultation | Mr. Johnny Electric — Seattle, WA",
    description:
      "Contact our licensed Seattle electricians for a free consultation. We respond within 2–4 hours. Call (425) 894-8444.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Request a Free"
        highlight="Consultation."
        description="We respond within 2–4 hours, Mon–Fri — no commitment required. Need same-day service? Call (425) 894-8444 now."
      />
      <ContactSection />
    </>
  );
}
