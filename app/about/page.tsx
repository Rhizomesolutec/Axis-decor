import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { commissions, images } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Axis Decor & International L.L.C. produces GRC and GRP architectural decoration for projects in Dubai, Abu Dhabi, and Sharjah.",
};

const places = ["Dubai", "Abu Dhabi", "Sharjah"] as const;

export default function AboutPage() {
  return (
    <>
      <section className="page-wrap grid gap-12 pb-16 pt-10 md:pt-16 lg:grid-cols-12 lg:items-end lg:pb-24">
        <div className="lg:col-span-7">
          <p className="text-[0.72rem] font-medium tracking-[0.18em] text-stone uppercase">
            The company
          </p>
          <h1 className="display mt-4 text-[3rem] text-ink sm:text-6xl lg:text-7xl">
            About Axis Decor
          </h1>
          <p className="mt-6 font-serif text-2xl leading-snug text-ink sm:text-3xl">
            Architectural solutions.
            <br />
            Designed with precision.
          </p>
        </div>
        <p className="max-w-md text-base leading-relaxed text-stone lg:col-span-4 lg:col-start-9">
          {site.name} works in architectural decoration: GRC, GRP, cladding,
          domes, columns, and custom elements. {site.slogan}.
        </p>
      </section>

      <section className="page-wrap pb-8">
        <div className="relative aspect-[16/9] overflow-hidden bg-sand md:aspect-[2/1]">
          <Media
            src={images.hero1}
            alt="Reem Central Park at Al Reem Island, Abu Dhabi, with pale GRC cladding and palms"
            sizes="(min-width: 1280px) 1200px, 100vw"
            objectPosition="70% 60%"
          />
        </div>
      </section>

      <section className="page-wrap grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="display text-[2.4rem] text-ink sm:text-5xl">
            Elements for facades, interiors, and outdoor space.
          </h2>
        </Reveal>
        <div className="space-y-5 text-base leading-relaxed text-stone lg:col-span-6 lg:col-start-7">
          <p>
            The company produces architectural elements for projects in the
            United Arab Emirates, including Dubai, Abu Dhabi, and Sharjah.
          </p>
          <p>
            Documented work includes Al Habtoor City for Al Habtoor Group,
            Zabeel Palace, Nad Al Sheba, and the masjid at Silicon Oasis in
            Dubai, and Reem Central Park at Al Reem Island, Abu Dhabi, for Aldar
            Properties. The portfolio also includes the mosque at Falcon City,
            Dubai, and villa projects.
          </p>
          <p>
            The range covers GRC and GRP: domes, decorative wall panels, column
            cladding, arches, mashrabiya, cornices, exterior pots, and pieces
            made for a specific building.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="page-wrap grid gap-8 py-12 sm:grid-cols-3 md:py-16">
          {places.map((place) => (
            <p key={place} className="font-serif text-3xl text-ink sm:text-4xl">
              {place}
            </p>
          ))}
        </div>
      </section>

      <section className="page-wrap grid items-start gap-10 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative aspect-[16/9] overflow-hidden bg-sand">
            <Media
              src={images.habtoor}
              alt="Bright interior with fluted white columns, cornices, and a curved stair at Al Habtoor City, Dubai"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
          </div>
          <p className="mt-3 text-sm text-stone">Al Habtoor City, Dubai</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
          <h2 className="display text-[2.3rem] text-ink sm:text-5xl">Documented commissions</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {commissions.map((item) => (
              <li key={`${item.title}-${item.scope}`} className="grid gap-1 py-5 sm:grid-cols-12 sm:gap-4">
                <p className="font-serif text-2xl text-ink sm:col-span-5">{item.title}</p>
                <p className="text-sm text-stone sm:col-span-3 sm:pt-2">{item.location || "—"}</p>
                <p className="text-sm text-stone sm:col-span-4 sm:pt-2">
                  {item.scope}
                  {"client" in item && item.client ? ` · ${item.client}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-wrap pb-8">
        <div className="grid gap-6 md:grid-cols-12">
          <figure className="md:col-span-7">
            <div className="relative aspect-[16/9] overflow-hidden bg-sand">
              <Media
                src={images.mosqueInterior}
                alt="Ornamental arches and geometric decorative panels at the masjid in Silicon Oasis, Dubai"
                sizes="(min-width: 768px) 58vw, 100vw"
              />
            </div>
            <figcaption className="mt-3 text-sm text-stone">Masjid, Silicon Oasis, Dubai</figcaption>
          </figure>
          <figure className="md:col-span-5 md:mt-16">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Media
                src={images.hero4}
                alt="Wave-pattern GRC cladding at Reem Central Park, Al Reem Island, Abu Dhabi"
                sizes="(min-width: 768px) 36vw, 100vw"
                objectPosition="58% 40%"
              />
            </div>
            <figcaption className="mt-3 text-sm text-stone">
              Reem Central Park, Al Reem Island
            </figcaption>
          </figure>
        </div>
      </section>

      <CTASection
        title="Talk to Axis Decor about a project."
        body="Share the building, the material, and the element you need."
      />
    </>
  );
}
