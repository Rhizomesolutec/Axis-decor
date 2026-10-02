const clients = ["Al Habtoor Group", "Aldar Properties"] as const;

export function ClientStrip() {
  return (
    <section className="border-t border-line bg-ivory" aria-label="Trusted by">
      <div className="page-wrap py-8 sm:py-12 md:py-16">
        <p className="text-center text-[0.68rem] font-medium tracking-[0.22em] text-stone uppercase">
          Trusted by
        </p>
        <ul className="mt-6 flex flex-nowrap items-center justify-center gap-6 sm:mt-8 sm:gap-12">
          {clients.map((name) => (
            <li
              key={name}
              className="font-display text-[clamp(1.05rem,2.4vw,1.65rem)] leading-none text-ink/80"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
