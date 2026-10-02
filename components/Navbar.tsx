"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { navItems } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const onHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkTone = onHero ? "text-white/75 hover:text-white" : "text-stone hover:text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-500 ${
        onHero
          ? "border-transparent bg-transparent"
          : "border-line bg-white/92 shadow-[0_1px_0_rgba(23,23,23,0.03)] backdrop-blur-md"
      }`}
    >
      <div className="page-wrap flex h-[var(--header-h)] items-center justify-between gap-3 sm:gap-6">
        <Logo
          priority
          variant={onHero ? "light" : "color"}
          className="h-9 sm:h-11 lg:h-[3.35rem]"
        />

        <nav
          className="flex min-w-0 items-center gap-x-2.5 overflow-x-auto sm:gap-x-4 lg:gap-7 xl:gap-9 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`shrink-0 text-[0.62rem] font-medium tracking-[0.08em] whitespace-nowrap transition-colors duration-500 sm:text-[0.72rem] sm:tracking-[0.12em] lg:text-[0.78rem] lg:tracking-[0.14em] ${
                  active ? (onHero ? "text-white" : "text-ink") : linkTone
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`group inline-flex shrink-0 items-center gap-1 text-[0.62rem] font-medium tracking-[0.08em] whitespace-nowrap transition-colors duration-500 sm:gap-2 sm:text-[0.72rem] sm:tracking-[0.12em] lg:min-h-11 lg:text-[0.78rem] ${
              onHero ? "text-white" : "text-ink"
            }`}
          >
            Get in Touch
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
