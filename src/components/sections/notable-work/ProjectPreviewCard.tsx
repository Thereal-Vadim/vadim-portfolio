"use client";

import Image from "next/image";
import { Caveat } from "next/font/google";
import { useMemo, useState } from "react";
import type { NotableWorkItem } from "@/data/notableWork";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-caveat",
});

type PreviewPosition = {
  x: number;
  y: number;
};

type ProjectPreviewCardProps = {
  item: NotableWorkItem;
  visible: boolean;
  followCursor?: boolean;
  position?: PreviewPosition | null;
};

const PREVIEW_WIDTH = 288;
const PREVIEW_HEIGHT = 250;
const PREVIEW_OFFSET_X = 28;
const PREVIEW_OFFSET_Y = -72;
const VIEWPORT_PADDING = 20;

function clampPreviewPosition(position: PreviewPosition) {
  if (typeof window === "undefined") {
    return { left: position.x + PREVIEW_OFFSET_X, top: position.y + PREVIEW_OFFSET_Y };
  }

  let left = position.x + PREVIEW_OFFSET_X;
  let top = position.y + PREVIEW_OFFSET_Y;

  if (left + PREVIEW_WIDTH > window.innerWidth - VIEWPORT_PADDING) {
    left = position.x - PREVIEW_WIDTH - PREVIEW_OFFSET_X;
  }

  if (top + PREVIEW_HEIGHT > window.innerHeight - VIEWPORT_PADDING) {
    top = window.innerHeight - PREVIEW_HEIGHT - VIEWPORT_PADDING;
  }

  if (top < VIEWPORT_PADDING) {
    top = VIEWPORT_PADDING;
  }

  if (left < VIEWPORT_PADDING) {
    left = VIEWPORT_PADDING;
  }

  return { left, top };
}

export function ProjectPreviewCard({
  item,
  visible,
  followCursor = false,
  position = null,
}: ProjectPreviewCardProps) {
  const [imageError, setImageError] = useState(false);
  const showImage = item.previewImage && !imageError;

  const style = useMemo(() => {
    if (!followCursor || !position) {
      return undefined;
    }

    const { left, top } = clampPreviewPosition(position);
    return { left, top };
  }, [followCursor, position]);

  return (
    <article
      className={`${caveat.variable} notable-preview${visible ? " notable-preview--visible" : ""}${
        followCursor ? " notable-preview--follow" : ""
      }`}
      style={style}
      aria-hidden={!visible}
    >
      <div className="notable-preview__card">
        <div className="notable-preview__media">
          {showImage ? (
            <Image
              key={item.previewImage}
              src={item.previewImage!}
              alt={`Preview of ${item.label}`}
              width={640}
              height={400}
              className="notable-preview__image"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="notable-preview__fallback" aria-hidden="true">
              <span className="notable-preview__fallback-label">{item.label}</span>
            </div>
          )}
        </div>
        {item.previewCaption ? (
          <p className="notable-preview__caption">{item.previewCaption}</p>
        ) : null}
      </div>
    </article>
  );
}
