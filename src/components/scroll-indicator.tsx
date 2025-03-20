
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider";

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      const scrollPercent = (currentScrollY / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-2 z-[100] bg-transparent overflow-hidden">
      <div
        className={cn(
          "h-full transition-all duration-300 ease-out rounded-r-full", 
          theme === "dark" 
            ? "bg-gradient-to-r from-primary via-accent to-secondary" 
            : "bg-gradient-to-r from-secondary via-accent to-primary"
        )}
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="absolute top-0 right-0 h-full w-8 animate-pulse opacity-70 bg-white/50 blur-sm"></div>
      </div>
    </div>
  );
}
