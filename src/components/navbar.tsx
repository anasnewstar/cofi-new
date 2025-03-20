
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Coffee, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md py-2 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-primary animate-float" />
            <span className="text-xl font-semibold font-display">CofiTea</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a
              href="#products"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all"
            >
              Products
            </a>
            <a
              href="#story"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all"
            >
              Our Story
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all"
            >
              Process
            </a>
            <ThemeToggle />
            <Button size="sm" className="rounded-full px-6">
              Shop Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[64px] z-50 bg-background border-b border-border transition-all duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-6 space-y-6">
          <a href="#products" className="block text-lg font-medium hover:text-primary">
            Products
          </a>
          <a href="#story" className="block text-lg font-medium hover:text-primary">
            Our Story
          </a>
          <a href="#process" className="block text-lg font-medium hover:text-primary">
            Process
          </a>
          <Button className="w-full rounded-full">Shop Now</Button>
        </div>
      </div>
    </header>
  );
}
