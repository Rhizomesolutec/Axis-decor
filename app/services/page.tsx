import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Media } from "@/components/Media";
import { TextLink } from "@/components/ButtonLink";
import { advantages, images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "GRC, GRP, domes, cladding, columns, arches, mashrabiya, cornices, exterior pots, and custom architectural elements.",
};

const chapters = [
  {
    index: "01",
    title: "GRC",
    summary: "Architectural concrete solutions",
    body: "Glassfibre reinforced concrete for cladding, columns, arches, cornices, handrails, mashrabiya, decorative panels, and exterior pots. Documented GRC work includes decorative wall cladding at Reem Central Park, Al Reem Island, Abu Dhabi, grey wall cladding at Nad Al Sheba, Dubai, and a decorative dome and wall cladding at the masjid in Silicon Oasis, Dubai.",
    image: images.hero2,
    alt: "Textured white GRC wall cladding at Reem Central Park, Al Reem Island, Abu Dhabi",
    objectPosition: "32% center",
    fit: "cover" as const,
    caption: "Reem Central Park, Abu Dhabi",
  },
  {
    index: "02",
    title: "GRP",
    summary: "Lightweight architectural elements",
    body: "Glass reinforced plastic for domes, A/C grills, and other lightweight elements. The GRP A/C grill at Al Habtoor City, Dubai, was carried out for Al Habtoor Group.",
    image: images.domePlateAlt,
    alt: "Brochure plate of GRP and GRC decorative domes, one with a gold finish",
    objectPosition: "center",
    fit: "contain" as const,
    caption: "GRP and GRC decorative domes",
  },
  {
    index: "03",
    title: "Domes",
    summary: "Architectural dome systems",
    body: "GRP and GRC decorative domes. These systems can reduce structural load compared with traditional heavier construction. The mosque at Falcon City, Dubai, includes a decorated dome interior.",
    image: images.mosqueDome,
    alt: "GRC interior dome at the mosque in Falcon City, Dubai",
    objectPosition: "center",
    fit: "cover" as const,
    caption: "Mosque, Falcon City, Dubai",
  },
  {
    index: "04",
    title: "Cladding",
    summary: "Decorative architectural surfaces",
    body: "GRC decorative wall cladding panels, including the textured, geometric, and wave-pattern surfaces at Reem Central Park for Aldar Properties.",
    image: images.hero4,
    alt: "Wave-pattern GRC cladding at Reem Central Park, Al Reem Island, Abu Dhabi",
    objectPosition: "58% 40%",
    fit: "cover" as const,
    caption: "Reem Central Park, Abu Dhabi",
  },
  {
    index: "05",
    title: "Custom elements",
    summary: "Bespoke architectural solutions",
    body: "Pieces developed for the building: ornamental interiors, arches, mashrabiya, cornices, and finishes such as GRC with gold paint at Zabeel Palace, Dubai.",
    image: images.mosqueInterior,
    alt: "Ornamental arches and geometric decorative panels at the masjid in Silicon Oasis, Dubai",
    objectPosition: "center",
    fit: "cover" as const,
    caption: "Masjid, Silicon Oasis, Dubai",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-wrap pb-12 pt-10 md:pt-16">
        <p className="text-[0.72rem] font-medium tracking-[0.18em] text-stone uppercase">
          What we make
        </p>
        <h1 className="display mt-4 max-w-4xl text-[3rem] text-ink sm:text-6xl lg:text-7xl">
          Services
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
          GRC, GRP, and the architectural elements formed from them: domes,
          cladding, columns, arches, and custom decoration.
        </p>
      </section>

      <div className="border-t border-line">
        {chapters.map((chapter, index) => {
          const reversed = index % 2 === 1;
          return (
            <section key={chapter.title} className="border-b border-line">
              <div className="page-wrap grid items-center gap-8 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
                <div className={reversed ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5"}>
                  <p className="font-serif text-xl text-ink">{chapter.index}</p>
                  <h2 className="display mt-3 text-[2.6rem] text-ink sm:text-5xl">{chapter.title}</h2>
                  <p className="mt-3 text-sm text-stone">{chapter.summary}</p>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-stone">{chapter.body}</p>
                </div>
                <figure className={reversed ? "lg:col-span-6 lg:col-start-1 lg:row-start-1" : "lg:col-span-6 lg:col-start-7"}>
                  <div
                    className={`relative overflow-hidden bg-sand ${
                      chapter.fit === "contain" ? "aspect-[3/4]" : "aspect-[4/5] sm:aspect-[5/4]"
                    }`}
                  >
                    <Media
                      src={chapter.image}
                      alt={chapter.alt}
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      fit={chapter.fit}
                      objectPosition={chapter.objectPosition}
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-stone">{chapter.caption}</figcaption>
                </figure>
              </div>
            </section>
          );
        })}
      </div>

      <section className="page-wrap py-16 md:py-24">
        <h2 className="display text-[2.4rem] text-ink sm:text-5xl">Material notes</h2>
        <dl className="mt-10 grid gap-8 md:grid-cols-2">
          {advantages.map((item) => (
            <div key={item.index} className="border-t border-line pt-5">
              <dt className="font-serif text-2xl text-ink">{item.title}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-stone">{item.body}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-12">
          <TextLink href="/products">View applications</TextLink>
        </div>
      </section>

      <CTASection />
    </>
  );
}
