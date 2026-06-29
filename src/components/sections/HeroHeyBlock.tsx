"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { PortraitMorph, PORTRAIT_SRC } from "@/components/ui/PortraitMorph";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { usePortraitScrollMorph } from "@/hooks/usePortraitScrollMorph";

export function HeroHeyBlock() {
  const heroRef = useRef<HTMLElement>(null);
  const scrollRootRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLSpanElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const dockedRef = useRef(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useHeroAnimation(heroRef);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  usePortraitScrollMorph({
    enabled: isDesktop,
    scrollRootRef,
    heroRef,
    startRef,
    endRef,
    portraitRef,
    dockedRef,
  });

  return (
    <div ref={scrollRootRef} className="hero-hey-block relative">
      <header
        ref={heroRef}
        data-scroll="light"
        className="section-hero theme-light flex min-h-screen flex-col justify-center bg-[var(--color-background)] text-[var(--color-text)]"
      >
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large pb-12">
              <div className="flex w-full flex-col items-center">
                <div className="relative w-full text-center">
                  <h1 className="heading-h1">
                    designing (<span data-hero-word="1">&nbsp;</span>)
                  </h1>
                  <h1 className="heading-h1 mt-4 relative">
                    for (<span data-hero-word="2">&nbsp;</span>)
                    {isDesktop ? (
                      <span
                        ref={startRef}
                        className="portrait-start-slot pointer-events-none absolute left-1/2 top-full block h-0 w-[11rem] -translate-x-1/2 sm:w-[12rem]"
                        aria-hidden="true"
                      />
                    ) : null}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        data-scroll="light"
        className="theme-light bg-[var(--color-background)] text-[var(--color-text)]"
      >
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large pt-0">
              <div className="hey-grid grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)_minmax(0,1fr)] lg:items-stretch lg:gap-x-10 lg:gap-y-0">
                <div className="hey-grid__left flex min-h-0 w-full flex-col gap-6 lg:min-h-[27.5rem]">
                  <h2 className="hey-heading m-0 shrink-0 text-[clamp(4rem,12vw,8rem)] font-semibold leading-[0.95] tracking-tight">
                    Hello!
                  </h2>
                  <p className="m-0 flex-1 text-[0.9375rem] leading-relaxed">
                    I&apos;m Vadim, a designer and builder based in Prague, currently working at
                    Efsy COFL and running Kefir Software Company.
                  </p>
                </div>

                <div className="hey-grid__center flex justify-center lg:px-0">
                  <div
                    ref={endRef}
                    className="portrait-end-slot relative aspect-[4/5] w-full max-w-[22rem]"
                  >
                    {!isDesktop ? (
                      <div className="hey-portrait relative h-full w-full overflow-hidden rounded-[2rem] shadow-[0_24px_48px_rgba(24,22,20,0.08)]">
                        <Image
                          src={PORTRAIT_SRC}
                          alt="Vadim Filatov"
                          fill
                          className="object-cover object-top"
                          sizes="80vw"
                          priority
                        />
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="hey-grid__right flex min-h-0 w-full flex-col gap-6 lg:min-h-[27.5rem]">
                  <div className="flex-1 space-y-4 text-[0.9375rem] leading-relaxed">
                    <p className="m-0">
                      I&apos;m a UI/UX Engineer and Visual Designer bridging the gap between
                      clean aesthetics and frontend code. I build logical visual languages focused
                      on simplicity, clarity, and trust.
                    </p>
                    <p className="m-0">
                      With 3 years of experience in branding and marketing, I design and develop
                      high-converting websites, such as Efsy and Larose 432, alongside
                      human-centric digital products like GrossGrowth and Gymini.
                    </p>
                  </div>
                  <Link
                    href="#gallery"
                    className="button-link inline-flex w-fit shrink-0 items-center gap-2 text-[0.9375rem] font-medium"
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

      {isDesktop ? <PortraitMorph ref={portraitRef} priority /> : null}
    </div>
  );
}
