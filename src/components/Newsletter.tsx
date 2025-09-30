import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-orb opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 lg:p-16 text-center">
            <div className="w-20 h-20 bg-gradient-neon rounded-full flex items-center justify-center mx-auto mb-8">
              <Mail className="w-10 h-10 text-onyx-base" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Stay
              <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Connected</span>
            </h2>
            
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Get the latest updates on new coverage areas, exclusive offers, and expert tips 
              to optimize your internet experience.
            </p>

            {isSubscribed ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6">
                <p className="text-green-400 font-semibold">
                  🎉 Thanks for subscribing! Check your email for a welcome message.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-onyx-lighter border-glass-border focus:border-neon-orange text-text-primary"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="neon-button whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}

            <p className="text-text-muted text-sm mt-6">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;