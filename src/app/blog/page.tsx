import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { BlogPageSection } from "@/components/sections/BlogPageSection";

export const metadata: Metadata = {
  title: "Blog | Vadim Filatov",
  description:
    "Notes on design, development and process - shipping products, not files.",
};

export default function BlogPage() {
  return (
    <>
      <BlogPageSection />
      <Footer />
    </>
  );
}
