import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Epique Interiors | Luxury Interior Design & Architecture</title>
        <meta
          name="description"
          content="Transform your space with Epique Interiors' bespoke interior design and architectural services. Specializing in timeless elegance and modern luxury designs."
        />
        <meta
          name="keywords"
          content="interior design, luxury interiors, architectural design, home design, epique interiors, beige interiors"
        />
        <link rel="canonical" href="https://epiqueinteriors.com/" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
