"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
