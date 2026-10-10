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
              <a className="flex items-start gap-2 text-ink hover:text-stone" href={site.emailHref}>
                <MailIcon />
                <span className="min-w-0 break-all sm:break-normal">{site.email}</span>
              </a>
            </li>
            {site.mobiles.map((item) => (
              <li key={item.href}>
                <a className="flex items-start gap-2 text-ink hover:text-stone" href={item.href}>
                  <PhoneIcon />
                  <span className="min-w-0 break-all sm:break-normal">
                    {item.label} {item.number}
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2 text-ink">
              <PinIcon />
              <span className="min-w-0">
                Head office, {site.headOffice}
                <span className="mt-1 block">CR: {site.cr}</span>
                <span className="mt-1 block">{site.address}</span>
              </span>
            </li>
            <li className="text-ink">{site.regions}</li>
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

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 sm:size-4">
      <rect x="3" y="5" width="18" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 sm:size-4">
      <path
        d="M8.5 4.5h2l1.2 3-1.6 1a12 12 0 0 0 5.4 5.4l1-1.6 3 1.2v2A1.5 1.5 0 0 1 18 17 14 14 0 0 1 7 6a1.5 1.5 0 0 1 1.5-1.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 sm:size-4">
      <path
        d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
