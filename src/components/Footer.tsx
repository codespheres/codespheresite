import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Fiber Internet', href: '/contact' },
      { label: 'Business Plans', href: '/contact' },
      { label: 'Home Installation', href: '/contact' },
      { label: 'Technical Support', href: '/contact' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Coverage Areas', href: '/contact' },
      { label: 'Careers', href: '/contact' },
      { label: 'Press', href: '/contact' }
    ],
    support: [
      { label: 'Help Center', href: '/contact' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Service Status', href: '/contact' },
      { label: 'Blog', href: '/blog' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '/refund' },
     
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: '' },
    { icon: Twitter, href: '#', label: '' },
    { icon: Instagram, href: '#', label: '' },
    { icon: Linkedin, href: '#', label: '' }
  ];

  return (
    <footer className="bg-onyx-light border-t border-glass-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 bg-gradient-neon rounded-full animate-glow-pulse"></div>
                <div className="absolute inset-1 bg-onyx-base rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-neon-orange">C</span>
                </div>
              </div>
              <span className="text-xl font-bold text-text-primary">Code Spheres</span>
            </div>
            
            <p className="text-text-secondary mb-6 max-w-sm">
              Experience the future of internet connectivity with our cutting-edge fiber network. 
              Fast, reliable, and built for the modern world.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-text-muted">
                <Phone className="w-4 h-4 mr-3 text-neon-orange" />
                <a 
                  href="tel:+18776549321" 
                  className="text-sm hover:text-neon-orange transition-colors cursor-pointer select-none"
                >
                  +1(877) 654-9321
                </a>
              </div>
              
              <div className="flex items-center text-text-muted">
                <MapPin className="w-4 h-4 mr-3 text-neon-orange" />
                <span className="text-sm">Available in 500+ cities nationwide</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-text-secondary hover:text-neon-orange transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-text-secondary hover:text-neon-orange transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-text-secondary hover:text-neon-orange transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-text-secondary hover:text-neon-orange transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-glass-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-text-muted text-sm">
              © {currentYear} Code Spheres. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 glass-card flex items-center justify-center hover:border-neon-orange transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-text-secondary group-hover:text-neon-orange transition-colors" />
                </a>
              ))}
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm text-text-muted">
              <a href="#sitemap" className="hover:text-neon-orange transition-colors">
                Sitemap
              </a>
              <a href="#accessibility" className="hover:text-neon-orange transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;