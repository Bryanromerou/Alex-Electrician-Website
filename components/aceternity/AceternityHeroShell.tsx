"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AceternityHeroShellProps {
  title: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * TODO: Replace this shell with Aceternity UI Hero component implementation.
 * This is a placeholder component that will be replaced with the actual
 * Aceternity UI hero component (e.g., HeroParallax, HeroHighlight, etc.)
 */
export function AceternityHeroShell({
  title,
  subtitle,
  primaryCtaLabel = "Get Started",
  primaryCtaHref = "/contact",
  secondaryCtaLabel,
  secondaryCtaHref,
  className,
  children,
}: AceternityHeroShellProps) {
  return (
    <section
      className={cn(
        "relative min-h-[80vh] flex items-center justify-center",
        "border-4 border-dashed border-purple-500/50",
        "bg-gradient-to-br from-purple-50/30 via-blue-50/30 to-purple-50/30",
        "py-16 md:py-24",
        className
      )}
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Visual indicator */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded">
            ACETERNITY HERO SHELL
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCtaLabel && primaryCtaHref && (
              <Button asChild size="lg">
                <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
              </Button>
            )}
            {secondaryCtaLabel && secondaryCtaHref && (
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
              </Button>
            )}
          </div>

          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
