import { JsonLd } from "@/components/seo/JsonLd";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Vadim Filatov, a Prague UI/UX engineer and visual designer. Bring a brief or an early idea — the first conversation includes a number you can plan around.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactSection />
    </>
  );
}
