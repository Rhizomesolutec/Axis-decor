import { Media } from "@/components/Media";
import { productPhotos } from "@/lib/content";

type ProductPhoto = (typeof productPhotos)[number];

export function ProductCard({ item }: { item: ProductPhoto }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_10px_24px_rgba(23,23,23,0.06)] transition-[transform,box-shadow] duration-500 ease-out sm:rounded-2xl md:hover:-translate-y-1 md:hover:shadow-[0_18px_36px_rgba(23,23,23,0.12)]">
      <div className="relative aspect-square overflow-hidden bg-ivory">
        <Media
          src={item.src}
          alt={item.alt}
          sizes="(min-width: 1280px) 14vw, (min-width: 768px) 28vw, 45vw"
          className="transition-transform duration-700 ease-out md:group-hover:scale-[1.04]"
        />
      </div>
      <div className="px-2.5 py-2.5 sm:px-3 sm:py-3">
        <p className="text-[0.58rem] font-medium tracking-[0.14em] text-stone uppercase sm:text-[0.62rem] sm:tracking-[0.16em]">
          {item.kind}
        </p>
        <h3 className="display mt-1 line-clamp-2 text-[0.95rem] leading-[1.15] text-ink sm:mt-1.5 sm:text-[1.05rem] md:text-[1.12rem]">
          {item.title}
        </h3>
      </div>
    </article>
  );
}

export function ProductGrid() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 xl:grid-cols-6 xl:gap-4">
      {productPhotos.map((item) => (
        <li key={item.src} className="min-w-0">
          <ProductCard item={item} />
        </li>
      ))}
    </ul>
  );
}
