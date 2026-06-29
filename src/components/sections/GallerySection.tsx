"use client";

import { Caveat, IBM_Plex_Mono } from "next/font/google";
import { NotableWorkGallery } from "@/components/sections/notable-work/NotableWorkGallery";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

export function GallerySection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      data-scroll="dark"
      className={`section-gallery theme-dark bg-[var(--color-background)] text-[var(--color-text)] ${caveat.variable} ${plexMono.variable}`}
    >
      <NotableWorkGallery />
    </section>
  );
}
