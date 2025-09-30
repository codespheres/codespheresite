import { Wifi, Zap, Building, Tv, Wrench, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Fiber Internet",
      description: "Lightning-fast speeds up to 1 Gig with 99.9% uptime guarantee.",
      highlights: ["Up to 1000 Mbps", "Symmetrical upload/download", "No data caps"]
    },
    {
      icon: Wifi,
      title: "Home Wi-Fi Setup",
      description: "Professional installation and optimization for whole-home coverage.",
      highlights: ["Mesh network setup", "Device optimization", "Dead zone elimination"]
    },
    {
      icon: Building,
      title: "Business Internet",
      description: "Enterprise-grade solutions with dedicated support and SLA.",
      highlights: ["Dedicated bandwidth", "Priority support", "Static IP available"]
    },
    {
      icon: Tv,
      title: "TV & Streaming",
      description: "4K streaming packages with premium channels and streaming apps.",
      highlights: ["200+ channels", "4K HDR quality", "Cloud DVR included"]
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Certified technicians ensure optimal performance from day one.",
      highlights: ["Same-day installation", "Equipment included", "30-day guarantee"]
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support with real human experts.",
      highlights: ["US-based support", "Average 2min hold time", "Remote diagnostics"]
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Everything You Need for
            <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Connected Living</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From blazing-fast internet to comprehensive support, we've got your entire digital ecosystem covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 group hover:shadow-neon transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center mb-4 group-hover:shadow-neon transition-all duration-300">
                <feature.icon className="w-6 h-6 text-onyx-base" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {feature.title}
              </h3>
              
              <p className="text-text-secondary mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-sm text-text-muted">
                    <div className="w-1.5 h-1.5 bg-neon-orange rounded-full mr-3"></div>
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant="outline"
                className="w-full glass-card border-glass-border hover:border-neon-orange hover:text-neon-orange transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            onClick={() => window.location.href = '/contact'}
            className="neon-button px-8 py-4 text-lg font-bold cursor-pointer"
          >
            Get Started Today
          </Button>
          <p className="text-text-muted mt-4">
            Professional installation available as early as tomorrow
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;