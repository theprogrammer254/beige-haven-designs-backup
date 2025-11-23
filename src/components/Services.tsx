import { Home, Lightbulb, Ruler, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Interior Design",
      description: "Complete interior design services tailored to your lifestyle and aesthetic preferences",
    },
    {
      icon: Ruler,
      title: "Space Planning",
      description: "Optimize your space with intelligent layout solutions that maximize functionality",
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Expert guidance on color palettes that create harmony and reflect your personality",
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Create the perfect ambiance with strategic lighting solutions for every space",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions for every aspect of your space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="text-center p-8 border-border hover:border-primary transition-all duration-300 hover:shadow-lg fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="mb-6 inline-block p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
