"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Media } from "@/components/Media";

export function FadeGallery({
  frames,
  sizes,
  fit = "contain",
  objectPosition = "center",
  intrinsic = false,
}: {
  frames: { src: string; alt: string; width?: number; height?: number }[];
  sizes: string;
  fit?: "cover" | "contain";
  objectPosition?: string;
  intrinsic?: boolean;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || frames.length < 2) return;
    const timer = window.setTimeout(() => {
      setIndex((value) => (value + 1) % frames.length);
    }, 5200);
    return () => window.clearTimeout(timer);
  }, [reduce, index, frames.length]);

  if (intrinsic) {
    return (
      <div className="relative w-full">
        {frames.map((frame, frameIndex) => {
          const selected = frameIndex === index;
          return (
            <Image
              key={frame.src}
              src={frame.src}
              alt={selected ? frame.alt : ""}
              width={frame.width ?? 1280}
              height={frame.height ?? 960}
              sizes={sizes}
              className={`w-full transition-opacity duration-[2400ms] ease-in-out motion-reduce:transition-none ${
                selected ? "relative opacity-100" : "absolute inset-x-0 top-0 opacity-0"
              }`}
              aria-hidden={!selected}
            />
          );
        })}
      </div>
    );
  }

  return (
    <>
      {frames.map((frame, frameIndex) => {
        const selected = frameIndex === index;
        return (
          <div
            key={frame.src}
            className={`absolute inset-0 transition-opacity duration-[2400ms] ease-in-out motion-reduce:transition-none ${
              selected ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!selected}
          >
            <Media
              src={frame.src}
              alt={selected ? frame.alt : ""}
              sizes={sizes}
              fit={fit}
              objectPosition={objectPosition}
            />
          </div>
        );
      })}
    </>
  );
}
