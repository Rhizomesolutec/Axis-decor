import { TextLink } from "@/components/ButtonLink";
import { potApplications } from "@/lib/site";

export function ExteriorPots({
  variant = "band",
}: {
  variant?: "band" | "catalogue";
}) {
  if (variant === "catalogue") {
    return (
      <section id="exterior-pots" className="scroll-mt-32 bg-sand">
        <div className="page-wrap py-20 md:py-32">
          <p className="text-[0.72rem] font-medium tracking-[0.18em] text-ink uppercase">
            Landscape
          </p>
          <h2 className="display mt-4 text-[3rem] text-ink sm:text-6xl lg:text-7xl">
            GRC
            <br />
            exterior
            <br />
            pots
          </h2>
          <p className="mt-8 max-w-md font-serif text-2xl leading-snug text-ink sm:text-3xl">
            Architectural landscaping for spaces that demand presence.
          </p>
          <ul className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
            {potApplications.map((item) => (
              <li key={item} className="py-4 text-base text-ink sm:py-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-sand" aria-labelledby="pots-heading">
      <div className="page-wrap grid grid-cols-12 items-end gap-x-4 gap-y-6 py-14 sm:gap-x-8 md:py-28">
        <h2
          id="pots-heading"
          className="display col-span-6 text-[clamp(1.45rem,4.2vw,4.5rem)] text-ink lg:text-7xl"
        >
          GRC
          <br />
          exterior
          <br />
          pots
        </h2>
        <div className="col-span-6 lg:col-span-5 lg:col-start-8">
          <p className="font-serif text-[0.95rem] leading-snug text-ink sm:text-2xl md:text-3xl">
            Architectural landscaping for spaces that demand presence.
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-0 text-[0.72rem] text-ink sm:mt-8 sm:grid-cols-2 sm:text-sm">
            {potApplications.map((item) => (
              <li key={item} className="border-t border-ink/15 py-1.5 sm:py-2">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 sm:mt-8">
            <TextLink href="/products#exterior-pots">View applications</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
