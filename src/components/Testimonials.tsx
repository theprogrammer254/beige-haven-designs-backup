import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      content: 'Luxe Interiors transformed our house into a dream home. Their attention to detail and creative vision exceeded all our expectations. Every space feels both luxurious and livable.',
      rating: 5,
    },
    {
      name: 'James Anderson',
      role: 'Business Owner',
      content: 'The team redesigned our office space and the results are phenomenal. Productivity has increased and our clients are always impressed. Truly professional service from start to finish.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Homeowner',
      content: 'Working with Luxe Interiors was an absolute pleasure. They listened to our needs, respected our budget, and delivered a stunning result. We couldn\'t be happier!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-primary-foreground text-foreground border-0">
              <CardContent className="p-8">
                <Quote className="text-accent mb-4" size={32} />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-heading font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
