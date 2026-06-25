"use client";

import { useState } from "react";
import { PlusSign } from "@/components/ui/PlusSign";

type AnimatedTitleProps = {
  headline: string;
  alternate: string;
  singleLine?: boolean;
  className?: string;
};

export function AnimatedTitle({
  headline,
  alternate,
  singleLine = false,
  className = "",
}: AnimatedTitleProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`animated-title ${singleLine ? "single-line" : ""} ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1
        className="heading-h1"
        style={{
          opacity: hovered ? 0 : 1,
          filter: hovered ? "blur(8px)" : "blur(0)",
        }}
      >
        {headline}
      </h1>
      <h1
        className="heading-h1 absolute inset-0"
        style={{
          opacity: hovered ? 1 : 0,
          filter: hovered ? "blur(0)" : "blur(8px)",
        }}
        aria-hidden={!hovered}
      >
        {alternate}
      </h1>
      <div className="plus-sign">
        <PlusSign />
      </div>
    </div>
  );
}
