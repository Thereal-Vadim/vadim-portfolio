import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { GyminiSection } from "@/components/sections/GyminiSection";

export const metadata: Metadata = {
  title: "Gymini | Vadim's Portfolio",
  description:
    "Gymini - a native iOS training companion designed and built in Swift. First open through the flows people actually keep. 2025, Prague.",
};

export default function GyminiPage() {
  return (
    <>
      <GyminiSection />
      <Footer />
    </>
  );
}
