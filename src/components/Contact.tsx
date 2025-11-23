import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+254 745 508 328",
      link: "tel:+254745508328",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@epiqueinteriors.com",
      link: "mailto:info@epiqueinteriors.com",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Nairobi, Kenya (Operating throughout the country)",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your space? Get in touch with us today and let's bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="fade-in">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full h-12"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full h-12"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full h-12"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Details *</label>
                  <Textarea
                    placeholder="Tell us about your project, your style preferences, and what you're looking to achieve..."
                    required
                    className="w-full min-h-[150px] resize-none"
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 text-base group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 fade-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We'd love to hear about your project. Reach out to us through any of the following channels, and we'll respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        {info.title}
                      </h4>
                      <p className="text-foreground font-medium">{info.detail}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full mr-3">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground/70">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
