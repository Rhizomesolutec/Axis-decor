function Helios() {
  return (
    <span className="inline-flex items-center gap-2">
      <svg viewBox="0 0 28 28" className="h-[1.35rem] w-[1.35rem]" aria-hidden="true">
        <circle cx="14" cy="14" r="5.2" fill="currentColor" />
        <path
          d="M14 2.2v3.2M14 22.6v3.2M2.2 14h3.2M22.6 14h3.2M5.4 5.4l2.3 2.3M20.3 20.3l2.3 2.3M22.6 5.4l-2.3 2.3M7.7 20.3l-2.3 2.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-sans text-[0.72rem] font-semibold tracking-[0.2em]">HELIOS</span>
    </span>
  );
}

function Vantage() {
  return (
    <span className="inline-flex items-center gap-2">
      <svg viewBox="0 0 22 22" className="h-[1.15rem] w-[1.15rem]" aria-hidden="true">
        <path d="M11 1.5 21 20.5H1L11 1.5Z" fill="currentColor" />
        <path d="M11 8.2 15.2 16.5H6.8L11 8.2Z" className="fill-paper" />
      </svg>
      <span className="font-sans text-[0.72rem] font-semibold tracking-[0.18em]">VANTAGE</span>
    </span>
  );
}

function Northline() {
  return (
    <span className="inline-flex flex-col items-center leading-none">
      <span className="font-serif text-[1.35rem] tracking-[0.01em]">Northline</span>
      <span className="mt-1 h-px w-full bg-current" />
    </span>
  );
}

function Ashlar() {
  return (
    <span className="inline-flex items-center gap-2">
      <svg viewBox="0 0 26 22" className="h-[1.15rem] w-auto" aria-hidden="true">
        <path d="M1 1h11v9H1zM14 1h11v9H14zM4.5 12h17v9h-17z" fill="currentColor" />
      </svg>
      <span className="font-sans text-[0.72rem] font-semibold tracking-[0.18em]">ASHLAR</span>
    </span>
  );
}

function Forum() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="font-serif text-[1.45rem] leading-none tracking-[0.04em]">Forum</span>
      <span className="mb-2 h-1 w-1 rounded-full bg-current" />
    </span>
  );
}

function Solenne() {
  return (
    <span className="inline-flex items-center gap-2">
      <svg viewBox="0 0 22 22" className="h-[1.15rem] w-[1.15rem]" aria-hidden="true">
        <rect x="1" y="1" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 16.5 11 5.5l5 11" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <span className="font-sans text-[0.72rem] font-semibold tracking-[0.16em]">SOLENNE</span>
    </span>
  );
}

const logos = [
  { id: "helios", node: <Helios /> },
  { id: "vantage", node: <Vantage /> },
  { id: "northline", node: <Northline /> },
  { id: "ashlar", node: <Ashlar /> },
  { id: "forum", node: <Forum /> },
  { id: "solenne", node: <Solenne /> },
];

export function ClientStrip() {
  return (
    <section className="border-t border-line bg-ivory" aria-label="Trusted by">
      <div className="page-wrap py-14 md:py-16">
        <p className="text-center text-[0.68rem] font-medium tracking-[0.22em] text-stone uppercase">
          Trusted by
        </p>
        <ul className="mt-7 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8">
          {logos.map((logo) => (
            <li key={logo.id} className="flex h-10 items-center justify-center text-ink/80">
              {logo.node}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
