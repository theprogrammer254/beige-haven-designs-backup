import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

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
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
