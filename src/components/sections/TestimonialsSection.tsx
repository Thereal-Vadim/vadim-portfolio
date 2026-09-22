"use client";

import { useState } from "react";
import { testimonials } from "@/data/content";
import { AnimatedTitle } from "@/components/ui/AnimatedTitle";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section
      data-scroll="light"
      className="theme-light bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="mb-16 max-w-3xl">
              <AnimatedTitle
                as="h2"
                headline="Don't take my word for it."
                alternate="In their very own words…"
              />
            </div>

            <div className="relative pb-24">
              <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_70ch]">
                <h4 className="heading-h6">{active.headline}</h4>
                <div>
                  <p className="mb-6 text-[0.9375rem] leading-relaxed">{active.quote}</p>
                  <div>
                    <p className="text-bold">{active.name}</p>
                    <p className="text-[0.9375rem]">{active.role}</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 flex items-center gap-3">
                <div className="mr-16 flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-hover="no-cursor"
                      className="h-2 w-2 rounded-full border-0 p-0 transition-opacity"
                      style={{
                        backgroundColor: "currentColor",
                        opacity: index === activeIndex ? 1 : 0.2,
                      }}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  data-hover="no-cursor"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-foreground)]"
                  onClick={() =>
                    setActiveIndex(
                      (index) => (index - 1 + testimonials.length) % testimonials.length,
                    )
                  }
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft />
                </button>

                <button
                  type="button"
                  data-hover="no-cursor"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-foreground)]"
                  onClick={() =>
                    setActiveIndex((index) => (index + 1) % testimonials.length)
                  }
                  aria-label="Next testimonial"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z"
        fill="currentColor"
      />
    </svg>
  );
}
