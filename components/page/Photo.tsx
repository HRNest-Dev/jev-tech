import Image from "next/image";
import { images, type ImageKey } from "@/content/images";
import { cn } from "@/lib/cn";

type PhotoProps = {
  image: ImageKey;
  /** Tailwind aspect class, e.g. "aspect-[16/9]" */
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Override the registry alt text; pass "" for purely decorative use. */
  alt?: string;
};

export default function Photo({
  image,
  aspect = "aspect-[3/2]",
  sizes = "(min-width: 1280px) 1200px, 100vw",
  priority,
  className,
  alt,
}: PhotoProps) {
  const img = images[image];
  return (
    <div className={cn("reveal relative overflow-hidden rounded-3xl bg-surface-strong", aspect, className)}>
      <Image
        src={img.src}
        alt={alt ?? img.alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className="object-cover"
      />
    </div>
  );
}
