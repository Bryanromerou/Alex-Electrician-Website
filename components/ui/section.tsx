import { cn } from "@/lib/utils";

type Variant = "default" | "muted" | "primary" | "secondary" | "accent";

const variants: Record<Variant, string> = {
  default: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  primary: "bg-section-primary text-section-primary-foreground",
  secondary: "bg-section-secondary text-section-secondary-foreground",
  accent: "bg-section-accent text-section-accent-foreground",
};

export function Section({
  variant = "default",
  children,
  className,
  containerClassName,
  id,
  fullBleed = true,
}: {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  fullBleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(variants[variant], "py-14 md:py-20 justify-center flex px-4", className)}
    >
      <div className={cn(fullBleed ? "container" : "", containerClassName)}>{children}</div>
    </section>
  );
}
