import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogArticleSection } from "@/components/sections/BlogArticleSection";
import { getBlogPost, publishedBlogPosts } from "@/data/content";
import { blogPostingJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/site";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return pageMetadata({
      title: "Blog",
      description: "This note is not published.",
      path: "/blog",
      index: false,
    });
  }

  return pageMetadata({
    title: post.title.replace(/\s*\n\s*/g, " "),
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd data={blogPostingJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title.replace(/\s*\n\s*/g, " "), path: `/blog/${post.slug}` },
        ])}
      />
      <BlogArticleSection post={post} />
      <Footer />
    </>
  );
}
