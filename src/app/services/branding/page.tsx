import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { BrandingPageSection } from "@/components/sections/BrandingPageSection";

export const metadata: Metadata = {
  title: "Branding | Vadim Filatov",
  description:
    "Logo, brand system, product photography, AI product shots and social identity - one visual language. Projects from 50€.",
};

export default function BrandingPage() {
  return (
    <>
      <BrandingPageSection />
      <Footer />
    </>
  );
}
