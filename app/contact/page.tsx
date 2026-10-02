import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Axis Decor & International L.L.C. at info@axisdecor.co or +968 7137 6640.",
};

export default function ContactPage() {
  return (
    <section className="page-wrap grid gap-14 pb-24 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-16 lg:pb-32">
      <div className="lg:col-span-6">
        <h1 className="display text-[3rem] text-ink sm:text-6xl lg:text-[5.2rem]">
          Let&apos;s create
          <br />
          something
          <br />
          remarkable.
        </h1>
        <p className="mt-8 max-w-md text-base leading-relaxed text-stone sm:text-lg">
          Have an architectural or decorative project in mind? Let&apos;s start a
          conversation.
        </p>
        <dl className="mt-12 space-y-6 border-t border-line pt-8">
          <div>
            <dt className="text-[0.72rem] font-medium tracking-[0.16em] text-stone uppercase">
              Email
            </dt>
            <dd className="mt-2">
              <a className="text-lg text-ink hover:text-stone" href={site.emailHref}>
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[0.72rem] font-medium tracking-[0.16em] text-stone uppercase">
              Phone
            </dt>
            <dd className="mt-2">
              <a className="text-lg text-ink hover:text-stone" href={site.phoneHref}>
                {site.phone}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="lg:col-span-5 lg:col-start-8">
        <ContactForm />
      </div>
    </section>
  );
}
