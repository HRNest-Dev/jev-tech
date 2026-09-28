import type { Metadata } from "next";
import { privacyPolicy } from "@/content/legal";
import LegalPage from "@/components/page/LegalPage";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage doc={privacyPolicy} href="/privacy" />;
}
