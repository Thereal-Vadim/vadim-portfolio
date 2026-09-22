import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { BrandingPageSection } from "@/components/sections/BrandingPageSection";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Branding",
  description:
    "Brand identity in Prague: logo, visual system, product photography, and social identity in one language. Projects from 50€.",
  path: "/services/branding",
});

export default function BrandingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Branding", path: "/services/branding" },
        ])}
      />
      <BrandingPageSection />
      <Footer />
    </>
  );
}
