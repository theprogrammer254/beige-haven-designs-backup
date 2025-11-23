import { Award, Users, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroInterior from "@/assets/hero-interior.jpg";

const About = () => {
  const stats = [
    { icon: Star, value: "150+", label: "Projects Completed" },
    { icon: Users, value: "120+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Design Awards" },
    { icon: TrendingUp, value: "10+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-secondary/20 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Creating Beautiful Spaces Since 2015
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="fade-in order-2 lg:order-1">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At <span className="font-semibold text-foreground">Epique Interiors</span>, we believe that great design has the power to transform not just spaces, but lives. Our team of experienced designers brings creativity, expertise, and a personal touch to every project.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From concept to completion, we work closely with our clients to understand their vision and bring it to life with meticulous attention to detail and unwavering commitment to quality.
            </p>
            <Link to="/about">
              <Button size="lg" variant="outline" className="group">
                Learn More About Us
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Button>
            </Link>
          </div>

          <div className="relative fade-in order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src={heroInterior}
                alt="Epique Interiors luxury design showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-background">
                  <p className="text-xl md:text-2xl font-heading italic mb-2">
                    "Design is not just what it looks like. Design is how it works."
                  </p>
                  <p className="text-sm opacity-90">- Our Philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-3 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
