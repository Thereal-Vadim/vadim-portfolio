import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { AboutPageSection } from "@/components/sections/AboutPageSection";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Vadim Filatov is a Prague-based UI/UX engineer and visual designer. Strategy, interface design, and production-ready React and Next.js — one point of contact.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutPageSection />
      <Footer />
    </>
  );
}
