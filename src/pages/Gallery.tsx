import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";

const galleryItems = [
  { src: gallery1, alt: "Luxurious beige living room with designer furniture", category: "Living Room" },
  { src: gallery2, alt: "Modern minimalist bedroom with beige tones", category: "Bedroom" },
  { src: gallery3, alt: "Sophisticated bathroom with beige marble", category: "Bathroom" },
  { src: gallery4, alt: "Elegant home office with built-in bookshelves", category: "Home Office" },
  { src: gallery5, alt: "Modern kitchen with beige cabinetry", category: "Kitchen" },
  { src: gallery6, alt: "Cozy reading nook with beige upholstered armchair", category: "Reading Nook" },
  { src: gallery7, alt: "Luxurious master bedroom suite", category: "Master Suite" },
  { src: gallery8, alt: "Contemporary dining area with statement chandelier", category: "Dining Room" },
  { src: gallery9, alt: "Stylish entryway with beige tones", category: "Entryway" },
  { src: gallery10, alt: "Modern outdoor patio with neutral furniture", category: "Outdoor" },
  { src: gallery11, alt: "Elegant powder room with designer vanity", category: "Powder Room" },
  { src: gallery12, alt: "Sophisticated home library with beige built-in shelving", category: "Library" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Gallery | Epique Interiors - View Our Portfolio</title>
        <meta
          name="description"
          content="Explore Epique Interiors' stunning portfolio of luxury interior design projects. View our collection of beautifully designed spaces featuring timeless elegance."
        />
        <meta
          name="keywords"
          content="interior design gallery, luxury home designs, portfolio, completed projects, epique interiors"
        />
        <link rel="canonical" href="https://epiqueinteriors.com/gallery" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 fade-in">
                Our Portfolio
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in">
                Discover our collection of thoughtfully designed spaces that blend elegance with functionality
              </p>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg cursor-pointer hover-scale fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="aspect-square overflow-hidden bg-secondary/20">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div>
                        <p className="text-background text-sm font-medium mb-1">{item.category}</p>
                        <h3 className="text-background text-xl font-heading font-bold">View Project</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-background/95">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={galleryItems[selectedImage].src}
                alt={galleryItems[selectedImage].alt}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                <p className="text-background text-sm font-medium mb-1">
                  {galleryItems[selectedImage].category}
                </p>
                <p className="text-background/90 text-sm">{galleryItems[selectedImage].alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
