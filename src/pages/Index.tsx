
import { useEffect, useRef } from "react";
import { AnimatedBackground } from "@/components/animated-background";
import { Navbar } from "@/components/navbar";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { SectionHeading } from "@/components/section-heading";
import { ProductCard } from "@/components/product-card";
import { ProcessItem } from "@/components/process-item";
import { FeatureCard } from "@/components/feature-card";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import { LeafIcon, Droplets, SunIcon, Waves, Wind, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "1",
    name: "Mocha Tea Fizz",
    description: "A perfect blend of mocha and tea with fizzy bubbles that dance on your taste buds.",
    image: "/lovable-uploads/667d753b-ddce-4907-84cc-c8f8577df84d.png",
    price: "$4.99",
  },
  {
    id: "2",
    name: "Honey Gingerer Cack",
    description: "A warm, spicy blend with honey sweetness and ginger kick for those cold days.",
    image: "/lovable-uploads/85b6500d-61be-41d2-97e9-833c45573f00.png",
    price: "$5.49",
  },
  {
    id: "3",
    name: "Vanilla Cold Brew Soda",
    description: "Smooth cold brew coffee infused with premium vanilla and a splash of soda.",
    image: "/lovable-uploads/c5b9c81f-d8b6-4e7b-a76c-7c3b6a0c4dbe.png",
    price: "$4.79",
  },
  {
    id: "4",
    name: "Spiced Cack",
    description: "Our signature spiced beverage with cinnamon, cloves, and a hint of orange.",
    image: "/lovable-uploads/063610a0-15ae-48d9-b292-8a24bc827ba5.png",
    price: "$4.29",
  },
];

const features = [
  {
    icon: LeafIcon,
    title: "100% Organic Ingredients",
    description: "All our ingredients are organically sourced from trusted farmers around the world, ensuring purity and sustainability.",
  },
  {
    icon: Droplets,
    title: "Crystal Clear Filtration",
    description: "Our beverages go through a 7-step filtration process to ensure clarity and purity in every sip.",
  },
  {
    icon: SunIcon,
    title: "Natural Brewing",
    description: "We use natural brewing methods that preserve the authentic flavors of our coffees and teas.",
  },
  {
    icon: Waves,
    title: "Perfect Temperature",
    description: "Each beverage is brewed at its optimal temperature to extract the best flavors and aromas.",
  },
  {
    icon: Wind,
    title: "Aroma Preservation",
    description: "Our special bottling technique preserves the rich aromas until the moment you open the bottle.",
  },
  {
    icon: Sparkles,
    title: "Quality Control",
    description: "Every batch undergoes rigorous quality checks to ensure consistency and excellence.",
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative">
      <ScrollIndicator />
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16 animate-on-scroll">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full">
              Refreshingly Different
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Crafting Perfect <span className="text-gradient">Harmony</span> in Every Bottle
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our exquisite collection of premium tea-coffee fusions, meticulously crafted for the discerning beverage enthusiast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-8">
                Explore Collection
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Our Story
              </Button>
            </div>
          </div>

          <div className="relative mt-16 max-w-4xl mx-auto animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent z-0 mix-blend-overlay"></div>
              <img 
                src="/lovable-uploads/3768349e-3b42-43fa-8309-9ca62c472fcd.png" 
                alt="CofiTea Flagship Collection" 
                className="w-full h-auto z-10 relative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" ref={productsRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <SectionHeading 
            indicator="Our Collection"
            subtitle="Discover our carefully crafted beverages, each with its unique character and flavor profile."
            className="animate-on-scroll"
          >
            Premium Beverage Selection
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {products.map((product, index) => (
              <ProductCard 
                key={product.id}
                {...product}
                index={index}
                className="animate-on-scroll"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" ref={storyRef} className="py-20 relative">
        <div className="container mx-auto px-4 bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <SectionHeading 
                indicator="Our Story"
                alignment="left"
              >
                <span className="text-gradient">Passion Brewed</span> Into Every Drop
              </SectionHeading>
              
              <p className="text-foreground mb-6 font-medium text-lg">
                Born from a passion for exceptional beverages, CofiTea started as a small experimental kitchen in 2010. What began as a quest to create the perfect blend of coffee and tea has evolved into a globally recognized brand known for innovation and quality.
              </p>
              
              <p className="text-foreground mb-6 font-medium">
                Our founder, inspired by traditional brewing methods from around the world, spent years perfecting each recipe. Today, we continue this tradition of excellence, combining time-honored techniques with modern innovation.
              </p>
              
              <p className="text-foreground mb-8 font-medium">
                Every bottle of CofiTea is a testament to our commitment to craftsmanship, quality ingredients, and sustainable practices. We believe in creating beverages that not only delight the palate but also respect our planet.
              </p>
              
              <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-bold">Learn More About Us</Button>
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-accent/40 to-primary/40 dark:from-accent/30 dark:to-primary/30 z-0 transform rotate-3 blur-sm"></div>
                <img 
                  src="/lovable-uploads/71d14d6a-8285-4508-9289-3c8dfac8ffc1.png" 
                  alt="CofiTea Story" 
                  className="rounded-2xl relative z-10 border-4 border-white/40 dark:border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <SectionHeading 
            indicator="Why Choose Us"
            subtitle="Our commitment to quality and excellence sets us apart from conventional beverages."
            className="animate-on-scroll"
          >
            The CofiTea Difference
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                {...feature}
                index={index}
                className="animate-on-scroll"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" ref={processRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <SectionHeading 
            indicator="Our Process"
            subtitle="We follow a meticulous process to create beverages that exceed your expectations."
            className="animate-on-scroll"
          >
            From Bean to Bottle
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <ProcessItem
              number={1}
              title="Careful Selection"
              description="We source the finest coffee beans and tea leaves from sustainable farms around the world."
              index={0}
              className="animate-on-scroll"
            >
              <img 
                src="/lovable-uploads/9601b837-15d9-4743-bb1b-116889ce6f8b.png" 
                alt="Selection Process" 
                className="w-full h-48 object-cover rounded-lg mt-4" 
              />
            </ProcessItem>
            
            <ProcessItem
              number={2}
              title="Artisanal Roasting"
              description="Each batch is roasted to perfection to bring out the unique flavor profiles of our ingredients."
              index={1}
              className="animate-on-scroll"
            >
              <img 
                src="/lovable-uploads/7cbb8e14-7db6-44a5-8932-fe4ab52ceb1e.png" 
                alt="Roasting Process" 
                className="w-full h-48 object-cover rounded-lg mt-4" 
              />
            </ProcessItem>
            
            <ProcessItem
              number={3}
              title="Expert Blending"
              description="Our master blenders combine coffee and tea in precise ratios to create harmonious flavors."
              index={2}
              className="animate-on-scroll"
            >
              <img 
                src="/lovable-uploads/47729583-e7e5-4aa0-90a2-0fc28a177f44.png" 
                alt="Blending Process" 
                className="w-full h-48 object-cover rounded-lg mt-4" 
              />
            </ProcessItem>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <SectionHeading 
            indicator="Customer Love"
            subtitle="Join thousands of satisfied customers who have made CofiTea a part of their daily routine."
            className="animate-on-scroll"
          >
            What People Are Saying
          </SectionHeading>
          
          <div className="mt-12 bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5 rounded-2xl p-8 max-w-3xl mx-auto relative animate-on-scroll">
            <div className="absolute -top-4 -left-4 text-6xl text-amber-400 opacity-50">"</div>
            <div className="text-center px-6">
              <p className="text-lg md:text-xl mb-6 italic">
                CofiTea's unique blends have completely transformed my morning routine. The perfect balance of coffee and tea gives me the energy boost I need without the jitters. Absolutely love it!
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                  <img 
                    src="/lovable-uploads/b5d00f19-42ca-46a5-8562-d99bb651e4ef.png" 
                    alt="Customer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold">Emily Johnson</h4>
                <p className="text-sm text-muted-foreground">Loyal Customer since 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <SectionHeading 
            indicator="@cofitea"
            subtitle="Share your CofiTea moments with us on Instagram using #CofiTeaMoments"
            className="animate-on-scroll"
          >
            Follow Us on Instagram
          </SectionHeading>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <img 
              src="/lovable-uploads/712c290c-dd9b-428f-ab79-e9f1b2bf4098.png" 
              alt="Instagram 1" 
              className="w-full aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity animate-on-scroll"
            />
            <img 
              src="/lovable-uploads/e8976c2e-ca0f-4c91-88a7-36f9cefde049.png" 
              alt="Instagram 2" 
              className="w-full aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity animate-on-scroll"
              style={{ animationDelay: "0.1s" }}
            />
            <img 
              src="/lovable-uploads/4d03e77d-3921-4bbe-b4ca-0467605604be.png" 
              alt="Instagram 3" 
              className="w-full aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity animate-on-scroll"
              style={{ animationDelay: "0.2s" }}
            />
            <img 
              src="/lovable-uploads/03ed79d3-3be5-4854-92c8-deb1ac811a80.png" 
              alt="Instagram 4" 
              className="w-full aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity animate-on-scroll"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        </div>
      </section>

      <CallToAction className="animate-on-scroll" />
      <Footer />
    </div>
  );
};

export default Index;
