import { useEffect, useState } from 'react';
import { Users, Globe, Zap, Award } from 'lucide-react';

const Stats = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    cities: 0,
    uptime: 0,
    speed: 0
  });

  const finalValues = {
    customers: 50000,
    cities: 500,
    uptime: 99.9,
    speed: 1000
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        customers: Math.min(prev.customers + finalValues.customers / steps, finalValues.customers),
        cities: Math.min(prev.cities + finalValues.cities / steps, finalValues.cities),
        uptime: Math.min(prev.uptime + finalValues.uptime / steps, finalValues.uptime),
        speed: Math.min(prev.speed + finalValues.speed / steps, finalValues.speed)
      }));
    }, increment);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      value: Math.round(counters.customers).toLocaleString(),
      suffix: '+',
      label: 'Happy Customers',
      description: 'Trusted by households and businesses'
    },
    {
      icon: Globe,
      value: Math.round(counters.cities),
      suffix: '+',
      label: 'Cities Served',
      description: 'Expanding nationwide coverage'
    },
    {
      icon: Award,
      value: counters.uptime.toFixed(1),
      suffix: '%',
      label: 'Network Uptime',
      description: 'Industry-leading reliability'
    },
    {
      icon: Zap,
      value: Math.round(counters.speed),
      suffix: ' Mbps',
      label: 'Max Speed',
      description: 'Lightning-fast fiber internet'
    }
  ];

  return (
    <section className="py-20 bg-onyx-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-orb opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Trusted by
            <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Thousands</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Join the growing community of satisfied customers who've made the switch to fiber.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center hover:shadow-neon/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-onyx-base" />
              </div>
              <div className="text-4xl font-bold text-neon-orange mb-2">
                {stat.value}{stat.suffix}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">{stat.label}</h3>
              <p className="text-text-secondary text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;