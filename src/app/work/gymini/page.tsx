import { Footer } from "@/components/layout/Footer";
import { GyminiSection } from "@/components/sections/GyminiSection";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Gymini",
  description:
    "Gymini — a native iOS training companion designed and built in Swift by Vadim Filatov. Case study assets are still in progress.",
  path: "/work/gymini",
  index: false,
});

export default function GyminiPage() {
  return (
    <>
      <GyminiSection />
      <Footer />
    </>
  );
}
