import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { GrossGrowthSection } from "@/components/sections/GrossGrowthSection";

export const metadata: Metadata = {
  title: "GrossGrowth | Vadim's Portfolio",
  description:
    "GrossGrowth - a finance tracker designed around clear navigation. Complex inputs, without a complex interface. 2025, Prague.",
};

export default function GrossGrowthPage() {
  return (
    <>
      <GrossGrowthSection />
      <Footer />
    </>
  );
}
