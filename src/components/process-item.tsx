
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProcessItemProps {
  number: number;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  index: number;
}

export function ProcessItem({
  number,
  title,
  description,
  children,
  className,
  index,
}: ProcessItemProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center p-6 rounded-2xl bg-secondary/50 dark:bg-secondary/30 backdrop-blur-sm transition-all duration-300",
        className
      )}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="bg-primary/10 dark:bg-primary/20 text-primary h-12 w-12 rounded-full flex items-center justify-center mb-4 text-lg font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-sm text-muted-foreground text-center mb-4">
        {description}
      </p>
      {children}
    </div>
  );
}
