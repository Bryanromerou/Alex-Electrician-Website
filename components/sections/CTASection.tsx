"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

export function CTASection({
  title = "Need a Trusted Electrician?",
  subtitle,
  primaryLabel = "Request a Quote",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("bg-primary py-16 text-primary-foreground md:py-24", className)}>
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{title}</h2>
          {subtitle && (
            <p className="text-primary-foreground/90 text-lg leading-relaxed">{subtitle}</p>
          )}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
