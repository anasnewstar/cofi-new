
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  alignment?: "left" | "center" | "right";
  indicator?: string;
}

export function SectionHeading({
  children,
  subtitle,
  className,
  alignment = "center",
  indicator,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        alignment === "center" && "text-center",
        alignment === "left" && "text-left",
        alignment === "right" && "text-right",
        className
      )}
    >
      {indicator && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-2 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full">
          {indicator}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
