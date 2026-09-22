import { AboutSection } from "@/components/sections/AboutSection";
import { Footer } from "@/components/layout/Footer";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroHeyBlock } from "@/components/sections/HeroHeyBlock";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { pageMetadata, siteDescription, siteTitle } from "@/lib/site";

export const metadata = pageMetadata({
  title: siteTitle,
  description: siteDescription,
  path: "/",
  absolute: true,
  keywords: [
    "Vadim Filatov",
    "UI/UX designer Prague",
    "UI/UX engineer",
    "visual designer Prague",
    "brand identity designer",
    "Next.js developer",
    "React developer",
    "product designer",
  ],
});

export default function HomePage() {
  return (
    <>
      <HeroHeyBlock />
      <GallerySection id="gallery" />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
