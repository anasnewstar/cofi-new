
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  index: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  index,
}: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "p-6 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300",
        className
      )}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="bg-primary/10 dark:bg-primary/20 text-primary h-12 w-12 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
