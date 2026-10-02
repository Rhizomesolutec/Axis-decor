import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProjectGrid } from "@/components/ProjectGrid";
import { commissions, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work including Reem Central Park in Abu Dhabi, Al Habtoor City and Zabeel Palace in Dubai, and mosque projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-wrap pb-12 pt-10 md:pt-16">
        <p className="text-[0.72rem] font-medium tracking-[0.18em] text-stone uppercase">
          Portfolio
        </p>
        <h1 className="display mt-4 text-[3rem] text-ink sm:text-6xl lg:text-7xl">Our work</h1>
        <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
          Selected architectural projects and decorative solutions.
        </p>
      </section>

      <section className="page-wrap pb-20 md:pb-28">
        <ProjectGrid items={projects} />
      </section>

      <section className="border-t border-line bg-paper">
        <div className="page-wrap py-16 md:py-24">
          <h2 className="display text-[2.4rem] text-ink sm:text-5xl">Recorded scope</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-stone">
            Named work from the company material, including commissions shown
            above and scopes that do not have a separate photograph here.
          </p>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {commissions.map((item) => (
              <li
                key={`${item.title}-${item.scope}`}
                className="grid gap-1 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-4"
              >
                <p className="font-serif text-2xl text-ink sm:col-span-4">{item.title}</p>
                <p className="text-sm text-stone sm:col-span-3">{item.location || "—"}</p>
                <p className="text-sm text-ink sm:col-span-5">
                  {item.scope}
                  {"client" in item && item.client ? ` · Client: ${item.client}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Discuss a facade, a dome, or a single element."
        body="Share the location and the scope by email or phone."
      />
    </>
  );
}
