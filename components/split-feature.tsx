import Image from "next/image";
import { cn } from "@/lib/utils";

// Define ratio presets - add new ratios here
const RATIO_PRESETS = {
  "50:50": { content: "md:col-span-6", image: "md:col-span-6" },
  "60:40": { content: "md:col-span-7", image: "md:col-span-5" },
  "40:60": { content: "md:col-span-5", image: "md:col-span-7" },
  "70:30": { content: "md:col-span-8", image: "md:col-span-4" },
  "30:70": { content: "md:col-span-4", image: "md:col-span-8" },
  "75:25": { content: "md:col-span-9", image: "md:col-span-3" },
  "25:75": { content: "md:col-span-3", image: "md:col-span-9" },
} as const;

// Derive the type from the constant
type RatioPreset = keyof typeof RATIO_PRESETS;

export function SplitFeature({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  ratio = "50:50",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  ratio?: RatioPreset;
}) {
  const { content: contentSpan, image: imageSpan } = RATIO_PRESETS[ratio];

  return (
    <div
      className={cn(
        "grid items-center gap-10 md:grid-cols-12",
        reverse && "md:[&>*:first-child]:order-2"
      )}
    >
      <div className={contentSpan}>
        {eyebrow ? <p className="text-sm font-semibold text-muted-foreground">{eyebrow}</p> : null}
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
        <div className="mt-4 text-base leading-7 text-muted-foreground">{description}</div>
      </div>

      <div className={cn("justify-self-end", imageSpan)}>
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
