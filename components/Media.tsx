import Image from "next/image";

type MediaProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  objectPosition?: string;
  fit?: "cover" | "contain";
  className?: string;
};

export function Media({
  src,
  alt,
  sizes,
  priority = false,
  objectPosition = "center",
  fit = "cover",
  className = "",
}: MediaProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`${fit === "cover" ? "object-cover" : "object-contain"} ${className}`}
      style={{ objectPosition }}
    />
  );
}
