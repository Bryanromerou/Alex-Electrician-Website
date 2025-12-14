"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { GalleryItem } from "@/types/content";
import { galleryItems } from "@/constants/gallery";

interface GalleryGridProps {
  images?: GalleryItem[];
  className?: string;
}

export function GalleryGrid({ images = galleryItems, className }: GalleryGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3", className)}>
      {images.map((image) => (
        <div
          key={image.id}
          className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
