import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/site";

type LegalDocumentProps = {
  title: string;
  path: string;
  lede: string;
  children: React.ReactNode;
};

export function LegalDocument({ title, path, lede, children }: LegalDocumentProps) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: title, path },
        ])}
      />
      <article
        data-scroll="light"
        className="theme-light bg-[var(--color-background)] text-[var(--color-text)]"
      >
        <div className="about-page-shell">
          <h1 className="heading-h1">{title}</h1>
          <p className="about-page-intro">{lede}</p>
        </div>
        <div className="padding-global">
          <div className="container-large">
            <div className="legal-copy">{children}</div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
