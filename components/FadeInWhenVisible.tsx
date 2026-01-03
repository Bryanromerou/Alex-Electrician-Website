"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayClass?: string;
};

export default function FadeInWhenVisible({ children, className, delayClass }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 translate-y-4 transition-all duration-1000 ease-out",
        inView && "opacity-100 translate-y-0",
        delayClass,
        className
      )}
    >
      {children}
    </div>
  );
}
