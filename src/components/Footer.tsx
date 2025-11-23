import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@eleganceinteriors.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-secondary/30 to-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Epique Interiors
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Transforming spaces into timeless elegance through bespoke design and architectural excellence. Creating beautiful, functional spaces since 2015.
            </p>
            <div className="space-y-3">
              <a href="tel:+15551234567" className="flex items-center text-muted-foreground hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a href="mailto:hello@eleganceinteriors.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors group">
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>hello@eleganceinteriors.com</span>
              </a>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Design Street, New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Gallery", path: "/gallery" },
                { name: "Services", path: "/services" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span className="ml-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-lg font-heading font-bold text-foreground mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 flex items-center justify-center bg-primary/10 rounded-full hover:bg-primary/20 hover:scale-110 transition-all group"
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <Button 
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="w-full group"
              >
                <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Epique Interiors. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
