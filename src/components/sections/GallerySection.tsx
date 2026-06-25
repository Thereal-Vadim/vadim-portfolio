"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/content";
import { PlusSign } from "@/components/ui/PlusSign";

export function GallerySection() {
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section
      data-scroll="dark"
      className="section-gallery theme-dark overflow-hidden bg-[var(--color-background)] py-16 text-[var(--color-text)]"
    >
      <div className="flex gap-16 overflow-hidden">
        <div className="scroll-marquee flex shrink-0 gap-16">
          {duplicatedProjects.map((project, index) => (
            <GalleryItem key={`${project.title}-${index}`} project={project} />
          ))}
        </div>
        <div className="scroll-marquee flex shrink-0 gap-16" aria-hidden="true">
          {duplicatedProjects.map((project, index) => (
            <GalleryItem key={`dup-${project.title}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Link
      href={project.href}
      data-hover="no-cursor"
      className="group relative block shrink-0"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={533}
        className="aspect-[3/2] max-w-[40vw] object-cover"
      />
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex gap-2">
          <PlusSign className="h-4 w-4" />
          <PlusSign className="h-4 w-4" />
        </div>
        <div className="mt-2 flex gap-2">
          <PlusSign className="h-4 w-4" />
          <PlusSign className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
