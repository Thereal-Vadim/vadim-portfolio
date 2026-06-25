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
                  <a href="#" className="underline underline-offset-2">
                    Amit Chakrabarti
                  </a>{" "}
                  is an independent designer and Webflow developer with over twenty
                  years&apos; experience. He&apos;s created brands, websites, campaigns
                  and everything in between – for global multinationals, scrappy
                  startups and the organisations that matter most to him.
                </p>
                <p>
                  As a{" "}
                  <a href="#" className="underline underline-offset-2">
                    Webflow Certified Partner
                  </a>
                  , he builds sites that clients can actually manage themselves —
                  fast, flexible, and free from the constraints of legacy platforms
                  or development backlogs.
                </p>
              </div>
              <div className="space-y-4 text-[0.9375rem] leading-relaxed">
                <p>
                  Working directly with founders, marketing teams and agencies, Amit
                  brings the full picture to every project – strategy,{" "}
                  <a href="#" className="underline underline-offset-2">
                    design
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline underline-offset-2">
                    development
                  </a>{" "}
                  under one roof, without the overhead of an agency. No account
                  managers, no handoffs.
                </p>
                <p>
                  One point of{" "}
                  <a href="#" className="underline underline-offset-2">
                    contact
                  </a>
                  , considered{" "}
                  <a href="#" className="underline underline-offset-2">
                    work
                  </a>
                  , and results built to last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
