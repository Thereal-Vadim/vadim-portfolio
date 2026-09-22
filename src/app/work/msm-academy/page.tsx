import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { MSMAcademySection } from "@/components/sections/MSMAcademySection";

export const metadata: Metadata = {
  title: "MSM Academy | Vadim Filatov",
  description:
    "MSM Academy - cohesive brand identity, logo, and digital and print assets. Brand system, mobile web, brochures, badges, and email banners. 2025, Dubai.",
};

export default function MSMAcademyPage() {
  return (
    <>
      <MSMAcademySection />
      <Footer />
    </>
  );
}
