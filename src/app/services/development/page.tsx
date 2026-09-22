import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { DevelopmentPageSection } from "@/components/sections/DevelopmentPageSection";

export const metadata: Metadata = {
  title: "Development | Vadim Filatov",
  description:
    "I ship websites, native iOS apps and Telegram Mini Apps - Next.js, Python and Swift. Not a Figma handoff. Projects from 100€.",
};

export default function DevelopmentPage() {
  return (
    <>
      <DevelopmentPageSection />
      <Footer />
    </>
  );
}
