import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { JsonLd } from "@/components/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sanjitamhrzn.com"),
  title: {
    default: "TechVerse Sanjita | AI Marketing Expert & Consultant",
    template: "%s | TechVerse Sanjita"
  },
  description:
    "TechVerse Sanjita helps businesses in Nepal and beyond use AI marketing, automation, and digital strategy to grow faster.",
  keywords: [
    "AI Marketing Expert",
    "AI Marketing Consultant",
    "AI Consultant Nepal",
    "Artificial Intelligence Marketing",
    "AI Business Consultant",
    "Digital Marketing Consultant"
  ],
  openGraph: {
    title: "TechVerse Sanjita",
    description: "Where creativity meets Artificial Intelligence.",
    url: "https://sanjitamhrzn.com",
    siteName: "TechVerse Sanjita",
    images: ["/techverse-logo.jpeg"],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TechVerse Sanjita",
    description: "AI Marketing Expert & Consultant"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <JsonLd />
        <div className="site-shell">
          <div className="grid-bg" aria-hidden="true" />
          <div className="noise" aria-hidden="true" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
