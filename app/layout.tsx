import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jevtechnology.com"),
  title: {
    default: "Jev Technology | Software Development & Digital Solutions",
    template: "%s | Jev Technology",
  },
  description:
    "Jev Technology is a software development company empowering organizations with web development, mobile apps, HR & payroll systems, and cloud solutions across Africa.",
  keywords: [
    "software development company",
    "web development",
    "mobile app development",
    "HR software",
    "payroll systems",
    "StaffDemHR",
    "salary disbursement",
    "digital solutions",
    "Africa tech",
    "software consultancy",
    "Jev Technology",
    "cloud solutions",
    "API development",
  ],
  authors: [{ name: "Jev Technology" }],
  creator: "Jev Technology",
  publisher: "Jev Technology",
  openGraph: {
    title: "Jev Technology | Software Development & Digital Solutions",
    description:
      "Empowering organizations with cutting-edge web development, mobile apps, HR systems, and software consultancy across Africa.",
    type: "website",
    siteName: "Jev Technology",
    locale: "en_US",
    url: "https://jevtechnology.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jev Technology | Software Development & Digital Solutions",
    description:
      "Empowering organizations with cutting-edge web development, mobile apps, and software consultancy across Africa.",
  },
  alternates: {
    canonical: "https://jevtechnology.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jev Technology",
              url: "https://jevtechnology.com",
              logo: "https://jevtechnology.com/logo.svg",
              description:
                "Software development company empowering organizations with web development, mobile apps, HR & payroll systems, and cloud solutions across Africa.",
              email: "jevtechnology8@gmail.com",
              foundingDate: "2021",
              areaServed: "Africa",
              sameAs: [],
              knowsAbout: [
                "Web Development",
                "Mobile App Development",
                "HR & Payroll Systems",
                "Software Consultancy",
                "API Development",
                "Cloud Solutions",
              ],
              offers: {
                "@type": "AggregateOffer",
                itemOffered: [
                  {
                    "@type": "Service",
                    name: "Web Development",
                    description:
                      "Custom web applications built with React, Next.js, and Node.js.",
                  },
                  {
                    "@type": "Service",
                    name: "Mobile App Development",
                    description:
                      "Native and cross-platform mobile applications for iOS and Android.",
                  },
                  {
                    "@type": "Service",
                    name: "HR & Payroll Systems",
                    description:
                      "Comprehensive workforce management solutions including StaffDemHR.",
                  },
                  {
                    "@type": "Service",
                    name: "Software Consultancy",
                    description:
                      "Strategic technology guidance for digital transformation.",
                  },
                  {
                    "@type": "Service",
                    name: "API Development",
                    description:
                      "Robust and scalable REST & GraphQL APIs for your applications.",
                  },
                  {
                    "@type": "Service",
                    name: "Cloud Solutions",
                    description:
                      "Cloud infrastructure setup, migration, and management on AWS & Azure.",
                  },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "StaffDemHR",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "All-in-one human resource management platform designed to simplify workforce operations for businesses across Africa. Features payroll processing, salary disbursement, leave management, and workforce analytics.",
              author: {
                "@type": "Organization",
                name: "Jev Technology",
              },
              offers: {
                "@type": "Offer",
                category: "HR & Payroll Software",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
