"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface TextImageSectionProps {
  children: React.ReactNode;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    useNextImage?: boolean; // If false, uses regular img tag (for external URLs)
  };
  imagePosition?: "left" | "right";
  className?: string;
  imageClassName?: string;
}

export function TextImageSection({
  children,
  image,
  imagePosition = "right",
  className,
  imageClassName,
}: TextImageSectionProps) {
  const useNextImage = image.useNextImage !== false; // Default to true
  const imageWidth = image.width || 800;
  const imageHeight = image.height || 600;

  const imageElement = useNextImage ? (
    <Image
      src={image.src}
      alt={image.alt}
      width={imageWidth}
      height={imageHeight}
      className={cn("w-full h-auto rounded-lg shadow-lg object-cover", imageClassName)}
      priority={false}
    />
  ) : (
    <img
      src={image.src}
      alt={image.alt}
      className={cn("w-full h-auto rounded-lg shadow-lg object-cover", imageClassName)}
    />
  );

  return (
    <Container className={cn("py-16 md:py-24", className)}>
      <div className={cn("grid gap-8 md:gap-12", "md:grid-cols-2 md:items-center")}>
        {imagePosition === "left" ? (
          <>
            <div className="relative w-full">{imageElement}</div>
            <div className="flex flex-col justify-center">{children}</div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center">{children}</div>
            <div className="relative w-full">{imageElement}</div>
          </>
        )}
      </div>
    </Container>
  );
}
