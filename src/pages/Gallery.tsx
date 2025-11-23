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
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(galleryItems.map(item => item.category)))];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/20 to-background">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 fade-in">
                Our Work
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 fade-in">
                Project Gallery
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in leading-relaxed">
                Discover our collection of thoughtfully designed spaces that blend timeless elegance with modern functionality
              </p>
            </div>
          </section>

          {/* Filter Tabs */}
          <section className="py-8 border-b border-border bg-background/50 backdrop-blur-sm sticky top-20 z-40">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-secondary/50 text-foreground hover:bg-secondary hover:shadow-sm"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredItems.length}</span> {filteredItems.length === 1 ? 'project' : 'projects'}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl cursor-pointer hover-scale fade-in bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300"
                    style={{ animationDelay: `${index * 0.05}s` }}
                    onClick={() => setSelectedImage(galleryItems.indexOf(item))}
                  >
                    <div className="aspect-square overflow-hidden bg-secondary/20">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <div>
                        <span className="inline-block px-3 py-1 bg-background/20 backdrop-blur-sm rounded-full text-background text-xs font-medium mb-3 uppercase tracking-wider">
                          {item.category}
                        </span>
                        <h3 className="text-background text-xl font-heading font-bold mb-2">View Full Project</h3>
                        <p className="text-background/90 text-sm line-clamp-2">{item.alt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg">No projects found in this category.</p>
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-background/98 backdrop-blur-lg">
          {selectedImage !== null && (
            <div className="relative">
              <div className="relative bg-black/50 flex items-center justify-center min-h-[60vh] max-h-[85vh]">
                <img
                  src={galleryItems[selectedImage].src}
                  alt={galleryItems[selectedImage].alt}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
              </div>
              <div className="p-6 bg-background">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium mb-3 uppercase tracking-wider">
                      {galleryItems[selectedImage].category}
                    </span>
                    <p className="text-foreground text-base leading-relaxed">{galleryItems[selectedImage].alt}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryItems.length - 1);
                      }}
                      className="px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-sm font-medium"
                    >
                      Previous
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(selectedImage < galleryItems.length - 1 ? selectedImage + 1 : 0);
                      }}
                      className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors text-sm font-medium"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
