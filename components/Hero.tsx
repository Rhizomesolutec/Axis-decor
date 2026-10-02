"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const slides = [
  {
    src: "/images/hero/cladding.jpg",
    alt: "White GRC facade with textured decorative wall cladding and palms",
    label: "GRC cladding",
  },
  {
    src: "/images/hero/dome.jpg",
    alt: "Cream GRP and GRC decorative dome against a clear sky",
    label: "Decorative domes",
  },
  {
    src: "/images/hero/columns.jpg",
    alt: "Bright interior with fluted white columns, cornices, and a curved stair",
    label: "Columns",
  },
  {
    src: "/images/hero/arches.jpg",
    alt: "Ornamental arches and geometric decorative panels in a bright interior",
    label: "Arches",
  },
] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const timer = window.setTimeout(() => {
      setIndex((value) => (value + 1) % slides.length);
    }, 6500);
    return () => window.clearTimeout(timer);
  }, [reduce, index]);

  return (
    <section
      className="relative -mt-[var(--header-h)] h-[100svh] min-h-[100svh] overflow-hidden bg-sand"
      aria-roledescription="carousel"
      aria-label="Architectural decoration"
    >
      <div className="absolute inset-0">
        {slides.map((slide, slideIndex) => {
          const selected = slideIndex === index;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-[2400ms] ease-in-out motion-reduce:transition-none ${
                selected ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!selected}
            >
              <Image
                src={slide.src}
                alt={selected ? slide.alt : ""}
                fill
                priority
                sizes="100vw"
                className={`object-cover transition-transform duration-[9000ms] ease-out motion-reduce:transition-none ${
                  selected ? "scale-[1.04]" : "scale-100"
                }`}
              />
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-black/[0.14]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.34)_0%,rgba(17,17,17,0.06)_24%,rgba(17,17,17,0.04)_52%,rgba(17,17,17,0.46)_100%)]" />

      <div className="page-wrap relative z-10 flex h-full flex-col justify-end pb-32 md:pb-36">
        <motion.h1
          className="max-w-[17rem] font-display text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.15] tracking-[-0.015em] text-white sm:max-w-[22rem] md:max-w-[26rem]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: reduce ? 0 : 0.35, ease }}
        >
          Architectural decoration redefined.
        </motion.h1>

        <motion.p
          className="mt-4 text-[0.68rem] font-medium tracking-[0.16em] text-white/75 uppercase"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: reduce ? 0 : 1.05, ease }}
        >
          GRC · GRP · Domes · Cladding · Custom elements
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap items-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: reduce ? 0 : 1.28, ease }}
        >
          <Link
            href="/projects"
            className="group inline-flex min-h-12 items-center gap-3 bg-white px-6 text-sm font-medium text-ink transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#f4f1ea]"
          >
            Explore Our Projects
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center border border-white/70 px-6 text-sm font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink"
          >
            Our Services
          </Link>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 md:bottom-8">
        <div className="page-wrap flex items-end justify-between gap-6">
          <button
            type="button"
            className="pointer-events-auto inline-flex flex-col items-start gap-2 text-[0.68rem] font-medium tracking-[0.2em] text-white/80 uppercase"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <span>Scroll</span>
            <span aria-hidden="true" className="hero-nudge">
              ↓
            </span>
          </button>
          <div className="pointer-events-auto text-right">
            <div className="relative h-4">
              {slides.map((slide, slideIndex) => (
                <p
                  key={slide.src}
                  className={`absolute inset-x-0 text-right text-[0.68rem] font-medium tracking-[0.14em] text-white uppercase transition-opacity duration-[2400ms] ease-in-out motion-reduce:transition-none ${
                    slideIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {slide.label}
                </p>
              ))}
            </div>
            <div className="mt-3 flex justify-end gap-2" role="group" aria-label="Hero images">
              {slides.map((slide, slideIndex) => {
                const selected = slideIndex === index;
                return (
                  <button
                    key={slide.src}
                    type="button"
                    aria-label={slide.label}
                    aria-pressed={selected}
                    onClick={() => setIndex(slideIndex)}
                    className="flex h-11 items-center px-1"
                  >
                    <span
                      className={`block h-px bg-white transition-all duration-500 ${
                        selected ? "w-10" : "w-5 opacity-45"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
