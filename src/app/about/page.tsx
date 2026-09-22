import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { AboutPageSection } from "@/components/sections/AboutPageSection";

export const metadata: Metadata = {
  title: "About | Vadim Filatov",
  description:
    "Vadim Filatov is a Prague-based UI/UX engineer and visual designer. Strategy, interface design, and production-ready React and Next.js - one point of contact.",
};

export default function AboutPage() {
  return (
    <>
      <AboutPageSection />
      <Footer />
    </>
  );
}
