import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Axis Decor & International L.L.C. in Oman, the UAE, and India. Head office: PC 111, Ruwi, Muscat. CR 1631879.",
};

export default function ContactPage() {
  return (
    <section className="page-wrap grid gap-14 pb-24 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-16 lg:pb-32">
      <div className="lg:col-span-6">
        <p className="text-[0.72rem] font-medium tracking-[0.18em] text-stone uppercase">
          Get in touch
        </p>
        <h1 className="display mt-4 text-[3rem] text-ink sm:text-6xl lg:text-[5.2rem]">
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
              Mobile
            </dt>
            <dd className="mt-2 space-y-2">
              {site.mobiles.map((item) => (
                <p key={item.href}>
                  <a className="text-lg text-ink hover:text-stone" href={item.href}>
                    <span className="text-stone">{item.label}</span> {item.number}
                  </a>
                </p>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-[0.72rem] font-medium tracking-[0.16em] text-stone uppercase">
              Head office
            </dt>
            <dd className="mt-2 space-y-1 text-lg text-ink">
              <p>{site.headOffice}</p>
              <p>CR: {site.cr}</p>
              <p>{site.address}</p>
            </dd>
          </div>
          <div>
            <dt className="text-[0.72rem] font-medium tracking-[0.16em] text-stone uppercase">
              Regional presence
            </dt>
            <dd className="mt-2 text-lg text-ink">{site.regions}</dd>
          </div>
        </dl>
      </div>

      <div className="lg:col-span-5 lg:col-start-8">
        <ContactForm />
      </div>
    </section>
  );
}
