"use client";

import { useState } from "react";
import { PlusSign } from "@/components/ui/PlusSign";

type AnimatedTitleProps = {
  headline: string;
  alternate: string;
  singleLine?: boolean;
  className?: string;
  as?: "h1" | "h2";
};

function TitleText({ value }: { value: string }) {
  const lines = value.split("\n");

  return lines.map((line, index) => (
    <span key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

export function AnimatedTitle({
  headline,
  alternate,
  singleLine = false,
  className = "",
  as: Heading = "h1",
}: AnimatedTitleProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`animated-title${singleLine ? " animated-title--single" : ""} ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="heading-h1 animated-title-sizer" aria-hidden="true">
        <TitleText value={headline} />
      </div>
      <div className="heading-h1 animated-title-sizer" aria-hidden="true">
        <TitleText value={alternate} />
      </div>
      <Heading
        className="heading-h1 animated-title-layer"
        style={{
          opacity: hovered ? 0 : 1,
          filter: hovered ? "blur(8px)" : "blur(0)",
        }}
      >
        <TitleText value={headline} />
      </Heading>
      <div
        className="heading-h1 animated-title-layer"
        style={{
          opacity: hovered ? 1 : 0,
          filter: hovered ? "blur(0)" : "blur(8px)",
        }}
        aria-hidden="true"
      >
        <TitleText value={alternate} />
      </div>
      <div className="plus-sign">
        <PlusSign />
      </div>
    </div>
  );
}
