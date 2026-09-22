import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { DevelopmentPageSection } from "@/components/sections/DevelopmentPageSection";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Development",
  description:
    "Development in Prague: websites, native iOS apps, and Telegram Mini Apps in Next.js, Python, and Swift. Design and code from one person. Projects from 100€.",
  path: "/services/development",
});

export default function DevelopmentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Development", path: "/services/development" },
        ])}
      />
      <DevelopmentPageSection />
      <Footer />
    </>
  );
}
