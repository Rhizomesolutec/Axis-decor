import { Reveal } from "@/components/Reveal";
import { advantages } from "@/lib/content";

export function MaterialAdvantages() {
  return (
    <section className="bg-paper" aria-labelledby="materials-heading">
      <div className="page-wrap py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-medium tracking-[0.18em] text-stone uppercase">
            Materials
          </p>
          <h2 id="materials-heading" className="display mt-4 text-[clamp(2.15rem,4.6vw,3.75rem)] text-ink">
            Why GRC and GRP
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone">
            Qualities described for GRC and GRP architectural systems.
          </p>
        </div>

        <ol className="mt-12 border-t border-line md:mt-16">
          {advantages.map((item, index) => (
            <li key={item.index} className="border-b border-line">
              <Reveal delay={index * 0.04}>
                <div className="grid gap-4 py-8 md:grid-cols-12 md:items-start md:py-12">
                  <p className="font-serif text-2xl text-ink md:col-span-1">{item.index}</p>
                  <h3 className="display text-[2rem] text-ink md:col-span-4 md:text-[2.6rem]">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-stone md:col-span-6 md:col-start-7">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
