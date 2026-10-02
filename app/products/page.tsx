import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ExteriorPots } from "@/components/ExteriorPots";
import { Media } from "@/components/Media";
import { ProductGrid } from "@/components/ProductCard";
import {
  exteriorDecor,
  grcApplications,
  grpApplications,
  images,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "GRC and GRP applications: domes, wall panels, columns, arches, mashrabiya, cornices, exterior pots, and lightweight architectural elements.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-wrap pb-12 pt-10 md:pt-16">
        <p className="text-[0.72rem] font-medium tracking-[0.18em] text-stone uppercase">
          Catalogue
        </p>
        <h1 className="display mt-4 text-[3rem] text-ink sm:text-6xl lg:text-7xl">
          Applications
        </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
            GRC, GRP, and exterior architectural décor.
          </p>
      </section>

      <section className="page-wrap pb-4" aria-label="Product photographs">
        <ProductGrid />
      </section>

      <section className="page-wrap pt-16 md:pt-24">
        <figure>
          <div className="relative aspect-[16/10] overflow-hidden bg-sand">
            <Media
              src={images.hero1}
              alt="Reem Central Park at Al Reem Island, Abu Dhabi, with pale GRC cladding and palms"
              sizes="(min-width: 1280px) 1200px, 100vw"
              objectPosition="68% 55%"
            />
          </div>
          <figcaption className="mt-3 flex justify-between gap-4 text-sm text-stone">
            <span>GRC decorative wall cladding</span>
            <span>Reem Central Park, Abu Dhabi</span>
          </figcaption>
        </figure>
      </section>

      <section className="page-wrap grid gap-12 py-16 md:py-24 lg:grid-cols-12" aria-labelledby="grc-heading">
        <div className="lg:col-span-4">
          <h2 id="grc-heading" className="display text-[3.2rem] text-ink sm:text-6xl">
            GRC
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone">
            Glassfibre reinforced concrete. Architectural elements for facades,
            interiors, and landscape.
          </p>
        </div>
        <ul className="divide-y divide-line border-y border-line lg:col-span-7 lg:col-start-6">
          {grcApplications.map((item) => (
            <li key={item.name} className="grid gap-1 py-5 sm:grid-cols-5 sm:gap-6">
              <p className="font-serif text-2xl text-ink sm:col-span-2">{item.name}</p>
              <p className="text-sm leading-relaxed text-stone sm:col-span-3 sm:pt-2">{item.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="page-wrap grid gap-6 pb-8 md:grid-cols-12">
        <figure className="md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden bg-sand">
            <Media
              src={images.columns}
              alt="Ornamental columns supplied as a GRC and GRG reference"
              sizes="(min-width: 768px) 36vw, 100vw"
              objectPosition="center"
            />
          </div>
          <figcaption className="mt-3 text-sm text-stone">GRC & GRG columns</figcaption>
        </figure>
        <figure className="md:col-span-6 md:col-start-7 md:mt-20">
          <div className="relative aspect-[16/9] overflow-hidden bg-sand">
            <Media
              src={images.habtoor}
              alt="Bright interior with fluted white columns, cornices, and a curved stair at Al Habtoor City, Dubai"
              sizes="(min-width: 768px) 42vw, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm text-stone">
            Al Habtoor City, Dubai · GRG column cladding and GRP A/C grill
          </figcaption>
        </figure>
      </section>

      <section className="page-wrap py-12 md:py-16">
        <figure className="mx-auto max-w-3xl">
          <div className="relative aspect-[3/4] bg-sand">
            <Media
              src={images.domePlate}
              alt="Brochure plate of ribbed and patterned GRP and GRC decorative domes"
              sizes="(min-width: 768px) 720px, 100vw"
              fit="contain"
            />
          </div>
        </figure>
      </section>

      <section className="bg-paper" aria-labelledby="grp-heading">
        <div className="page-wrap grid items-center gap-10 py-16 md:py-24 lg:grid-cols-12">
          <figure className="lg:col-span-5">
            <div className="relative aspect-[3/4] bg-sand">
              <Media
                src={images.domePlateAlt}
                alt="Brochure plate of GRP and GRC decorative domes, one with a gold finish"
                sizes="(min-width: 1024px) 38vw, 100vw"
                fit="contain"
              />
            </div>
          </figure>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 id="grp-heading" className="display text-[3.2rem] text-ink sm:text-6xl">
              GRP
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
              Glass reinforced plastic for lighter domes, ventilation components,
              and architectural elements.
            </p>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {grpApplications.map((item) => (
                <li key={item.name} className="py-5">
                  <p className="font-serif text-2xl text-ink">{item.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{item.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <h2 className="display text-[2.5rem] text-ink sm:text-5xl">
            Exterior architectural décor
          </h2>
          <ul className="mt-8 space-y-3 text-base text-ink">
            {exteriorDecor.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <figure className="md:col-span-6 md:col-start-7">
          <div className="relative aspect-[16/9] overflow-hidden bg-sand">
            <Media
              src={images.mosqueInterior}
              alt="Ornamental arches and geometric decorative panels at the masjid in Silicon Oasis, Dubai"
              sizes="(min-width: 768px) 48vw, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm text-stone">
            GRC decorative dome and wall cladding · Masjid, Silicon Oasis, Dubai
          </figcaption>
        </figure>
      </section>

      <ExteriorPots variant="catalogue" />
      <CTASection body="Tell us the element, the finish, and where it will be installed." />
    </>
  );
}
