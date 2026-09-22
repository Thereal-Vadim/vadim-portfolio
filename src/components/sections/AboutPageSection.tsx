"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { aboutPage } from "@/data/content";
import { AnimatedTitle } from "@/components/ui/AnimatedTitle";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function AboutPageSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      data-scroll="light"
      className="theme-light bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <div className="about-page-shell">
        <div className="max-w-5xl">
          <AnimatedTitle
            headline={aboutPage.headline}
            alternate={aboutPage.alternate}
          />
        </div>
        <p className="about-page-intro">{aboutPage.intro}</p>
      </div>

      <div className="padding-global">
        <div className="container-large">
          <div ref={gridRef} className="fade-in-stagger about-page-body">
            <div className="about-page-portrait">
              <div className="about-page-portrait-frame">
                <Image
                  src="/images/vadim-portrait.png"
                  alt="Vadim Filatov"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(min-width: 768px) 28rem, 80vw"
                />
              </div>
            </div>

            <div className="about-page-copy">
              {aboutPage.columns.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <ButtonLink href="/contact">start a conversation</ButtonLink>
            </div>
          </div>

          <div className="about-page-facts">
            {aboutPage.facts.map((fact) => (
              <div key={fact.num} className="about-page-fact">
                <p className="about-page-fact-label">
                  <span>{fact.num}</span>
                  <span>{fact.label}</span>
                </p>
                <p className="about-page-fact-value">{fact.value}</p>
              </div>
            ))}
          </div>

          <div className="about-page-principles">
            {aboutPage.principles.map((principle) => (
              <div key={principle.num} className="about-page-principle">
                <p className="eyebrow mb-3">
                  {principle.num} {principle.title}
                </p>
                <p className="m-0 text-[0.9375rem] leading-relaxed">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
