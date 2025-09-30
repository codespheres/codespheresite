import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1(877) 654-9321",
      subtext: "Available 24/7 for support"
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: "support@codespheres.com",
      subtext: "We respond within 4 hours"
    },
    {
      icon: MapPin,
      title: "Service Areas",
      details: "500+ Cities Nationwide",
      subtext: "Check availability in your area"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "24/7 Customer Support",
      subtext: "Sales: Mon-Fri 8AM-8PM EST"
    }
  ];

  const quickFAQs = [
    {
      question: "How quickly can I get connected?",
      answer: "Most installations are completed within 24-48 hours of scheduling."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees! Installation and equipment are included with all plans."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time with no fees."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-orb opacity-20"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl font-black text-text-primary mb-6">
                Get in
                <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Touch</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Ready to upgrade your internet experience? Our expert team is here to help you find the perfect solution.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="glass-card p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Send us a Message</h2>
                  <p className="text-text-secondary mb-4">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  <div className="p-4 bg-neon-orange/10 border border-neon-orange/20 rounded-lg">
                    <p className="text-text-primary font-semibold">Need immediate assistance?</p>
                    <a 
                      href="tel:+18776549321" 
                      className="text-neon-orange hover:text-neon-light transition-colors font-bold text-lg cursor-pointer select-none"
                    >
                      Call +1(877) 654-9321
                    </a>
                  </div>
                </div>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Thank You!</h3>
                    <p className="text-text-secondary mb-4">
                      Your message has been sent successfully. We'll get back to you within 4 hours.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="glass-card border-glass-border hover:border-neon-orange hover:text-neon-orange"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-onyx-lighter border-glass-border focus:border-neon-orange text-text-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-onyx-lighter border-glass-border focus:border-neon-orange text-text-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-onyx-lighter border-glass-border focus:border-neon-orange text-text-primary"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-onyx-lighter border-glass-border focus:border-neon-orange text-text-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your internet needs..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-onyx-lighter border-glass-border focus:border-neon-orange text-text-primary min-h-32"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="neon-button w-full py-3 font-semibold"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="glass-card p-6 hover:shadow-neon/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-onyx-base" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">{info.title}</h3>
                    {info.title === "Call Us" ? (
                      <a href="tel:+18776549321" className="text-neon-orange font-semibold mb-1 hover:text-neon-light transition-colors block cursor-pointer select-none">
                        {info.details}
                      </a>
                    ) : info.title === "Email Us" ? (
                      <a href={`mailto:${info.details}`} className="text-neon-orange font-semibold mb-1 hover:text-neon-light transition-colors block">
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-neon-orange font-semibold mb-1">{info.details}</p>
                    )}
                    <p className="text-text-muted text-sm">{info.subtext}</p>
                  </div>
                ))}
              </div>

              {/* Coverage Illustration */}
              <div className="glass-card p-8 text-center">
                <div className="w-24 h-24 bg-gradient-orb rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-4xl">🗺️</div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Check Coverage</h3>
                <p className="text-text-secondary mb-4">
                  Enter your address to see available speeds and plans in your area.
                </p>
                <Button className="neon-button px-6">
                  Check My Address
                </Button>
              </div>

              {/* Quick FAQs */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-neon-orange" />
                  Quick Questions
                </h3>
                <div className="space-y-4">
                  {quickFAQs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-text-primary text-sm mb-1">
                        {faq.question}
                      </h4>
                      <p className="text-text-secondary text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;