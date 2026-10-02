import { TextLink } from "@/components/ButtonLink";
import { ProjectCard } from "@/components/ProjectCard";
import { getProject } from "@/lib/content";

const featured = [
  { id: "habtoor", aspect: "aspect-[16/9]", className: "lg:col-span-7" },
  { id: "silicon-oasis", aspect: "aspect-[16/9]", className: "lg:col-span-5 lg:mt-20" },
  { id: "gypsum-ceiling", aspect: "aspect-[16/9]", className: "lg:col-span-4" },
  { id: "grc-interior-dome", aspect: "aspect-[16/9]", className: "lg:col-span-4 lg:mt-12" },
  { id: "nad-al-sheba", aspect: "aspect-[16/9]", className: "lg:col-span-4" },
  { id: "mosque-exterior", aspect: "aspect-[16/9]", className: "lg:col-span-6" },
  { id: "arched-courtyard", aspect: "aspect-[16/9]", className: "lg:col-span-6 lg:mt-16" },
] as const;

export function FeaturedProjects() {
  return (
    <section className="page-wrap py-20 md:py-28" aria-labelledby="featured-heading">
      <div className="flex flex-col gap-8 border-t border-line pt-12 sm:flex-row sm:items-end sm:justify-between md:pt-16">
        <div>
          <p className="text-[0.72rem] font-medium tracking-[0.18em] text-stone uppercase">
            Portfolio
          </p>
          <h2 id="featured-heading" className="display mt-4 text-[clamp(2.15rem,4.6vw,3.75rem)] text-ink">
            Selected work
          </h2>
        </div>
        <TextLink href="/projects">View All Projects</TextLink>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-12">
        {featured.map((item) => (
          <div key={item.id} className={item.className}>
            <ProjectCard
              project={getProject(item.id)}
              linked
              aspect={item.aspect}
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
