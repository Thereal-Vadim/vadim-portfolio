"use client";

import Link from "next/link";
import { blogPage, blogPosts } from "@/data/content";
import { AnimatedTitle } from "@/components/ui/AnimatedTitle";

export function BlogPageSection() {
  return (
    <section
      data-scroll="light"
      className="theme-light bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <div className="about-page-shell">
        <div className="max-w-5xl">
          <AnimatedTitle
            headline={blogPage.headline}
            alternate={blogPage.alternate}
          />
        </div>
        <p className="about-page-intro">{blogPage.intro}</p>
      </div>

      <div className="padding-global">
        <div className="container-large">
          <div className="blog-page-list">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-page-post">
                <p className="eyebrow mb-3">
                  {post.status} · {post.category}
                </p>
                <h2 className="heading-h5 mb-3">
                  <Link href={`/blog/${post.slug}`} className="blog-page-post-link">
                    {post.title}
                  </Link>
                </h2>
                <p className="m-0 text-[0.9375rem] leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
