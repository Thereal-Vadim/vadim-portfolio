import { Footer } from "@/components/layout/Footer";
import { GrossGrowthSection } from "@/components/sections/GrossGrowthSection";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "GrossGrowth",
  description:
    "GrossGrowth — a finance tracker designed around clear navigation by Vadim Filatov. Case study assets are still in progress.",
  path: "/work/grossgrowth",
  index: false,
});

export default function GrossGrowthPage() {
  return (
    <>
      <GrossGrowthSection />
      <Footer />
    </>
  );
}
