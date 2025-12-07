"use client";

import * as React from "react";
import { Container } from "@/components/layout/Container";
import { ServiceItem } from "@/types/content";
import { cn } from "@/lib/utils";

interface AceternityBentoServicesShellProps {
  services: ServiceItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * TODO: Replace this shell with Aceternity UI Bento Grid component implementation.
 * This is a placeholder component that will be replaced with the actual
 * Aceternity UI Bento Grid component for displaying services in a modern,
 * asymmetric grid layout.
 */
export function AceternityBentoServicesShell({
  services,
  title = "Our Services",
  subtitle,
  className,
}: AceternityBentoServicesShellProps) {
  return (
    <section
      className={cn(
        "relative py-16 md:py-24",
        "border-4 border-dashed border-cyan-500/50",
        "bg-gradient-to-br from-cyan-50/30 via-teal-50/30 to-blue-50/30",
        className
      )}
    >
      <Container>
        {/* Visual indicator */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded">
          ACETERNITY BENTO SERVICES SHELL
        </div>

        {(title || subtitle) && (
          <div className="mb-12 text-center space-y-4">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}

        {/* Simple responsive grid - will be replaced with Aceternity Bento Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-lg border-2 border-cyan-300/50 bg-white/80 p-6 shadow-sm transition-all hover:shadow-md hover:border-cyan-400"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold leading-tight">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
