import type { Metadata } from "next";
import { homeFaqs } from "@/content/home";
import Hero from "@/components/home/Hero";
import ProblemShowcase from "@/components/home/ProblemShowcase";
import Capabilities from "@/components/home/Capabilities";
import PhotoBand from "@/components/home/PhotoBand";
import Process from "@/components/home/Process";
import EngagementModels from "@/components/home/EngagementModels";
import Products from "@/components/home/Products";
import Company from "@/components/home/Company";
import Testimonials from "@/components/home/Testimonials";
import LatestInsights from "@/components/home/LatestInsights";
import Faq from "@/components/page/Faq";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemShowcase />
      <Capabilities />
      <PhotoBand />
      <Process />
      <EngagementModels />
      <Products />
      <Company />
      <Testimonials />
      <LatestInsights />
      <Faq items={homeFaqs} title="Questions we often hear" />
    </>
  );
}
