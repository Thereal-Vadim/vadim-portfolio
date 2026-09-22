import type { Metadata } from "next";

export const siteName = "Vadim Filatov";

export const siteTitle =
  "Vadim Filatov — UI/UX Engineer & Visual Designer";

export const siteDescription =
  "Prague-based UI/UX engineer and visual designer. Brand systems, interface design, and production-ready websites and apps in React, Next.js, and Swift — one point of contact.";

export const siteEmail = "12vadim.filatov2001@gmail.com";

export const sameAs = [
  "https://www.linkedin.com/in/filatov-vadim/",
  "https://github.com/Thereal-Vadim",
] as const;

export const defaultOgImage = {
  url: "/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Vadim Filatov — UI/UX engineer and visual designer in Prague",
} as const;

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionHost) {
    return `https://${productionHost.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
  }

  return "http://localhost:3000";
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  absolute?: boolean;
  type?: "website" | "article";
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  index = true,
  absolute = false,
  type = "website",
  keywords,
}: PageMetadataInput): Metadata {
  const branded = absolute ? title : `${title} | ${siteName}`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: branded,
      description,
      url: path,
      siteName,
      type,
      locale: "en_US",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: branded,
      description,
      images: [defaultOgImage.url],
    },
    robots: {
      index,
      follow: true,
    },
  };
}

export function siteJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${url}/#person`,
        name: siteName,
        jobTitle: "UI/UX Engineer and Visual Designer",
        url,
        email: `mailto:${siteEmail}`,
        image: absoluteUrl("/images/vadim-portrait.png"),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Prague",
          addressCountry: "CZ",
        },
        sameAs: [...sameAs],
        worksFor: {
          "@type": "Organization",
          name: "Kefir Software Company",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#service`,
        name: siteName,
        url,
        image: absoluteUrl(defaultOgImage.url),
        description: siteDescription,
        email: `mailto:${siteEmail}`,
        areaServed: {
          "@type": "City",
          name: "Prague",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Prague",
          addressCountry: "CZ",
        },
        provider: { "@id": `${url}/#person` },
        serviceType: [
          "UI/UX design",
          "Brand identity",
          "Web development",
          "iOS development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: siteName,
        description: siteDescription,
        inLanguage: "en",
        publisher: { "@id": `${url}/#person` },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function blogPostingJsonLd(post: {
  slug: string;
  title: string;
  excerpt: string;
}) {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.replace(/\s*\n\s*/g, " "),
    description: post.excerpt,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    url: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl(defaultOgImage.url),
    author: { "@id": `${url}/#person` },
    publisher: { "@id": `${url}/#person` },
    inLanguage: "en",
  };
}
