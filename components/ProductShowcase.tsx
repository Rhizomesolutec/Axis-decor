import { TextLink } from "@/components/ButtonLink";
import { ProductGrid } from "@/components/ProductCard";

export function ProductShowcase() {
  return (
    <section className="bg-sand" aria-labelledby="products-heading">
      <div className="page-wrap py-16 sm:py-20 md:py-28 xl:py-32">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="max-w-xl">
            <p className="text-[0.68rem] font-medium tracking-[0.22em] text-stone uppercase">
              The collection
            </p>
            <h2
              id="products-heading"
              className="display mt-3 text-[clamp(1.85rem,6vw,4rem)] text-ink sm:mt-4"
            >
              Planters and screens
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-stone sm:mt-5 sm:text-base">
              Architectural pots and geometric screens, shown as finished pieces.
            </p>
          </div>
          <TextLink href="/products">View products</TextLink>
        </div>

        <div className="mt-10 sm:mt-14 md:mt-16">
          <ProductGrid />
        </div>
      </div>
    </section>
  );
}
