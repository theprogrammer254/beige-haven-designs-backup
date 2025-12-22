import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/98 backdrop-blur-md shadow-lg border-b border-border" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20 relative">
          <Link 
            to="/" 
            className="absolute left-0 text-2xl md:text-3xl font-heading font-bold text-foreground hover:text-primary transition-colors relative group"
          >
            Epique Interiors
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-foreground hover:text-primary transition-colors duration-300 font-medium group ${
                  location.pathname === link.href ? "text-primary" : ""
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="absolute right-0 hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Link to="/contact">
              <Button variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-0 flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 bg-background/98 backdrop-blur-md border-t border-border animate-in slide-in-from-top duration-300">
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block py-3 px-4 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-all ${
                    location.pathname === link.href ? "text-primary bg-primary/10 font-semibold" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="default" size="lg" className="w-full mt-6 shadow-md">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
