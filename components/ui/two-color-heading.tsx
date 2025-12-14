"use client";

import { cn } from "@/lib/utils";

interface TwoColorHeadingProps {
  part1: string;
  part2: string;
  color1?: string; // Tailwind color class
  color2?: string; // Tailwind color class
  className?: string;
}

export function TwoColorHeading({
  part1,
  part2,
  color1 = "text-blue-600",
  color2 = "text-red-600",
  className,
}: Readonly<TwoColorHeadingProps>) {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
  };

  return (
    <div className={cn("font-bold leading-tight", className)}>
      <h1 className={cn(color1, sizeClasses["xl"])}>{part1}</h1>
      <h2 className={cn(color2, sizeClasses["lg"])}>{part2}</h2>
    </div>
  );
}
