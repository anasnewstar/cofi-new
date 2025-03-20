
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <AnimatedBackground />
      
      <div className="text-center max-w-md w-full animate-fadeIn">
        <img 
          src="/lovable-uploads/299564dc-0c72-4001-9ffe-f108aff7620b.png" 
          alt="404 Error" 
          className="w-full max-w-xs mx-auto mb-8"
        />
        
        <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          It seems like the page you're looking for might have been moved or doesn't exist. Let's get you back on track.
        </p>
        
        <Button asChild size="lg" className="rounded-full px-8">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
