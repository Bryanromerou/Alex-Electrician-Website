import { cn } from "@/lib/utils";

type Variant = "default" | "muted" | "blue" | "red";

const variants: Record<Variant, string> = {
  default: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  blue: "bg-blue-700 text-white",
  red: "bg-red-600 text-white",
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
      className={cn(variants[variant], "py-14 md:py-20 justify-center flex", className)}
    >
      <div className={cn(fullBleed ? "container" : "", containerClassName)}>{children}</div>
    </section>
  );
}
