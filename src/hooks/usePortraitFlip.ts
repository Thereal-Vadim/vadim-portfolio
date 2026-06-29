"use client";

import { useEffect } from "react";

const FLIP_DURATION = 1.6;
const FLIP_DELAY = 1;

export function usePortraitFlip(
  sceneRef: React.RefObject<HTMLElement | null>,
  cardRef: React.RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const scene = sceneRef.current;
    const card = cardRef.current;
    if (!scene || !card) return;

    let ctx: { revert: () => void } | undefined;

    void (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.set(card, { rotateY: 0, transformPerspective: 1200 });

        gsap.to(card, {
          rotateY: 180,
          duration: FLIP_DURATION,
          delay: FLIP_DELAY,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: scene,
            start: "top 80%",
            end: "top 35%",
            scrub: 1.6,
          },
        });
      }, scene);
    })();

    return () => {
      ctx?.revert();
    };
  }, [sceneRef, cardRef]);
}
