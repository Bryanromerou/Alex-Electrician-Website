"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  location?: string;
  rating: number;
  quote: string;
  className?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "text-lg",
            i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300 fill-gray-300"
          )}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialCard({
  name,
  location,
  rating,
  quote,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="space-y-3">
        <StarRating rating={rating} />
        <blockquote className="text-foreground text-base leading-relaxed">"{quote}"</blockquote>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col gap-1">
          <p className="font-semibold">{name}</p>
          {location && <p className="text-muted-foreground text-sm">{location}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
