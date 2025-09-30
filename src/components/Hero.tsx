import { useState, useEffect } from 'react';
import { ChevronRight, Zap, Shield, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AddressModal from './AddressModal';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedText, setAnimatedText] = useState('');
  
  const mainHeadline = "YOUR SPEED. YOUR AUTHORITY.";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= mainHeadline.length) {
        setAnimatedText(mainHeadline.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with orb effects */}
      <div className="absolute inset-0 bg-gradient-orb opacity-60"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-orange rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline with Animation */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-text-primary mb-6 leading-tight">
            <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent">
              {animatedText}
            </span>
            <span className="animate-glow-pulse text-neon-orange"></span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-text-secondary mb-4 font-medium animate-fade-in-up">
            Fast, Reliable Internet—Powered for Home & Business
          </p>
          
          <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto animate-fade-in-up">
            Experience lightning-fast fiber speeds up to 1 Gig with professional installation, 
            24/7 support, and no hidden fees. Join thousands of satisfied customers.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
            <div className="glass-card px-4 py-2 flex items-center space-x-2">
              <Zap className="w-4 h-4 text-neon-orange" />
              <span className="text-sm font-medium text-text-primary">Up to 1 Gig Speed</span>
            </div>
            <div className="glass-card px-4 py-2 flex items-center space-x-2">
              <Shield className="w-4 h-4 text-neon-orange" />
              <span className="text-sm font-medium text-text-primary">99.9% Uptime</span>
            </div>
            <div className="glass-card px-4 py-2 flex items-center space-x-2">
              <Clock className="w-4 h-4 text-neon-orange" />
              <span className="text-sm font-medium text-text-primary">24/7 Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="neon-button px-8 py-4 text-lg font-bold flex items-center space-x-2 group rounded-md"
            >
              <span>Check Availability</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="tel:+18776549321"
              className="glass-card border-glass-border hover:border-neon-orange px-8 py-4 text-lg font-semibold text-text-primary hover:text-neon-orange transition-all duration-300 inline-flex items-center cursor-pointer rounded-md border select-none"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1(877) 654-9321
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in-up">
            <p className="text-text-muted mb-6">Trusted by leading providers</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              {['Verizon', 'AT&T', 'Xfinity', 'Spectrum', 'Cox'].map((provider) => (
                <div key={provider} className="text-text-muted font-semibold hover:text-neon-orange transition-colors">
                  {provider}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Address Modal */}
      <AddressModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;