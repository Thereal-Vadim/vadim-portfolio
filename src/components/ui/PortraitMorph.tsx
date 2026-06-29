"use client";

import Image from "next/image";
import { forwardRef } from "react";

export const PORTRAIT_SRC = "/images/vadim-portrait.png";

type PortraitMorphProps = {
  priority?: boolean;
};

export const PortraitMorph = forwardRef<HTMLDivElement, PortraitMorphProps>(
  function PortraitMorph({ priority = false }, ref) {
    return (
      <div ref={ref} className="portrait-morph pointer-events-none">
        <div className="portrait-morph-inner h-full w-full">
          <div className="portrait-morph-frame relative h-full w-full overflow-hidden rounded-[2rem] shadow-[0_24px_48px_rgba(24,22,20,0.08)]">
            <Image
              src={PORTRAIT_SRC}
              alt="Vadim Filatov"
              fill
              priority={priority}
              className="portrait-morph-image object-cover object-top"
              sizes="(max-width: 1024px) 60vw, 22rem"
            />
          </div>
        </div>
      </div>
    );
  },
);
