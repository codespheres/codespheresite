import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-card backdrop-blur-xl border-b border-glass-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 bg-gradient-neon rounded-full animate-glow-pulse"></div>
              <div className="absolute inset-1 bg-onyx-base rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-neon-orange">C</span>
              </div>
            </div>
            <span className="text-xl font-bold text-text-primary">Code Spheres</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text-secondary hover:text-neon-orange transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-neon transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="tel:+18776549321" 
              className="neon-button px-6 py-2 font-semibold inline-flex items-center cursor-pointer rounded-md select-none"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call +1(877) 654-9321
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-neon-orange transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-card backdrop-blur-xl border-t border-glass-border">
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-text-secondary hover:text-neon-orange transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="tel:+18776549321"
                className="neon-button px-6 py-2 font-semibold mt-4 inline-flex items-center cursor-pointer rounded-md select-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call +1(877) 654-9321
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;