import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Small Business Owner",
      location: "Austin, TX",
      avatar: "SC",
      rating: 5,
      quote: "Code Spheres transformed our business operations. The 1 Gig speed allows us to work seamlessly with clients worldwide. Their support team is absolutely phenomenal!",
      highlight: "1 Gig speed"
    },
    {
      name: "Michael Rodriguez",
      role: "Remote Software Developer",
      location: "Denver, CO", 
      avatar: "MR",
      rating: 5,
      quote: "Finally found an ISP that understands tech professionals. Zero downtime, symmetric speeds, and they actually know what they're talking about. Worth every penny.",
      highlight: "Zero downtime"
    },
    {
      name: "Jennifer Park",
      role: "Family of 5",
      location: "Seattle, WA",
      avatar: "JP",
      rating: 5,
      quote: "With three kids streaming, gaming, and attending virtual school, our old provider couldn't keep up. Code Spheres handles everything without a single hiccup.",
      highlight: "No hiccups"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Customer
            <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Voices</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real stories from real customers who've experienced the Code Spheres difference.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-neon-orange opacity-20">
              <Quote size={40} />
            </div>

            {/* Star Rating */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-neon-orange fill-current" />
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-text-primary text-center leading-relaxed mb-8 font-medium">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center text-onyx-base font-bold text-lg">
                {currentTestimonial.avatar}
              </div>

              {/* Details */}
              <div className="text-center md:text-left">
                <h4 className="text-lg font-bold text-text-primary">
                  {currentTestimonial.name}
                </h4>
                <p className="text-text-secondary">
                  {currentTestimonial.role}
                </p>
                <p className="text-text-muted text-sm">
                  {currentTestimonial.location}
                </p>
              </div>

              {/* Highlight Badge */}
              <div className="glass-card px-4 py-2 border border-neon-orange/30">
                <span className="text-neon-orange font-semibold text-sm">
                  {currentTestimonial.highlight}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="glass-card p-3 hover:border-neon-orange transition-colors duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-text-secondary group-hover:text-neon-orange" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-neon-orange w-8' 
                      : 'bg-glass-border hover:bg-neon-orange/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="glass-card p-3 hover:border-neon-orange transition-colors duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-text-secondary group-hover:text-neon-orange" />
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-orange mb-2">99.9%</div>
            <div className="text-text-secondary">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-orange mb-2">24/7</div>
            <div className="text-text-secondary">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-orange mb-2">50K+</div>
            <div className="text-text-secondary">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;