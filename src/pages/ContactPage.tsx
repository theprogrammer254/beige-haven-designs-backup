import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import heroInterior from "@/assets/hero-interior.jpg";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Epique Interiors - Get Your Free Consultation</title>
        <meta
          name="description"
          content="Contact Epique Interiors for a free design consultation. Let's discuss your interior design project and transform your space together."
        />
        <meta
          name="keywords"
          content="contact interior designer, design consultation, epique interiors contact, schedule consultation"
        />
        <link rel="canonical" href="https://epiqueinteriors.com/contact" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/20 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${heroInterior})` }}
            ></div>
            <div className="relative container mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 fade-in">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
                Let's discuss your vision and bring your dream space to life
              </p>
            </div>
          </section>

          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
