
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  className?: string;
  index: number;
}

export function ProductCard({
  id,
  name,
  description,
  image,
  price,
  className,
  index,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-secondary/50 dark:bg-secondary/30 backdrop-blur-sm transition-all duration-300 h-full flex flex-col",
        isHovered && "shadow-xl shadow-amber-500/10",
        className
      )}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden relative pt-6 pb-4 px-6">
        <div className="absolute top-0 right-0 p-4 z-10">
          <span className="text-sm font-semibold bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full">
            {price}
          </span>
        </div>
        
        <div className="relative h-60 mb-4 transition-transform duration-500 group-hover:scale-[1.02]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain object-center transition-all"
          />
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-balance">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
      </div>

      <div className="mt-auto px-6 pb-6 pt-2">
        <Button className="w-full group relative overflow-hidden">
          <span className="relative z-10 flex items-center justify-center gap-1">
            View Details
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </Button>
      </div>
    </div>
  );
}
