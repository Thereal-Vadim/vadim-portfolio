"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getHandPointer } from "@/lib/handPointer";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      cursor.style.display = "none";
      document.body.style.cursor = "auto";
    }

    let x = 0;
    let y = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      const hand = getHandPointer();
      if (hand.active && hand.visible) return;
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      const hand = getHandPointer();
      const handDriving = hand.active && hand.visible;

      if (handDriving) {
        x = hand.x;
        y = hand.y;
        cursor.style.display = "";
      } else if (isTouchDevice && !hand.active) {
        cursor.style.display = "none";
      }

      cursor.classList.toggle("is-pinched", handDriving && hand.pinched);

      const ease = handDriving ? 0.18 : 0.15;
      currentX += (x - currentX) * ease;
      currentY += (y - currentY) * ease;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="bracket left">(</span>
      <span className="bracket right">)</span>
    </div>,
    document.body,
  );
}
