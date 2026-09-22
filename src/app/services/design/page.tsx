import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { DesignPageSection } from "@/components/sections/DesignPageSection";

export const metadata: Metadata = {
  title: "Design | Vadim Filatov",
  description:
    "UX/UI, website and app design, redesign and design systems. Clear flows, fewer dead ends. Projects from 300€.",
};

export default function DesignPage() {
  return (
    <>
      <DesignPageSection />
      <Footer />
    </>
  );
}
