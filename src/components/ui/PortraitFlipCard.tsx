"use client";

import Image from "next/image";
import { useRef } from "react";
import { usePortraitFlip } from "@/hooks/usePortraitFlip";

const PORTRAIT_SRC = "/images/vadim-portrait.png";

type PortraitFlipCardProps = {
  className?: string;
  priority?: boolean;
};

export function PortraitFlipCard({ className = "", priority = false }: PortraitFlipCardProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  usePortraitFlip(sceneRef, cardRef);

  return (
    <div ref={sceneRef} className={`portrait-flip-scene ${className}`}>
      <div ref={cardRef} className="portrait-flip-card">
        <div className="portrait-flip-face portrait-flip-front">
          <Image
            src={PORTRAIT_SRC}
            alt="Vadim Filatov"
            width={480}
            height={600}
            priority={priority}
            className="portrait-flip-image portrait-flip-image--bw"
          />
        </div>
        <div className="portrait-flip-face portrait-flip-back">
          <Image
            src={PORTRAIT_SRC}
            alt="Vadim Filatov"
            width={480}
            height={600}
            className="portrait-flip-image"
          />
        </div>
      </div>
    </div>
  );
}
