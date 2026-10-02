"use client";

import { useState } from "react";
import { Media } from "@/components/Media";
import { expertise } from "@/lib/content";

export function ServiceShowcase() {
  const [active, setActive] = useState(expertise[0].id);

  return (
    <section className="bg-paper" aria-labelledby="expertise-heading">
      <div className="page-wrap py-20 md:py-28">
        <p className="text-[0.72rem] font-medium tracking-[0.18em] text-stone uppercase">
          Capabilities
        </p>
        <div className="mt-8 grid items-start gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <h2 id="expertise-heading" className="display text-[clamp(2.15rem,4.6vw,3.75rem)] text-ink">
              Our expertise
            </h2>
            <ul className="mt-8 border-b border-line lg:mt-12">
              {expertise.map((item) => {
                const selected = item.id === active;
                return (
                  <li key={item.id} className="border-t border-line">
                    <button
                      type="button"
                      aria-pressed={selected}
                      onMouseEnter={() => setActive(item.id)}
                      onFocus={() => setActive(item.id)}
                      onClick={() => setActive(item.id)}
                      className="w-full py-6 text-left sm:py-7"
                    >
                      <span className="flex items-baseline gap-4 sm:gap-6">
                        <span className="w-8 shrink-0 font-serif text-lg text-ink">{item.index}</span>
                        <span>
                          <span
                            className={`display block text-[2.1rem] transition-colors duration-300 sm:text-4xl ${
                              selected ? "text-ink" : "text-stone"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="mt-2 block text-sm text-stone">{item.summary}</span>
                          <span
                            className={`block overflow-hidden text-sm leading-relaxed text-stone transition-all duration-500 ${
                              selected ? "mt-3 max-h-28 opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            {item.detail}
                          </span>
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand lg:sticky lg:top-32">
              {expertise.map((item) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    item.id === active ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                  aria-hidden={item.id !== active}
                >
                  <Media
                    src={item.image}
                    alt={item.alt}
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    fit={item.fit ?? "cover"}
                    objectPosition={item.objectPosition}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
