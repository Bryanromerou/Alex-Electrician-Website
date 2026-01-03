"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import OptionItem from "./OptionItem";
import { ImageOption } from "@/types/content";

export function OptionsBand({
  title,
  images,
}: {
  title: string;
  images: (ImageOption & { className?: string })[];
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="mx-auto max-w-6xl">
      <h3 className="text-center text-2xl font-semibold">{title}</h3>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {images.map((img, index) => (
          // <div
          //   key={index}
          //   className={cn(
          //     "w-full min-w-[200px] flex-1 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15 sm:max-w-[calc(50%-0.75rem)]",
          //     images.length > 4 ? "lg:max-w-[calc(25%-1.125rem)]" : undefined
          //   )}
          // >
          //   <Image
          //     src={img.src}
          //     alt={img.alt}
          //     width={520}
          //     height={360}
          //     className={cn("w-full object-cover", img.className)}
          //   />
          // </div>
          <OptionItem key={index} {...img} trigger={isMobile ? "click" : "hover"} />
        ))}
      </div>
    </div>
  );
}
