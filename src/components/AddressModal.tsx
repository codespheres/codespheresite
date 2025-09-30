import { useState } from 'react';
import { X, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddressModal = ({ isOpen, onClose }: AddressModalProps) => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock availability check
    alert('Great news! High-speed fiber is available in your area. Our team will contact you within 24 hours.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-onyx-base/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative glass-card p-8 w-full max-w-md mx-4 animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-neon rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-onyx-base" />
            </div>
            <h2 className="text-xl font-bold text-text-primary">Check Availability</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-text-muted hover:text-neon-orange transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-text-secondary mb-2">
              Street Address
            </label>
            <Input
              id="address"
              type="text"
              placeholder="123 Main Street"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-onyx-lighter border-glass-border focus:border-neon-orange text-text-primary"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-text-secondary mb-2">
                City
              </label>
              <Input
                id="city"
                type="text"
                placeholder="New York"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-onyx-lighter border-glass-border focus:border-neon-orange text-text-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-text-secondary mb-2">
                State
              </label>
              <Input
                id="state"
                type="text"
                placeholder="NY"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="bg-onyx-lighter border-glass-border focus:border-neon-orange text-text-primary"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-text-secondary mb-2">
              ZIP Code
            </label>
            <Input
              id="zipCode"
              type="text"
              placeholder="10001"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="bg-onyx-lighter border-glass-border focus:border-neon-orange text-text-primary"
              required
            />
          </div>

          <Button 
            type="submit"
            className="neon-button w-full py-3 font-semibold flex items-center justify-center space-x-2"
          >
            <Search className="w-4 h-4" />
            <span>Check Coverage</span>
          </Button>
        </form>

        <p className="text-xs text-text-muted text-center mt-4">
          We'll check availability and contact you within 24 hours with personalized options.
        </p>
      </div>
    </div>
  );
};

export default AddressModal;