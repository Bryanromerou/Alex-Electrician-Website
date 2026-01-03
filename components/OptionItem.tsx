"use client";

import { useState } from "react";
import { ImageOption } from "@/types/content";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface OptionItemProps extends ImageOption {
  className?: string;
  imageClassName?: string;
  trigger?: "hover" | "click";
}

export default function OptionItem({
  title,
  imageSrc,
  imageAlt,
  description,
  className,
  imageClassName,
  trigger = "hover",
}: OptionItemProps) {
  // create a state that will determine if we show the overlay, title, and description
  const [showOverlay, setShowOverlay] = useState(false);

  const onMouseEnter = () => {
    if (trigger !== "hover") {
      return;
    }
    setShowOverlay(true);
  };
  const onMouseLeave = () => {
    if (trigger !== "hover") {
      return;
    }
    setShowOverlay(false);
  };

  const onClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div
      className={cn(
        "w-full min-w-[200px] flex-1 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15 sm:max-w-[calc(50%-0.75rem)] relative",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      role="button"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={520}
        height={360}
        className={cn("w-full object-cover", imageClassName)}
      />
      {/* // animate a overlay that appears when the user hovers over the image */}
      <div
        className={cn(
          "absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300",
          showOverlay && "opacity-100"
        )}
      >
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
}
