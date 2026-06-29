"use client";

import { useEffect, useRef } from "react";
import { AnimatedTitle } from "@/components/ui/AnimatedTitle";

export function AboutSection() {
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
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        data-scroll="light"
        className="theme-light bg-[var(--color-background)] text-[var(--color-text)]"
      >
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="max-w-3xl">
                <AnimatedTitle
                  headline="Great design, made simple."
                  alternate="One designer. Every detail."
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        data-scroll="light"
        className="theme-light bg-[var(--color-background)] pb-28 text-[var(--color-text)]"
      >
        <div className="padding-global">
          <div className="container-large">
            <div
              ref={gridRef}
              className="fade-in-stagger grid gap-16 md:grid-cols-2"
            >
              <div className="space-y-4 text-[0.9375rem] leading-relaxed">
                <p>
                  Vadim Filatov is a Prague-based UI/UX engineer and visual designer
                  bridging the gap between clean aesthetics and frontend code. With 3
                  years of experience in marketing and branding, he launches
                  high-converting websites and human-centric digital products for
                  forward-thinking small businesses and independent founders.
                </p>
                <p>
                  By combining structured visual languages with production-ready React
                  and Next.js code, he delivers fast, intuitive interfaces. Every
                  system is optimized for performance and completely free from the
                  typical disconnect between design and development.
                </p>
              </div>
              <div className="space-y-4 text-[0.9375rem] leading-relaxed">
                <p>
                  Working directly with founders and product teams, Vadim brings a
                  holistic, business-minded lens to every project—uniting strategy,
                  UI/UX design, and front-end execution. No agency overhead, no
                  account managers, and no clumsy handoffs.
                </p>
                <p>
                  One clear point of contact, structured design, and products built
                  to scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
