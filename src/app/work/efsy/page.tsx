import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { EfsySection } from "@/components/sections/EfsySection";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Efsy",
  description:
    "Efsy case study: logo, menus, posters, Instagram, guest app, and event graphics for a Prague café and evening bar. Brand identity by Vadim Filatov, 2025.",
  path: "/work/efsy",
});

export default function EfsyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Efsy", path: "/work/efsy" },
        ])}
      />
      <EfsySection />
      <Footer />
    </>
  );
}
