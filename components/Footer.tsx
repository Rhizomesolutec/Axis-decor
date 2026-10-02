import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="page-wrap grid grid-cols-12 items-start gap-x-3 gap-y-8 py-12 sm:gap-x-6 md:gap-12 md:py-20">
        <div className="col-span-5">
          <Logo className="h-16 sm:h-24 md:h-28" />
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-stone sm:mt-6 sm:text-sm">
            {site.slogan}
          </p>
        </div>

        <nav className="col-span-3" aria-label="Footer">
          <p className="text-[0.62rem] font-medium tracking-[0.14em] text-stone uppercase sm:text-[0.72rem] sm:tracking-[0.18em]">
            Navigation
          </p>
          <ul className="mt-3 space-y-2 sm:mt-5 sm:space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-xs text-ink hover:text-stone sm:text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-4">
          <p className="text-[0.62rem] font-medium tracking-[0.14em] text-stone uppercase sm:text-[0.72rem] sm:tracking-[0.18em]">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-xs sm:mt-5 sm:space-y-3 sm:text-sm">
            <li>
              <a className="text-ink hover:text-stone" href={site.emailHref}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="break-all text-ink hover:text-stone sm:break-normal" href={site.phoneHref}>
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="page-wrap flex items-center justify-between gap-3 py-5 text-xs text-stone sm:py-6 sm:text-sm">
          <p>© 2026 {site.name}</p>
          <p className="shrink-0">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
