import { useEffect, useState } from 'react';
import { Users, Target, Award, TrendingUp, MapPin, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const About = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    cities: 0,
    uptime: 0,
    years: 0
  });

  const finalValues = {
    customers: 50000,
    cities: 500,
    uptime: 99.9,
    years: 8
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        customers: Math.min(prev.customers + finalValues.customers / steps, finalValues.customers),
        cities: Math.min(prev.cities + finalValues.cities / steps, finalValues.cities),
        uptime: Math.min(prev.uptime + finalValues.uptime / steps, finalValues.uptime),
        years: Math.min(prev.years + finalValues.years / steps, finalValues.years)
      }));
    }, increment);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  const whyChooseUs = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "To democratize high-speed internet access and empower communities through reliable connectivity."
    },
    {
      icon: Users,
      title: "Customer-First",
      description: "Every decision we make is centered around delivering exceptional customer experiences and support."
    },
    {
      icon: Award,
      title: "Industry-Leading",
      description: "Recognized for innovation, reliability, and customer satisfaction across the telecommunications industry."
    },
    {
      icon: TrendingUp,
      title: "Future-Ready",
      description: "Continuously investing in next-generation infrastructure to stay ahead of tomorrow's demands."
    }
  ];

  const milestones = [
    {
      year: "2016",
      title: "Company Founded",
      description: "Started with a vision to bring fiber internet to underserved communities."
    },
    {
      year: "2018",
      title: "First 1000 Customers",
      description: "Reached our first major milestone with exceptional customer satisfaction scores."
    },
    {
      year: "2020",
      title: "Multi-State Expansion",
      description: "Expanded operations across 5 states during the work-from-home revolution."
    },
    {
      year: "2022",
      title: "50,000 Customers",
      description: "Became one of the fastest-growing fiber providers in the nation."
    },
    {
      year: "2024",
      title: "500+ Cities",
      description: "Now serving over 500 cities with plans for continued expansion."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Former Verizon executive with 15+ years in telecommunications infrastructure.",
      initials: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer", 
      bio: "Network architecture expert who designed fiber systems for Fortune 500 companies.",
      initials: "MR"
    },
    {
      name: "Jennifer Park",
      role: "Head of Customer Experience",
      bio: "Customer service innovator focused on delivering world-class support experiences.",
      initials: "JP"
    },
    {
      name: "David Kim",
      role: "VP of Operations",
      bio: "Operations specialist who scaled fiber deployments across multiple metropolitan areas.",
      initials: "DK"
    }
  ];

  const partners = [
    "Verizon", "AT&T", "Xfinity", "Spectrum", "Cox", "Frontier", "CenturyLink", "Optimum"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-orb opacity-30"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl font-black text-text-primary mb-6">
                Why
                <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Code Spheres</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                We're not just another internet provider. We're your partners in building a more connected future, 
                one fiber connection at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-orange mb-2">
                  {Math.round(counters.customers).toLocaleString()}+
                </div>
                <div className="text-text-secondary">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-orange mb-2">
                  {Math.round(counters.cities)}+
                </div>
                <div className="text-text-secondary">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-orange mb-2">
                  {counters.uptime.toFixed(1)}%
                </div>
                <div className="text-text-secondary">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-orange mb-2">
                  {Math.round(counters.years)}
                </div>
                <div className="text-text-secondary">Years Strong</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-text-primary mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Our commitment to excellence goes beyond just providing internet. We're building the foundation for tomorrow's digital world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="glass-card p-8 hover:shadow-neon transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-onyx-base" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-onyx-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Mission */}
              <div className="glass-card p-8 lg:p-12">
                <div className="w-16 h-16 bg-gradient-neon rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-onyx-base" />
                </div>
                <h3 className="text-3xl font-bold text-text-primary mb-4">Our Mission</h3>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  To democratize high-speed internet access and empower communities through reliable, 
                  affordable connectivity that enables education, innovation, and economic growth.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We believe that fast, reliable internet is not a luxury—it's a necessity in today's 
                  digital world. Our mission drives us to bridge the digital divide and ensure that 
                  every community has access to the infrastructure they need to thrive.
                </p>
              </div>

              {/* Vision */}
              <div className="glass-card p-8 lg:p-12">
                <div className="w-16 h-16 bg-gradient-neon rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-onyx-base" />
                </div>
                <h3 className="text-3xl font-bold text-text-primary mb-4">Our Vision</h3>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  To create a fully connected world where geographic location never limits access to 
                  opportunities, education, or innovation through next-generation fiber infrastructure.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We envision communities where students can access world-class education online, 
                  entrepreneurs can build global businesses from anywhere, and families stay connected 
                  regardless of distance—all powered by our reliable fiber network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-onyx-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-text-primary mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                From a small startup to a leading fiber provider, here's how we've grown alongside our customers.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-24 text-right mr-6">
                    <div className="glass-card px-3 py-2 inline-block">
                      <span className="text-neon-orange font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-gradient-neon rounded-full mt-2 mr-6 relative">
                    {index < milestones.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-px h-16 bg-glass-border"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary mb-2">{milestone.title}</h3>
                    <p className="text-text-secondary">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-text-primary mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Led by industry veterans with decades of combined experience in telecommunications and customer service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-neon rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-onyx-base">{member.initials}</span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-1">{member.name}</h3>
                  <p className="text-neon-orange text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-onyx-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-text-secondary">
                We partner with the best to deliver exceptional service
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {partners.map((partner, index) => (
                <div key={index} className="text-text-muted font-semibold hover:text-neon-orange transition-colors">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;