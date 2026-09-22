import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { EfsySection } from "@/components/sections/EfsySection";

export const metadata: Metadata = {
  title: "Efsy | Vadim's Portfolio",
  description:
    "Efsy - logo, menus, posters, Instagram, guest app, and event graphics for a Prague café and evening bar. 2025, Prague.",
};

export default function EfsyPage() {
  return (
    <>
      <EfsySection />
      <Footer />
    </>
  );
}
