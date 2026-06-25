"use client";

import { useRef } from "react";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  useHeroAnimation(containerRef);

  return (
    <header
      ref={containerRef}
      data-scroll="light"
      className="section-hero theme-light flex min-h-screen flex-col justify-center bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="flex w-full items-center justify-center">
              <div className="w-full text-center">
                <h1 className="heading-h1">
                  designing (<span data-hero-word="1">&nbsp;</span>)
                </h1>
                <h1 className="heading-h1 mt-4">
                  for (<span data-hero-word="2">&nbsp;</span>)
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
