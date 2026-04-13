import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mr. Johnny Electric | Licensed Electrician — Seattle, WA",
  description:
    "Licensed, bonded & insured electricians serving Des Moines, Renton, Burien, Kent, Auburn, Federal Way, and the greater Seattle area. 4.9-rated on Google. Call (425) 894-8444.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Mr. Johnny Electric | Licensed Electrician — Seattle, WA",
    description:
      "Licensed, bonded & insured electricians serving the greater Seattle area. 4.9-rated on Google. Call (425) 894-8444.",
    url: SITE_URL,
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
