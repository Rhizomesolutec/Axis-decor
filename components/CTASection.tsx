import { ButtonLink } from "@/components/ButtonLink";

export function CTASection({
  eyebrow = "Enquiries",
  title = "Have an architectural project in mind?",
  body = "Domes, cladding, columns, and custom decorative elements for projects in the UAE.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="page-wrap border-t border-line py-20 md:py-28">
      <p className="text-[0.72rem] font-medium tracking-[0.18em] text-stone uppercase">
        {eyebrow}
      </p>
      <h2 className="display mt-4 max-w-3xl text-[2.7rem] text-ink sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      <p className="mt-6 max-w-md text-base leading-relaxed text-stone">{body}</p>
      <div className="mt-10">
        <ButtonLink href="/contact">Get in Touch</ButtonLink>
      </div>
    </section>
  );
}
