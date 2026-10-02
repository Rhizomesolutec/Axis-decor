import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  as?: "h1" | "h2";
}) {
  const Heading = as;

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-[0.72rem] font-medium tracking-[0.18em] text-stone uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="display mt-4 text-[2.5rem] text-ink sm:text-5xl lg:text-[3.6rem]">
        {title}
      </Heading>
      {children ? (
        <div className="mt-6 max-w-xl text-base leading-relaxed text-stone sm:text-[1.05rem]">
          {children}
        </div>
      ) : null}
    </div>
  );
}
