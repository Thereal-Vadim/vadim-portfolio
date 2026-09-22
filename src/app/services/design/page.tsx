import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { DesignPageSection } from "@/components/sections/DesignPageSection";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "UI/UX Design",
  description:
    "UI/UX design in Prague: websites, apps, redesigns, and design systems. Clear flows, fewer dead ends. Projects from 300€.",
  path: "/services/design",
});

export default function DesignPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "UI/UX Design", path: "/services/design" },
        ])}
      />
      <DesignPageSection />
      <Footer />
    </>
  );
}
