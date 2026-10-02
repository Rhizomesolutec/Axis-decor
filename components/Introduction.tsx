import { TextLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";

export function Introduction() {
  return (
    <section className="page-wrap">
      <div className="grid items-end gap-10 border-t border-line py-16 md:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <Reveal className="lg:col-span-7">
          <h2 className="display text-[clamp(2.15rem,4.6vw,3.75rem)] text-ink">
            We create
            <br />
            architectural elements
            <br />
            that define space.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
          <p className="text-base leading-relaxed text-stone sm:text-[1.05rem]">
            Axis Decor & International L.L.C. produces GRC and GRP architectural
            decoration for projects in the UAE, including Dubai, Abu Dhabi, and
            Sharjah. The work covers domes, cladding, columns, arches,
            mashrabiya, cornices, exterior pots, and custom elements.
          </p>
          <div className="mt-8">
            <TextLink href="/about">Discover Axis Decor</TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
