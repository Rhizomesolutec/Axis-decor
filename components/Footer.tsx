import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="page-wrap grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo className="h-24 md:h-28" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone">
            {site.slogan}
          </p>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <p className="text-[0.72rem] font-medium tracking-[0.18em] text-stone uppercase">
            Navigation
          </p>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink hover:text-stone">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="text-[0.72rem] font-medium tracking-[0.18em] text-stone uppercase">
            Contact
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a className="text-ink hover:text-stone" href={site.emailHref}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="text-ink hover:text-stone" href={site.phoneHref}>
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="page-wrap flex flex-col gap-2 py-6 text-sm text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
