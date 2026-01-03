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
      <div className="mt-10 flex flex-wrap justify-center gap-6 sm:flex-row flex-col">
        {images.map((img, index) => (
          <OptionItem key={index} {...img} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
}
