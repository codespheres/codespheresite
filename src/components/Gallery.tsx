import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Modern data center with fiber optic infrastructure" },
    { src: gallery2, alt: "Network infrastructure tower with advanced technology" },
    { src: gallery3, alt: "Professional fiber optic installation service" },
    { src: gallery4, alt: "Smart home connected devices setup" },
    { src: gallery5, alt: "Business office high-speed internet setup" },
    { src: gallery6, alt: "Fiber optic cables with data transmission" },
    // Duplicate for seamless loop
    { src: gallery1, alt: "Modern data center with fiber optic infrastructure" },
    { src: gallery2, alt: "Network infrastructure tower with advanced technology" },
    { src: gallery3, alt: "Professional fiber optic installation service" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Our
            <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Work</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            See our cutting-edge infrastructure and professional installations in action.
          </p>
          
          {/* Add CTA Button */}
                    <Button 
            asChild 
            className="glass-card hover:glass-border border-neon-orange/30 hover:border-neon-orange transition-all duration-300"
          >
            <a 
              href="tel:+18776549321"
              className="flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1(877) 654-9321
            </a>
          </Button>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div className="relative">
        <div className="flex animate-scroll-x">
          {images.map((image, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-80 h-80 mx-4 glass-card overflow-hidden hover:shadow-neon/30 transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Gallery;