import type { MetadataRoute } from "next";
import { publishedBlogPosts } from "@/data/content";
import { absoluteUrl } from "@/lib/site";

const staticPaths = [
  "/",
  "/about",
  "/contact",
  "/services/development",
  "/services/branding",
  "/services/design",
  "/work/efsy",
  "/work/msm-academy",
  "/work/football-academy",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...(publishedBlogPosts.length > 0 ? ["/blog"] : []),
    ...publishedBlogPosts.map((post) => `/blog/${post.slug}`),
  ];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/work/") ? 0.8 : 0.6,
  }));
}
