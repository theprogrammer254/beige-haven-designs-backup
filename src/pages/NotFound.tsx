import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-secondary/20 to-background px-4 py-20">
        <div className="text-center max-w-2xl mx-auto fade-in">
          {/* 404 Illustration */}
          <div className="mb-8 relative">
            <div className="text-[120px] md:text-[200px] font-heading font-bold text-primary/10 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                <Search className="w-12 h-12 md:w-16 md:h-16 text-primary" />
              </div>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            We couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button size="lg" className="group">
                <Home className="mr-2 w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.history.back()}
              className="group"
            >
              <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Or explore these pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Gallery", path: "/gallery" },
                { name: "Services", path: "/services" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
