import { cn } from "@/lib/utils";
import Image from "next/image";

export function OptionsBand({
  title,
  images,
}: {
  title: string;
  images: { src: string; alt: string; description: string }[];
}) {
  return (
    <div className="mx-auto max-w-6xl">
      <h3 className="text-center text-2xl font-semibold">{title}</h3>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className={cn(
              "w-full min-w-[200px] flex-1 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15 sm:max-w-[calc(50%-0.75rem)]",
              images.length > 4 ? "lg:max-w-[calc(25%-1.125rem)]" : undefined
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={520}
              height={360}
              className="h-[170px] w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
