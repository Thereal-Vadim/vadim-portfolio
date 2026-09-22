import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { MSMAcademySection } from "@/components/sections/MSMAcademySection";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "MSM Academy",
  description:
    "MSM Academy case study: brand identity, logo, mobile web, brochures, badges, and email banners. Designed by Vadim Filatov, 2025, Dubai.",
  path: "/work/msm-academy",
});

export default function MSMAcademyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "MSM Academy", path: "/work/msm-academy" },
        ])}
      />
      <MSMAcademySection />
      <Footer />
    </>
  );
}
