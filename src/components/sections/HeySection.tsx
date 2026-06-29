"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

const PORTRAIT_SRC = "/images/vadim-portrait.png";

export function HeySection() {
  return (
    <section
      data-scroll="light"
      className="theme-light bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large pt-0">
            <div className="hey-grid grid items-start gap-10 lg:grid-cols-3 lg:items-center lg:gap-[0.625rem]">
              <div className="hey-grid__left flex flex-col gap-6 lg:pt-4">
                <h2 className="hey-heading m-0 text-[clamp(4rem,12vw,8rem)] font-semibold leading-[0.95] tracking-tight">
                  Hey!
                </h2>
                <p className="m-0 max-w-sm text-[0.9375rem] leading-relaxed">
                  I&apos;m Vadim, a designer and builder based in Prague, currently running
                  Kefir Software Company.
                </p>
              </div>

              <div className="hey-grid__center flex justify-center lg:hidden">
                <div className="hey-portrait relative aspect-[4/5] w-full max-w-[20rem] overflow-hidden rounded-[2rem]">
                  <Image
                    src={PORTRAIT_SRC}
                    alt="Vadim Filatov"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 80vw, 20rem"
                  />
                </div>
              </div>

              <div className="hey-grid__right flex flex-col gap-8 lg:pt-4">
                <div className="space-y-4 text-[0.9375rem] leading-relaxed">
                  <p className="m-0">
                    I&apos;m a UI/UX Engineer and Visual Designer bridging the gap between
                    clean aesthetics and frontend code. I build logical visual languages focused
                    on simplicity, clarity, and trust.
                  </p>
                  <p className="m-0">
                    With 5 years of experience in branding and marketing, I design and develop
                    human-centric utilities for personal organization and small businesses—including
                    GrossGrowth and Efsy.
                  </p>
                </div>
                <Link
                  href="#gallery"
                  className="button-link inline-flex w-fit items-center gap-2 text-[0.9375rem] font-medium"
                  data-hover="no-cursor"
                >
                  <span>See Projects</span>
                  <span className="button-arrow">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
