"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { PlusSign } from "@/components/ui/PlusSign";
import type { blogPosts } from "@/data/content";

type BlogPost = (typeof blogPosts)[number];

type BlogArticleSectionProps = {
  post: BlogPost;
};

function TitleLines({ value }: { value: string }) {
  return value.split("\n").map((line, index) => (
    <span key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

export function BlogArticleSection({ post }: BlogArticleSectionProps) {
  const sections = "sections" in post ? post.sections : undefined;
  const quote = "quote" in post ? post.quote : undefined;
  const paragraphs = "body" in post && post.body ? post.body : [post.excerpt];

  return (
    <article
      data-scroll="light"
      className="theme-light bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <header className="blog-article-hero">
        <div className="blog-article-hero-copy">
          <p className="eyebrow mb-6">
            {post.status} · {post.category}
          </p>
          <div className="blog-article-title-wrap">
            <span className="plus-sign">
              <PlusSign />
            </span>
            <h1 className="heading-h1">
              <TitleLines value={post.title} />
            </h1>
          </div>
        </div>
        <ul className="blog-article-meta">
          <li>
            <span>Field</span>
            <span>{post.category}</span>
          </li>
          <li>
            <span>Status</span>
            <span>{post.status}</span>
          </li>
          <li>
            <span>Read</span>
            <span>4 min</span>
          </li>
        </ul>
      </header>

      <div className="blog-article-stage" aria-hidden="true">
        <div className="blog-article-device">
          <span>01 Open</span>
          <span>02 Permit</span>
          <span>03 Stay</span>
        </div>
      </div>

      <div className="padding-global">
        <div className="container-large">
          <p className="blog-article-lede">{post.excerpt}</p>

          {quote ? <blockquote className="blog-article-quote">{quote}</blockquote> : null}

          {sections ? (
            <div className="blog-article-sections">
              {sections.map((section) => (
                <section key={section.num} className="blog-article-section">
                  <p className="eyebrow mb-3">
                    {section.num} {section.title}
                  </p>
                  <p className="m-0">{section.text}</p>
                </section>
              ))}
            </div>
          ) : (
            <div className="blog-article-prose">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}

          <div className="blog-article-end">
            <ButtonLink href="/blog" flipArrow>
              back to notes
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}
