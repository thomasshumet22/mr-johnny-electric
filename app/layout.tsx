import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL, BUSINESS_NAME } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | Licensed Electrician — Seattle, WA`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "Licensed, bonded & insured electricians serving Des Moines, Renton, Burien, Kent, Auburn, Federal Way, and the greater Seattle area. Call (425) 894-8444.",
  openGraph: {
    siteName: BUSINESS_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-body antialiased">
        <TopBar />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
