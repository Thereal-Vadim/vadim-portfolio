"use client";

import { useState } from "react";

type WorkShotProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  label?: string;
  variant?: "hero" | "phone" | "frame";
};

export function WorkShot({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  label,
  variant = "frame",
}: WorkShotProps) {
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const hint = label ?? src.replace("/images/projects/", "");

  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={ready ? alt : ""}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={ready ? className : "work-page-shot-probe"}
      onLoad={() => setReady(true)}
      onError={() => setFailed(true)}
    />
  );

  if (ready) {
    return image;
  }

  if (variant === "hero") {
    return failed ? null : image;
  }

  return (
    <>
      {failed ? null : image}
      <div className={`work-page-placeholder work-page-placeholder--${variant}`} aria-hidden="true">
        <p>{hint}</p>
      </div>
    </>
  );
}
