"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      cursor.style.display = "none";
      document.body.style.cursor = "auto";
      return;
    }

    let x = 0;
    let y = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      currentX += (x - currentX) * 0.15;
      currentY += (y - currentY) * 0.15;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };

    const updateTheme = () => {
      const sections = document.querySelectorAll("[data-scroll]");
      let isDark = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          isDark = section.getAttribute("data-scroll") === "dark";
        }
      });

      cursor.classList.toggle("is-dark", isDark);
    };

    const onScroll = () => updateTheme();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    animate();
    updateTheme();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="bracket left">(</span>
      <span className="bracket right">)</span>
    </div>
  );
}
