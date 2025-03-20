
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface CallToActionProps {
  className?: string;
}

export function CallToAction({ className }: CallToActionProps) {
  return (
    <section className={cn("py-20 relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-amber-500/5 dark:bg-amber-500/10 -z-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Perfect Brew?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who've already discovered the unique taste of CofiTea beverages.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-8">
              Shop Collection
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
