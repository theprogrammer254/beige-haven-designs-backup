import { Home, Lightbulb, Ruler, Palette, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Interior Design",
      description: "Complete interior design services tailored to your lifestyle and aesthetic preferences",
      features: ["Custom Layouts", "Furniture Selection", "Material Sourcing"],
    },
    {
      icon: Ruler,
      title: "Space Planning",
      description: "Optimize your space with intelligent layout solutions that maximize functionality",
      features: ["Flow Analysis", "Room Optimization", "Storage Solutions"],
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Expert guidance on color palettes that create harmony and reflect your personality",
      features: ["Palette Creation", "Sample Testing", "Finish Selection"],
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Create the perfect ambiance with strategic lighting solutions for every space",
      features: ["Ambient Lighting", "Task Lighting", "Smart Controls"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive design solutions for every aspect of your space, from initial concept to final installation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="text-center p-8 border border-border hover:border-primary hover:-translate-y-2 transition-all duration-300 hover:shadow-xl fade-in group bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center fade-in">
          <Link to="/services">
            <Button size="lg" className="group">
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
