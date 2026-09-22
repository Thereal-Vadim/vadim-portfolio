import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { BlogArticleSection } from "@/components/sections/BlogArticleSection";
import { blogPosts, getBlogPost } from "@/data/content";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Blog | Vadim Filatov" };
  }

  return {
    title: `${post.title} | Vadim Filatov`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogArticleSection post={post} />
      <Footer />
    </>
  );
}
