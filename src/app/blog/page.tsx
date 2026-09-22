import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogPageSection } from "@/components/sections/BlogPageSection";
import { publishedBlogPosts } from "@/data/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Notes from Vadim Filatov on UI/UX, branding, and shipping production-ready interfaces.",
  path: "/blog",
  index: publishedBlogPosts.length > 0,
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <BlogPageSection />
      <Footer />
    </>
  );
}
