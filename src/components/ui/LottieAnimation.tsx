"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

type LottieAnimationProps = {
  src: string;
  className?: string;
};

export function LottieAnimation({ src, className = "" }: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(src)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setAnimationData(data);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (!animationData) {
    return <div className={className} aria-hidden="true" />;
  }

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className={className}
      aria-hidden="true"
    />
  );
}
