import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nashazgroup.com"),
  title: "NAHSAZ Group | Powering Commerce. Delivering Solutions.",
  description: "NAHSAZ Group is a diversified Nigerian conglomerate delivering integrated solutions across real estate, construction, healthcare, energy, agriculture, mining, logistics, automotive, and consulting services.",
  keywords: ["NAHSAZ Group", "Nigeria Conglomerate", "Real Estate Nigeria", "Construction Nigeria", "Healthcare Nigeria", "Energy Solutions Nigeria", "Isah Muhammed"],
  authors: [{ name: "NAHSAZ Group" }],
  openGraph: {
    title: "NAHSAZ Group | Powering Commerce. Delivering Solutions.",
    description: "A diversified Nigerian conglomerate delivering integrated solutions across key sectors of the economy.",
    url: "https://nashazgroup.com",
    siteName: "NAHSAZ Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NAHSAZ Group Corporate",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-outfit antialiased bg-warm-platinum overflow-x-hidden`}
      >
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
