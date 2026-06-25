"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { services } from "@/data/content";
import { AnimatedTitle } from "@/components/ui/AnimatedTitle";
import { ButtonLink } from "@/components/ui/ButtonLink";

const LottieAnimation = dynamic(
  () => import("@/components/ui/LottieAnimation").then((m) => m.LottieAnimation),
  { ssr: false },
);

const RiveAnimation = dynamic(
  () => import("@/components/ui/RiveAnimation").then((m) => m.RiveAnimation),
  { ssr: false },
);

export function ServicesSection() {
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
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        data-scroll="dark"
        className="theme-dark bg-[var(--color-background)] text-[var(--color-text)]"
      >
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="max-w-5xl">
                <AnimatedTitle
                  headline="Let's make something."
                  alternate="Good work starts here."
                  singleLine
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        data-scroll="dark"
        className="theme-dark bg-[var(--color-background)] pb-28 text-[var(--color-text)]"
      >
        <div className="padding-global">
          <div className="container-large">
            <div
              ref={gridRef}
              className="fade-in-stagger grid gap-12 md:grid-cols-3"
            >
              {services.map((service) => (
                <div key={service.eyebrow} className="flex flex-col">
                  <div className="mb-6 aspect-square overflow-hidden rounded-[var(--radius-large)]">
                    {service.animationType === "rive" ? (
                      <RiveAnimation src={service.animation} className="h-full w-full" />
                    ) : (
                      <LottieAnimation src={service.animation} className="h-full w-full" />
                    )}
                  </div>
                  <p className="eyebrow mb-2">{service.eyebrow}</p>
                  <h3 className="heading-h5 mb-3">{service.title}</h3>
                  <p className="mb-6 text-[0.9375rem] leading-relaxed">{service.description}</p>
                  <ButtonLink href={service.href} flipArrow={service.eyebrow === "Webflow"}>
                    {service.linkText}
                  </ButtonLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
