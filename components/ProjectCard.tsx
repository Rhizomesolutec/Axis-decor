"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { Media } from "@/components/Media";
import { ImageReveal } from "@/components/Reveal";
import { frameClass, type Project } from "@/lib/content";

function FadingFrames({
  frames,
  sizes,
  fit,
  objectPosition,
}: {
  frames: { src: string; alt: string }[];
  sizes: string;
  fit: "cover" | "contain";
  objectPosition: string;
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
              className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        );
      })}
    </>
  );
}

export function ProjectCard({
  project,
  sizes,
  aspect,
  priority = false,
  linked = false,
  hrefId,
}: {
  project: Project;
  sizes: string;
  aspect?: string;
  priority?: boolean;
  linked?: boolean;
  hrefId?: string;
}) {
  const body = (
    <>
      <ImageReveal
        className={`relative overflow-hidden bg-sand ${aspect ?? frameClass(project.frame)}`}
      >
        {project.frames && project.frames.length > 1 ? (
          <FadingFrames
            frames={project.frames}
            sizes={sizes}
            fit={project.fit}
            objectPosition={project.objectPosition}
          />
        ) : (
          <Media
            src={project.image}
            alt={project.alt}
            sizes={sizes}
            priority={priority}
            fit={project.fit}
            objectPosition={project.objectPosition}
            className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        )}
      </ImageReveal>
      <div className="mt-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-[1.45rem] font-medium leading-tight tracking-[-0.02em] text-ink sm:text-[1.7rem]">
            {project.title}
          </h3>
          {project.location ? (
            <p className="text-[0.72rem] font-medium tracking-[0.12em] text-stone uppercase">
              {project.location}
            </p>
          ) : null}
        </div>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-stone">{project.scope}</p>
        {project.client ? (
          <p className="mt-1 text-sm text-stone">Client: {project.client}</p>
        ) : null}
        <span className="mt-4 block h-px w-8 bg-bronze transition-all duration-500 group-hover:w-14" />
      </div>
    </>
  );

  if (linked) {
    return (
      <article>
        <Link href={`/projects#${hrefId ?? project.id}`} className="group block">
          {body}
        </Link>
      </article>
    );
  }

  return (
    <article id={project.id} className="group scroll-mt-36">
      {body}
    </article>
  );
}
