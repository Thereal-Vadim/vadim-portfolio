import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { FootballAcademySection } from "@/components/sections/FootballAcademySection";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Football Academy",
  description:
    "MSM Football Academy case study: identity, print, and a desktop site for a Prague football programme. Brand lockups, brochures, Instagram, and fcmsm.eu by Vadim Filatov.",
  path: "/work/football-academy",
});

export default function FootballAcademyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Football Academy", path: "/work/football-academy" },
        ])}
      />
      <FootballAcademySection />
      <Footer />
    </>
  );
}
