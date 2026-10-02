"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { navItems } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const onHero = pathname === "/" && !scrolled && !open;
  const dialogRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuPath(null);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("a, button"));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const menuButton = menuButtonRef.current;
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      menuButton?.focus();
    };
  }, [open]);

  const linkTone = onHero
    ? "text-white/75 hover:text-white"
    : "text-stone hover:text-ink";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-500 ${
          onHero
            ? "border-transparent bg-transparent"
            : "border-line bg-white/92 shadow-[0_1px_0_rgba(23,23,23,0.03)] backdrop-blur-md"
        }`}
      >
        <div
          className="page-wrap flex h-[var(--header-h)] items-center justify-between gap-8"
          inert={open ? true : undefined}
        >
          <Logo
            priority
            variant={onHero ? "light" : "color"}
            className="h-11 md:h-[3.35rem]"
          />

          <nav className="hidden items-center gap-7 xl:gap-9 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-[0.78rem] font-medium tracking-[0.14em] transition-colors duration-500 ${
                    active ? (onHero ? "text-white" : "text-ink") : linkTone
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`group inline-flex min-h-11 items-center gap-2 text-[0.78rem] font-medium tracking-[0.12em] transition-colors duration-500 ${
                onHero ? "text-white" : "text-ink"
              }`}
            >
              Get in Touch
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className={`inline-flex h-11 items-center gap-3 lg:hidden ${onHero ? "text-white" : "text-ink"}`}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setMenuPath(pathname)}
          >
            <span className="text-[0.78rem] font-medium tracking-[0.16em]">Menu</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-px w-full ${onHero ? "bg-white" : "bg-ink"}`} />
              <span className={`h-px w-3.5 ${onHero ? "bg-white" : "bg-ink"}`} />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={dialogRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col bg-ivory lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            <div className="page-wrap flex h-[var(--header-h)] items-center justify-between">
              <Logo className="h-11" />
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex min-h-11 items-center gap-3 text-ink"
                onClick={() => setMenuPath(null)}
              >
                <span className="text-[0.78rem] font-medium tracking-[0.16em]">Close</span>
                <span className="relative h-3 w-3" aria-hidden="true">
                  <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 rotate-45 bg-ink" />
                  <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 -rotate-45 bg-ink" />
                </span>
              </button>
            </div>
            <nav className="page-wrap flex flex-1 flex-col justify-center pb-16" aria-label="Mobile">
              {navItems.map((item, index) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.08 + index * 0.06, ease }}
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className="display block border-b border-line py-3 text-[2.7rem] text-ink"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.42, ease }}
              >
                <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.12em] text-ink">
                  Get in Touch
                  <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
