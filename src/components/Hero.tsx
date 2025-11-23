import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import heroInterior from "@/assets/hero-interior.jpg";

const heroImages = [
  { src: hero1, alt: "Luxurious modern living room with beige tones and high ceilings" },
  { src: hero2, alt: "Sophisticated bedroom interior design" },
  { src: hero3, alt: "Elegant kitchen with beige cabinetry and marble countertops" },
  { src: hero4, alt: "Stunning dining room with contemporary chandelier" },
  { src: heroInterior, alt: "Luxury interior design showcase" },
];

const Hero = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <Carousel
        plugins={[plugin.current]}
        className="absolute inset-0 z-0"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8" />
        <CarouselNext className="right-4 md:right-8" />
      </Carousel>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center fade-in">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
          Transforming Spaces<br />Into Timeless Elegance
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Bespoke interior design and architectural services that bring your vision to life
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/gallery">
            <Button size="lg" className="text-lg group">
              Explore Our Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="text-lg">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
