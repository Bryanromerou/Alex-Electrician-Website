"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AceternitySpotlightCTAProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * TODO: Replace this shell with Aceternity UI Spotlight component implementation.
 * This is a placeholder component that will be replaced with the actual
 * Aceternity UI Spotlight component that creates an animated spotlight effect
 * following the cursor or mouse movement.
 */
export function AceternitySpotlightCTA({
  title,
  subtitle,
  ctaLabel = "Get Started",
  ctaHref = "/contact",
  className,
  children,
}: AceternitySpotlightCTAProps) {
  return (
    <section
      className={cn(
        "relative py-16 md:py-24 overflow-hidden",
        "border-4 border-dashed border-amber-500/50",
        "bg-gradient-to-br from-amber-50/40 via-orange-50/40 to-red-50/40",
        className
      )}
    >
      <Container>
        {/* Visual indicator */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded z-10">
          ACETERNITY SPOTLIGHT CTA SHELL
        </div>

        <div className="relative mx-auto max-w-4xl text-center space-y-8 z-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          {ctaLabel && ctaHref && (
            <div className="flex justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>

        {/* Placeholder for spotlight effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-400/30 via-orange-400/20 to-transparent rounded-full blur-3xl" />
        </div>
      </Container>
    </section>
  );
}
