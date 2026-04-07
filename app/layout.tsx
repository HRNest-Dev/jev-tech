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
  title: "Jev Technology | Software Development & Digital Solutions",
  description:
    "Empowering organizations with cutting-edge web development, mobile apps, and software consultancy. Building Africa's most trusted people platform.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "HR software",
    "payroll systems",
    "digital solutions",
    "Africa tech",
    "consultancy",
  ],
  authors: [{ name: "Jev Technology" }],
  openGraph: {
    title: "Jev Technology | Software Development & Digital Solutions",
    description:
      "Empowering organizations with cutting-edge web development, mobile apps, and software consultancy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
