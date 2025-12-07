"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  className?: string;
}

export function StatCard({ label, value, subtext, className }: StatCardProps) {
  return (
    <Card className={cn("text-center", className)}>
      <CardContent className="flex flex-col items-center justify-center gap-2 py-8">
        <p className="text-4xl font-bold text-primary md:text-5xl">{value}</p>
        <p className="text-lg font-semibold">{label}</p>
        {subtext && <p className="text-muted-foreground text-sm">{subtext}</p>}
      </CardContent>
    </Card>
  );
}
