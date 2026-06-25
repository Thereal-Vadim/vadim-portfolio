"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavLogoProps = {
  href?: string;
  className?: string;
};

export function NavLogo({ href = "/", className = "" }: NavLogoProps) {
  const shortRef = useRef<HTMLSpanElement>(null);
  const fullRef = useRef<HTMLSpanElement>(null);
  const [widths, setWidths] = useState({ short: 0, full: 0 });

  useEffect(() => {
    const measure = () => {
      if (!shortRef.current || !fullRef.current) return;
      setWidths({
        short: shortRef.current.offsetWidth,
        full: fullRef.current.offsetWidth,
      });
    };

    measure();
    document.fonts.ready.then(measure).catch(measure);
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <Link
      href={href}
      data-hover="no-cursor"
      className={`nav-logo-link group relative z-10 flex h-6 items-center ${className}`}
      aria-label="Vadim Filatov"
      style={
        {
          "--nav-logo-short": widths.short ? `${widths.short}px` : "2.1ch",
          "--nav-logo-full": widths.full ? `${widths.full}px` : "13.5ch",
        } as React.CSSProperties
      }
    >
      <span
        className="nav-logo inline-flex items-baseline text-[1.125rem] font-bold leading-none"
        aria-hidden="true"
      >
        <span className="nav-logo-bracket">(</span>
        <span className="nav-logo-text">
          <span ref={shortRef} className="nav-logo-short">
            VF
          </span>
          <span ref={fullRef} className="nav-logo-full">
            Vadim Filatov
          </span>
        </span>
        <span className="nav-logo-bracket">)</span>
      </span>
    </Link>
  );
}
