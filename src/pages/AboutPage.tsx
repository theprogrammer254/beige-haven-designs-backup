import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Heart, Sparkles } from "lucide-react";
import heroInterior from "@/assets/hero-interior.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "We pour our heart into every project, treating each space as if it were our own.",
  },
  {
    icon: Sparkles,
    title: "Timeless Elegance",
    description: "Creating designs that transcend trends and remain beautiful for years to come.",
  },
  {
    icon: Users,
    title: "Client-Centered",
    description: "Your vision guides us. We listen, understand, and bring your dreams to life.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Commitment to the highest standards in every detail of design and execution.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Epique Interiors - Our Story & Design Philosophy</title>
        <meta
          name="description"
          content="Learn about Epique Interiors' design philosophy, our passion for creating timeless elegant spaces, and our commitment to excellence in interior design."
        />
        <meta
          name="keywords"
          content="about epique interiors, interior design philosophy, design team, luxury design company"
        />
        <link rel="canonical" href="https://epiqueinteriors.com/about" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 fade-in">
                About Epique Interiors
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
                Where artistry meets functionality to create spaces that inspire and endure
              </p>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="fade-in">
                  <img
                    src={heroInterior}
                    alt="Epique Interiors luxury design showcase"
                    className="rounded-lg shadow-2xl w-full h-auto"
                  />
                </div>
                <div className="fade-in">
                  <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Epique Interiors was founded on a simple belief: every space has the potential to become
                      extraordinary. With a passion for timeless design and an eye for detail, we've transformed
                      countless homes and commercial spaces into sophisticated sanctuaries.
                    </p>
                    <p>
                      Our approach combines classical elegance with modern sensibilities, creating interiors that
                      are both beautiful and livable. We believe in the power of good design to enhance daily life,
                      foster connection, and bring joy to those who inhabit our spaces.
                    </p>
                    <p>
                      Every project is a collaboration, a journey we take with our clients to understand their
                      lifestyle, preferences, and dreams. This personalized approach ensures that each design is
                      uniquely tailored and authentically reflects those who call it home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                  Our Values
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide every design decision we make
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="text-center fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="inline-flex p-6 rounded-full bg-primary/10 mb-4">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Let's Create Something Beautiful Together
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to start your design journey? We'd love to hear about your project
              </p>
              <a href="/contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-lg">
                  Contact Us
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

export default AboutPage;
