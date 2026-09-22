"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import type { NotableWorkItem } from "@/data/notableWork";
import { ProjectPreviewCard } from "@/components/sections/notable-work/ProjectPreviewCard";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function pointerFromTarget(target: EventTarget & { getBoundingClientRect: () => DOMRect }) {
  const rect = target.getBoundingClientRect();
  return { x: rect.right, y: rect.top + rect.height / 2 };
}

function itemHasPreview(item: NotableWorkItem) {
  return Boolean(item.previewImage || item.previewCaption);
}

type NotablePreviewListProps = {
  items: NotableWorkItem[];
  notableLabel?: string;
  note?: string;
  variant?: "default" | "inline";
};

export function NotablePreviewList({
  items,
  notableLabel,
  note,
  variant = "default",
}: NotablePreviewListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const [followCursor, setFollowCursor] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateFollow = () => setFollowCursor(mediaQuery.matches);
    updateFollow();
    mediaQuery.addEventListener("change", updateFollow);

    return () => mediaQuery.removeEventListener("change", updateFollow);
  }, []);

  const activeItem = activeIndex !== null ? items[activeIndex] : null;
  const showPreview = Boolean(activeItem && itemHasPreview(activeItem));

  const handleActivate = (
    index: number,
    target: EventTarget & { getBoundingClientRect: () => DOMRect },
    event?: React.MouseEvent,
  ) => {
    setActiveIndex(index);
    setCursor(event ? { x: event.clientX, y: event.clientY } : pointerFromTarget(target));
  };

  const handlePointerMove = (event: React.MouseEvent) => {
    if (!followCursor || activeIndex === null) {
      return;
    }
    setCursor({ x: event.clientX, y: event.clientY });
  };

  const handleLeave = () => {
    setActiveIndex(null);
    setCursor(null);
  };

  const previewCard =
    showPreview && activeItem ? (
      <ProjectPreviewCard
        item={activeItem}
        visible={activeIndex !== null}
        followCursor={followCursor}
        position={cursor}
      />
    ) : null;

  return (
    <>
      <div
        className={`notable-side-area${variant === "inline" ? " notable-side-area--compact" : ""}`}
        onMouseLeave={handleLeave}
        onMouseMove={handlePointerMove}
      >
        {!followCursor ? previewCard : null}

        <div className={`notable-side${variant === "inline" ? " notable-side--inline" : ""}`}>
          {notableLabel ? <p className="notable-side__label">{notableLabel}</p> : null}
          <ul
            className={`notable-side__list${activeIndex !== null && showPreview ? " notable-side__list--dimmed" : ""}`}
          >
            {items.map((item, index) => (
              <li
                key={item.label}
                className={activeIndex === index ? "notable-side__item--active" : undefined}
              >
                {item.href ? (
                  isExternalHref(item.href) ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`notable-side__link${activeIndex === index ? " notable-side__link--active" : ""}`}
                      onMouseEnter={(event) => handleActivate(index, event.currentTarget, event)}
                      onFocus={(event) => handleActivate(index, event.currentTarget)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`notable-side__link${activeIndex === index ? " notable-side__link--active" : ""}`}
                      onMouseEnter={(event) => handleActivate(index, event.currentTarget, event)}
                      onFocus={(event) => handleActivate(index, event.currentTarget)}
                    >
                      {item.label}
                    </Link>
                  )
                ) : (
                  <span
                    className={`notable-side__link${activeIndex === index ? " notable-side__link--active" : ""}`}
                    tabIndex={itemHasPreview(item) ? 0 : undefined}
                    onMouseEnter={(event) => handleActivate(index, event.currentTarget, event)}
                    onFocus={(event) => handleActivate(index, event.currentTarget)}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
          {note ? <p className="notable-side__note">{note}</p> : null}
        </div>
      </div>

      {mounted && followCursor && previewCard
        ? createPortal(previewCard, document.body)
        : null}
    </>
  );
}
