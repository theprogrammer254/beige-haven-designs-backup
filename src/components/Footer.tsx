import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:info@epiqueinteriors.com", label: "Email" },
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
            <Link to="/" className="inline-block mb-4 group">
              <img
                src="/epique_logo.png"
                alt="Epique Interiors"
                className="h-32 w-auto transition-transform duration-300 group-hover:scale-105 filter drop-shadow-2xl"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Transforming spaces into timeless elegance through bespoke design and architectural excellence. Creating beautiful, functional spaces since 2015.
            </p>
            <div className="space-y-3">
              <a href="tel:+254745508328" className="flex items-center text-muted-foreground hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>+254 745 508 328</span>
              </a>
              <a href="mailto:info@epiqueinteriors.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors group">
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>info@epiqueinteriors.com</span>
              </a>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Nairobi, Kenya (Operating throughout the country)</span>
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
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-3 border border-green-200/50 dark:border-green-800/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">T</span>
                    </div>
                    <span className="font-semibold text-foreground text-sm">Trustpilot</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-700 dark:text-green-400 text-sm">4.9</div>
                    <div className="text-xs text-muted-foreground">Excellent</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-green-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-green-500" viewBox="0 0 20 20">
                      <defs>
                        <linearGradient id="halfStar">
                          <stop offset="50%" stopColor="currentColor" />
                          <stop offset="50%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      <path fill="currentColor" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-xs text-muted-foreground">312 reviews</div>
                </div>
              </div>
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
