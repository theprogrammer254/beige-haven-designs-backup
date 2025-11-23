import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Modern Kitchen Sanctuary",
      category: "Kitchen Design",
      image: project1,
      description: "Minimalist elegance meets functionality in this stunning contemporary kitchen",
      year: "2024",
    },
    {
      title: "Serene Bedroom Retreat",
      category: "Bedroom Design",
      image: project2,
      description: "A peaceful haven of comfort and style with luxurious textures",
      year: "2024",
    },
    {
      title: "Contemporary Living Space",
      category: "Living Room",
      image: project3,
      description: "Warm, inviting spaces designed for modern family living",
      year: "2023",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of beautifully crafted interiors that blend timeless elegance with modern functionality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer fade-in bg-background"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                    {project.year}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="text-background/90 text-sm font-medium mb-2 tracking-wider uppercase">{project.category}</p>
                    <h3 className="text-background text-2xl font-heading font-bold mb-2">{project.title}</h3>
                    <p className="text-background/90 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center text-background text-sm font-medium group/link">
                      View Project <ExternalLink className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center fade-in">
          <Link to="/gallery">
            <Button size="lg" variant="outline" className="group">
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
