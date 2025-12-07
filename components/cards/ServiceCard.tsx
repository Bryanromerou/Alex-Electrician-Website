"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <Card className={cn("h-full transition-all hover:shadow-md", className)}>
      <CardHeader className="flex flex-col items-start gap-4">
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold leading-tight">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
