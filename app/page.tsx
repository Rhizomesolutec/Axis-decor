import { ClientStrip } from "@/components/ClientStrip";
import { CTASection } from "@/components/CTASection";
import { ExteriorPots } from "@/components/ExteriorPots";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { MaterialAdvantages } from "@/components/MaterialAdvantages";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Media } from "@/components/Media";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { images } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <section className="bg-ivory py-16 md:py-24" aria-label="Mosque, Falcon City">
        <figure className="page-wrap">
          <div className="relative h-[min(62svh,560px)] overflow-hidden bg-sand md:h-[min(70svh,680px)]">
            <Media
              src={images.mosqueDome}
              alt="GRC interior dome at the mosque in Falcon City, Dubai"
              sizes="(min-width: 1280px) 1120px, 100vw"
              objectPosition="center"
            />
          </div>
          <figcaption className="mt-6 flex items-end justify-between gap-6 border-t border-line pt-5">
            <div>
              <p className="text-[0.68rem] font-medium tracking-[0.18em] text-stone uppercase">
                Selected project
              </p>
              <p className="mt-2 font-serif text-2xl leading-none text-ink md:text-[1.75rem]">
                Mosque, Falcon City
              </p>
            </div>
            <p className="pb-1 text-sm text-stone">Dubai</p>
          </figcaption>
        </figure>
      </section>
      <ServiceShowcase />
      <FeaturedProjects />
      <ProductShowcase />
      <MaterialAdvantages />
      <ExteriorPots />
      <ClientStrip />
      <CTASection />
    </>
  );
}
