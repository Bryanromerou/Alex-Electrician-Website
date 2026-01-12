"use client";

import { useState } from "react";
import { ImageOption } from "@/types/content";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface OptionItemProps extends ImageOption {
  className?: string;
  imageClassName?: string;
  isMobile?: boolean;
}

export default function OptionItem({
  title,
  imageSrc,
  imageAlt,
  description,
  className,
  imageClassName,
  isMobile,
}: OptionItemProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  const onMouseEnter = () => {
    setShowOverlay(true);
  };
  const onMouseLeave = () => {
    setShowOverlay(false);
  };

  return (
    <div
      className={cn(
        "w-full min-w-[270px] flex-1 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15 sm:max-w-[calc(33.333%-1rem)] relative",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="button"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={cn("object-cover", imageClassName)}
        />
      </div>
      <div
        className={cn(
          "absolute inset-0 bg-white/80 opacity-0 transition-opacity duration-300 p-4",
          showOverlay && !isMobile && "opacity-100"
        )}
      >
        <h3 className="text-xl font-bold text-brand-primary">{title}</h3>
        <p className="text-black/80 text-sm">{description}</p>
      </div>
      {isMobile && (
        <div className="bg-white/80 p-4 h-full">
          <h3 className="text-xl font-bold text-brand-primary">{title}</h3>
          <p className="text-black/80 text-sm">{description}</p>
        </div>
      )}
    </div>
  );
}
