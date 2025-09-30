import { useState } from 'react';
import { Check, Star, Zap, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for everyday browsing and streaming",
      monthlyPrice: 39.99,
      annualPrice: 35.99,
      speed: "100 Mbps",
      features: [
        "100 Mbps download/upload",
        "Unlimited data",
        "Basic Wi-Fi equipment",
        "Standard installation",
        "24/7 customer support"
      ],
      popular: false,
      gradient: "from-glass-border to-onyx-lighter"
    },
    {
      name: "Pro",
      description: "Ideal for families and remote work",
      monthlyPrice: 59.99,
      annualPrice: 53.99,
      speed: "500 Mbps",
      features: [
        "500 Mbps download/upload",
        "Unlimited data",
        "Advanced Wi-Fi 6 equipment",
        "Priority installation",
        "24/7 priority support",
        "Free security suite"
      ],
      popular: true,
      gradient: "from-neon-orange to-neon-light"
    },
    {
      name: "Ultra",
      description: "Maximum performance for power users",
      monthlyPrice: 79.99,
      annualPrice: 71.99,
      speed: "1 Gig",
      features: [
        "1000 Mbps download/upload",
        "Unlimited data",
        "Premium mesh system",
        "White-glove installation",
        "Dedicated support line",
        "Advanced security suite",
        "Static IP available"
      ],
      popular: false,
      gradient: "from-violet-rim to-violet-glow"
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Simple, Transparent
            <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            No hidden fees, no contracts, no surprises. Just fast, reliable internet at prices that make sense.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center glass-card p-1 rounded-full">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-gradient-neon text-onyx-base' 
                  : 'text-text-secondary hover:text-neon-orange'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 relative ${
                isAnnual 
                  ? 'bg-gradient-neon text-onyx-base' 
                  : 'text-text-secondary hover:text-neon-orange'
              }`}
            >
              Annual
              {isAnnual && (
                <span className="absolute -top-2 -right-2 bg-violet-rim text-white text-xs px-2 py-1 rounded-full font-bold">
                  Save 10%
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`glass-card p-8 relative group hover:shadow-neon transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-neon-orange shadow-neon' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-neon px-4 py-2 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-onyx-base fill-current" />
                    <span className="text-sm font-bold text-onyx-base">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                <p className="text-text-secondary text-sm">{plan.description}</p>
              </div>

              {/* Speed Badge */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center glass-card px-4 py-2 rounded-full">
                  <span className="text-2xl font-bold text-neon-orange mr-2">{plan.speed}</span>
                  <span className="text-text-secondary text-sm">up/down</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-text-primary">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-text-secondary ml-2">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-text-muted mt-1">
                    Billed annually • Save ${((plan.monthlyPrice - plan.annualPrice) * 12).toFixed(0)}/year
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-neon-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                onClick={() => window.location.href = '/contact'}
                className={`w-full py-3 font-semibold transition-all duration-300 cursor-pointer ${
                  plan.popular 
                    ? 'neon-button' 
                    : 'glass-card border-glass-border hover:border-neon-orange hover:text-neon-orange'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-text-muted text-sm mb-6">
            All plans include professional installation • No contracts • 30-day money-back guarantee
          </p>
          
          {/* Phone CTA */}
          <div className="mt-8">
            <p className="text-text-primary font-semibold mb-4">Need help choosing the right plan?</p>
            <a 
              href="tel:+18776549321"
              className="bg-gradient-to-r from-neon-orange to-neon-light hover:shadow-neon/50 text-black font-semibold inline-flex items-center cursor-pointer h-11 rounded-md px-8 py-2 text-sm font-medium select-none"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Our Experts: +1(877) 654-9321
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;