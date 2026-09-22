import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { FootballAcademySection } from "@/components/sections/FootballAcademySection";

export const metadata: Metadata = {
  title: "Football Academy | Vadim's Portfolio",
  description:
    "MSM Football Academy - identity, print, and a desktop site for a Prague football programme. Brand lockups, brochures, Instagram, and fcmsm.eu. 2025, Prague.",
};

export default function FootballAcademyPage() {
  return (
    <>
      <FootballAcademySection />
      <Footer />
    </>
  );
}
