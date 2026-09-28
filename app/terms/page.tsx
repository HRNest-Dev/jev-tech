import type { Metadata } from "next";
import { termsOfUse } from "@/content/legal";
import LegalPage from "@/components/page/LegalPage";

export const metadata: Metadata = {
  title: termsOfUse.title,
  description: termsOfUse.description,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage doc={termsOfUse} href="/terms" />;
}
