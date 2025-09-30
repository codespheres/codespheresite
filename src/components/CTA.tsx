import { ArrowRight, Zap, Shield, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-orb opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-orange to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-neon-orange/10 rounded-full animate-float"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-violet-rim/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center glass-card px-4 py-2 rounded-full mb-6 border border-neon-orange/30">
              <Zap className="w-4 h-4 text-neon-orange mr-2" />
              <span className="text-sm font-medium text-neon-orange">Get Your Authority</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight">
              Ready to Experience
              <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> True Speed?</span>
            </h2>

            {/* Subheading */}
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who've made the switch to fiber internet that actually works.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="glass-card px-4 py-2 flex items-center space-x-2 border border-neon-orange/20">
                <Shield className="w-4 h-4 text-neon-orange" />
                <span className="text-sm font-medium text-text-primary">No Contracts</span>
              </div>
              <div className="glass-card px-4 py-2 flex items-center space-x-2 border border-neon-orange/20">
                <Clock className="w-4 h-4 text-neon-orange" />
                <span className="text-sm font-medium text-text-primary">Free Installation</span>
              </div>
              <div className="glass-card px-4 py-2 flex items-center space-x-2 border border-neon-orange/20">
                <Zap className="w-4 h-4 text-neon-orange" />
                <span className="text-sm font-medium text-text-primary">30-Day Guarantee</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a 
                href="/contact"
                className="neon-button px-8 py-4 text-lg font-bold flex items-center space-x-2 group cursor-pointer rounded-md"
              >
                <span>Get My Authority Guide</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="tel:+18776549321"
                className="glass-card border-glass-border hover:border-neon-orange px-8 py-4 text-lg font-semibold text-text-primary hover:text-neon-orange transition-all duration-300 inline-flex items-center cursor-pointer rounded-md border select-none"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1(877) 654-9321
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-text-muted">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-orange rounded-full animate-glow-pulse"></div>
                <span className="text-sm">Available in 500+ cities</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-orange rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm">50,000+ satisfied customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-orange rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-sm">99.9% uptime guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;