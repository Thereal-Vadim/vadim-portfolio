import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroHeyBlock } from "@/components/sections/HeroHeyBlock";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroHeyBlock />
      <GallerySection id="gallery" />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <LogoMarquee />
      <CTASection />
      <Footer />
    </>
  );
}
