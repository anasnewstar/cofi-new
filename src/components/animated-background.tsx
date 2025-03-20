
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

export function AnimatedBackground() {
  const { theme } = useTheme();
  
  // Create array of blobs with different properties
  const blobs = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 200) + 100, // 100-300px
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: Math.random() * 5 + 8, // 8-13s
  }));
  
  // Create array of bubbles
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 40) + 10, // 10-50px
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 5, // 5-10s
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className={cn(
        "absolute inset-0 transition-colors duration-500 ease-in-out",
        theme === "dark" 
          ? "bg-gradient-to-br from-purple-950/40 via-violet-900/30 to-fuchsia-900/20" 
          : "bg-gradient-to-br from-violet-50 via-fuchsia-50 to-purple-100"
      )}></div>
      
      {/* Animated blobs in background */}
      {blobs.map((blob) => (
        <div
          key={`blob-${blob.id}`}
          className={cn(
            "absolute rounded-full opacity-20 blob",
            theme === "dark" 
              ? "bg-gradient-to-br from-purple-400 to-accent" 
              : "bg-gradient-to-br from-secondary to-primary"
          )}
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            left: blob.left,
            top: blob.top,
            animationDelay: `${blob.delay}s`,
          }}
        ></div>
      ))}
      
      {/* Rising bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={`bubble-${bubble.id}`}
          className={cn(
            "absolute rounded-full bottom-0 bubble",
            theme === "dark" 
              ? "bg-gradient-to-br from-purple-300/10 to-accent/10" 
              : "bg-gradient-to-br from-primary/10 to-secondary/10"
          )}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: bubble.left,
            animationDelay: `${bubble.delay}s`,
          }}
        ></div>
      ))}
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(155,95,224,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      {/* Gradient overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-background to-transparent"></div>
      
      {/* Radial mask */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--background)_80%)]"></div>
    </div>
  );
}
