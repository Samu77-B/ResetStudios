"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef } from "react";

type ParallaxImageProps = Omit<ImageProps, "fill"> & {
  /** How strong the parallax shift is (px at extremes). Default 48 */
  intensity?: number;
  className?: string;
  imageClassName?: string;
};

export function ParallaxImage({
  intensity = 48,
  className = "",
  imageClassName = "",
  alt,
  ...imageProps
}: ParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!frame || !media) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let ticking = false;

    const update = () => {
      const rect = frame.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      // -1 when below viewport, 0 centered, 1 when above
      const progress =
        (viewH / 2 - (rect.top + rect.height / 2)) / (viewH / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      media.style.transform = `translate3d(0, ${clamped * intensity}px, 0) scale(1.12)`;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [intensity]);

  return (
    <div ref={frameRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        ref={mediaRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translate3d(0, 0, 0) scale(1.12)" }}
      >
        <Image
          {...imageProps}
          alt={alt}
          fill
          className={`object-cover ${imageClassName}`}
        />
      </div>
    </div>
  );
}
