import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/content";

export function Logo({
  variant = "color",
  className = "h-12 md:h-14",
  priority = false,
}: {
  variant?: "color" | "light";
  className?: string;
  priority?: boolean;
}) {
  const light = variant === "light";

  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Axis Decor, home">
      <Image
        src={light ? images.logoLight : images.logo}
        alt=""
        width={1134}
        height={1200}
        priority={priority}
        sizes="96px"
        className={`${className} w-auto`}
      />
    </Link>
  );
}
