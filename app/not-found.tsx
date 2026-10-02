import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="page-wrap py-24 md:py-36">
      <p className="text-[0.72rem] font-medium tracking-[0.18em] text-stone uppercase">404</p>
      <h1 className="display mt-4 text-[3rem] text-ink sm:text-6xl">This page is not available.</h1>
      <div className="mt-10">
        <ButtonLink href="/">Return home</ButtonLink>
      </div>
    </section>
  );
}
