import type { Metadata, Viewport } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/page/JsonLd";
import AnalyticsEvents from "@/components/layout/AnalyticsEvents";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Digital Product & Software Engineering`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${geistMono.variable} font-sans antialiased`}>
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <AnalyticsEvents />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            logo: `${site.url}/brand/jev-logo.png`,
            email: site.email,
            telephone: site.phones[0],
            description: site.description,
          }}
        />
      </body>
    </html>
  );
}
