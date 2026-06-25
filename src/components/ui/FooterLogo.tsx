"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const FOOTER_LOTTIE =
  "https://cdn.prod.website-files.com/6a11b855a3b0df7cae8adcad/6a1490c26b30558f551c1d40_973690ea403cb295a8fe01694dfe2929_nomoredesign%20ae%20white.js";

export function FooterLogo() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch(FOOTER_LOTTIE)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => {});
  }, []);

  if (!animationData) {
    return (
      <div className="text-[clamp(4rem,18vw,12rem)] font-bold leading-none">(no)</div>
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className="max-h-80 w-full"
      aria-label="(no)"
    />
  );
}
