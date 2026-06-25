"use client";

import { useRive } from "@rive-app/react-canvas";

type RiveAnimationProps = {
  src: string;
  className?: string;
};

export function RiveAnimation({ src, className = "" }: RiveAnimationProps) {
  const { RiveComponent } = useRive({
    src,
    autoplay: true,
  });

  return <RiveComponent className={className} aria-hidden="true" />;
}
