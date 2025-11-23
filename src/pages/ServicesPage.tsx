import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PenTool, Home, Lightbulb, Palette, Ruler, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description:
      "Transform your home into a personalized sanctuary with our comprehensive residential design services. From concept to completion, we handle every detail.",
    features: ["Space Planning", "Custom Furniture", "Color Consultation", "Material Selection"],
  },
  {
    icon: PenTool,
    title: "Architectural Services",
    description:
      "Our architectural expertise ensures your space is both beautiful and structurally sound. We create designs that harmonize form and function.",
    features: ["Building Design", "Renovations", "3D Visualization", "Permit Coordination"],
  },
  {
    icon: Palette,
    title: "Interior Styling",
    description:
      "Elevate your space with professional styling services. We curate furniture, art, and accessories to create cohesive, stunning interiors.",
    features: ["Furniture Selection", "Art Curation", "Accessory Styling", "Final Touches"],
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description:
      "Illuminate your space perfectly with our specialized lighting design. We create layered lighting schemes that enhance ambiance and functionality.",
    features: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Smart Controls"],
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description:
      "Maximize your space's potential with expert planning. We optimize layouts for better flow, functionality, and aesthetic appeal.",
    features: ["Layout Optimization", "Flow Analysis", "Furniture Placement", "Storage Solutions"],
  },
  {
    icon: Sparkles,
    title: "Renovation Consulting",
    description:
      "Navigate your renovation journey with confidence. Our consulting services guide you through decisions, timelines, and budgets.",
    features: ["Project Planning", "Budget Management", "Contractor Coordination", "Quality Control"],
  },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services | Epique Interiors - Interior Design & Architecture</title>
        <meta
          name="description"
          content="Discover Epique Interiors' comprehensive design services including residential design, architectural services, interior styling, and renovation consulting."
        />
        <meta
          name="keywords"
          content="interior design services, architectural design, renovation consulting, space planning, lighting design"
        />
        <link rel="canonical" href="https://epiqueinteriors.com/services" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 fade-in">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
                From concept to completion, we offer comprehensive design services tailored to your unique vision and lifestyle
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-500 border-none bg-gradient-to-br from-background to-secondary/10 fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-8">
                        <div className="mb-6 inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground mb-6">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something extraordinary together
              </p>
              <a href="/contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-lg">
                  Get In Touch
                </button>
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
