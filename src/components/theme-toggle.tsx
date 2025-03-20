
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const toggleTheme = () => {
    setIsAnimating(true);
    setTheme(theme === "light" ? "dark" : "light");
    
    // Reset animation after it completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        "relative h-10 w-10 rounded-full overflow-hidden border-2 border-primary/20 transition-all", 
        isAnimating && "scale-110",
        theme === "dark" ? "bg-primary/20" : "bg-secondary/20",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 transition-opacity duration-500"></div>
      <Sun className={cn(
        "absolute h-[1.4rem] w-[1.4rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500",
        theme === "dark" 
          ? "opacity-0 rotate-90 scale-0" 
          : "opacity-100 rotate-0 scale-100 text-amber-500 animate-pulse"
      )} />
      <Moon className={cn(
        "absolute h-[1.4rem] w-[1.4rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500",
        theme === "dark" 
          ? "opacity-100 rotate-0 scale-100 text-indigo-300 animate-pulse" 
          : "opacity-0 rotate-90 scale-0"
      )} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
