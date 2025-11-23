import { Award, Users, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Star, value: "150+", label: "Projects Completed" },
    { icon: Users, value: "120+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Design Awards" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Creating Beautiful Spaces Since 2015
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Elegance Interiors, we believe that great design has the power to transform not just spaces, but lives. Our team of experienced designers brings creativity, expertise, and a personal touch to every project.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From concept to completion, we work closely with our clients to understand their vision and bring it to life with meticulous attention to detail and unwavering commitment to quality.
            </p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mb-3 inline-block p-3 bg-primary/10 rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-heading font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-2xl font-heading italic text-foreground">
                    "Design is not just what it looks like and feels like. Design is how it works."
                  </p>
                  <p className="text-lg text-muted-foreground mt-4">- Our Philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
