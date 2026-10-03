import type { ReactNode } from "react";
import Link from "next/link";

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "line";
}) {
  const classes =
    variant === "solid"
      ? "inline-flex min-h-12 items-center justify-center gap-3 bg-ink px-6 text-sm font-medium text-ivory transition-colors duration-300 hover:bg-[#45185c]"
      : "inline-flex min-h-12 items-center justify-center gap-3 border border-ink/20 px-6 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink";

  return (
    <Link href={href} className={classes}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
    >
      <span className="border-b border-ink/25 pb-0.5 transition-colors duration-300 group-hover:border-bronze">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
