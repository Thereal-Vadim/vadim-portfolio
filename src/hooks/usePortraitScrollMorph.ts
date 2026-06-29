"use client";

import { useEffect, type RefObject } from "react";

const SCRUB = 1.6;
/** Extra nudge up from the bottom edge of the "for" line (px) */
const START_TOP_OFFSET = -10;

type Metrics = {
  startTop: number;
  startWidth: number;
  startHeight: number;
  endTop: number;
  endCenterX: number;
  endWidth: number;
  endHeight: number;
};

function readMetrics(startEl: HTMLElement, endEl: HTMLElement): Metrics {
  const anchor = startEl.getBoundingClientRect();
  const end = endEl.getBoundingClientRect();
  const scrollY = window.scrollY;
  const startWidth = anchor.width > 0 ? anchor.width : 192;
  const startHeight = startWidth * (5 / 4);

  return {
    startTop: anchor.top + scrollY + START_TOP_OFFSET,
    startWidth,
    startHeight,
    endTop: end.top + scrollY,
    endCenterX: end.left + end.width / 2,
    endWidth: end.width,
    endHeight: end.height,
  };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

type UsePortraitScrollMorphArgs = {
  enabled: boolean;
  scrollRootRef: RefObject<HTMLElement | null>;
  heroRef: RefObject<HTMLElement | null>;
  startRef: RefObject<HTMLElement | null>;
  endRef: RefObject<HTMLElement | null>;
  portraitRef: RefObject<HTMLElement | null>;
  dockedRef: RefObject<boolean>;
};

export function usePortraitScrollMorph({
  enabled,
  scrollRootRef,
  heroRef,
  startRef,
  endRef,
  portraitRef,
  dockedRef,
}: UsePortraitScrollMorphArgs) {
  useEffect(() => {
    if (!enabled) return;

    const scrollRoot = scrollRootRef.current;
    const heroEl = heroRef.current;
    const startEl = startRef.current;
    const endEl = endRef.current;
    const portrait = portraitRef.current;
    if (!scrollRoot || !heroEl || !startEl || !endEl || !portrait) return;

    const inner = portrait.querySelector<HTMLElement>(".portrait-morph-inner");
    if (!inner) return;

    let ctx: { revert: () => void } | undefined;
    let metrics: Metrics | null = null;
    let scrollTriggerInstance: { progress: number } | null = null;
    let resizeHandler: (() => void) | null = null;
    let scrollHandler: (() => void) | null = null;

    const applyProgress = (progress: number) => {
      if (!metrics) return;

      const t = Math.min(Math.max(progress, 0), 1);
      const scrollY = window.scrollY;

      const anchor = startEl.getBoundingClientRect();
      const liveStartTop = anchor.top + scrollY + START_TOP_OFFSET;

      const width = lerp(metrics.startWidth, metrics.endWidth, t);
      const height = lerp(metrics.startHeight, metrics.endHeight, t);
      const startCenterX = window.innerWidth / 2;
      const centerX = lerp(startCenterX, metrics.endCenterX, t);
      const top = lerp(liveStartTop, metrics.endTop, t) - scrollY;

      portrait.style.visibility = "visible";
      portrait.style.position = "fixed";
      portrait.style.top = `${top}px`;
      portrait.style.left = `${centerX - width / 2}px`;
      portrait.style.width = `${width}px`;
      portrait.style.height = `${height}px`;
      portrait.style.margin = "0";
      portrait.style.transform = "none";
      portrait.style.zIndex = "30";

      inner.style.transform = `rotateY(${360 * t}deg)`;
      inner.style.filter = `grayscale(${100 * (1 - t)}%) contrast(${1 + t * 0.05})`;
    };

    const syncMetrics = () => {
      metrics = readMetrics(startEl, endEl);
      applyProgress(scrollTriggerInstance?.progress ?? 0);
    };

    const dockPortrait = () => {
      if (dockedRef.current) return;
      dockedRef.current = true;

      portrait.style.position = "absolute";
      portrait.style.inset = "0";
      portrait.style.width = "100%";
      portrait.style.height = "100%";
      portrait.style.top = "0";
      portrait.style.left = "0";
      portrait.style.margin = "0";
      portrait.style.transform = "none";
      portrait.style.visibility = "visible";
      portrait.style.zIndex = "1";

      inner.style.transform = "rotateY(0deg)";
      inner.style.filter = "grayscale(0%)";

      endEl.appendChild(portrait);
    };

    const undockPortrait = () => {
      if (!dockedRef.current) return;
      dockedRef.current = false;

      scrollRoot.appendChild(portrait);
      portrait.style.inset = "";
      portrait.style.position = "fixed";
    };

    // Position immediately before GSAP loads
    syncMetrics();

    void (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const refreshMetrics = () => {
          if (dockedRef.current) return;
          metrics = readMetrics(startEl, endEl);
        };

        syncMetrics();
        requestAnimationFrame(syncMetrics);

        scrollTriggerInstance = ScrollTrigger.create({
          trigger: heroEl,
          start: "bottom 78%",
          endTrigger: endEl,
          end: "center center",
          scrub: SCRUB,
          invalidateOnRefresh: true,
          onRefresh: () => {
            undockPortrait();
            refreshMetrics();
            applyProgress(scrollTriggerInstance?.progress ?? 0);
          },
          onUpdate: (self) => {
            if (self.progress >= 0.999) {
              dockPortrait();
              return;
            }

            if (dockedRef.current) undockPortrait();
            if (self.progress <= 0) refreshMetrics();
            applyProgress(self.progress);
          },
          onLeave: dockPortrait,
          onEnterBack: () => {
            undockPortrait();
            refreshMetrics();
            applyProgress(scrollTriggerInstance?.progress ?? 0);
          },
        });
      }, scrollRoot);

      resizeHandler = () => ScrollTrigger.refresh();
      window.addEventListener("resize", resizeHandler);

      scrollHandler = () => {
        const progress = scrollTriggerInstance?.progress ?? 0;
        if (progress <= 0 && !dockedRef.current) applyProgress(0);
      };
      window.addEventListener("scroll", scrollHandler, { passive: true });
    })();

    return () => {
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      if (scrollHandler) window.removeEventListener("scroll", scrollHandler);
      ctx?.revert();
      dockedRef.current = false;
    };
  }, [enabled, scrollRootRef, heroRef, startRef, endRef, portraitRef, dockedRef]);
}
