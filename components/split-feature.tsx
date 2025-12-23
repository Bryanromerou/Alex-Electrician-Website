import Image from "next/image";
import { cn } from "@/lib/utils";

export function SplitFeature({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 md:grid-cols-2",
        reverse && "md:[&>*:first-child]:order-2"
      )}
    >
      <div>
        {eyebrow ? <p className="text-sm font-semibold text-muted-foreground">{eyebrow}</p> : null}
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
        <div className="mt-4 text-base leading-7 text-muted-foreground">{description}</div>
      </div>

      <div className="justify-self-end">
        <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={720}
            height={480}
            className="h-[260px] w-[520px] object-cover md:h-[320px] md:w-full"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
