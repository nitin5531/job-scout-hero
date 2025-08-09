import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Briefcase } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', { searchQuery, location, category });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Find Your Dream
              <span className="block text-secondary"> Career in India</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discover thousands of job opportunities from top companies across India. 
              Your next career milestone awaits.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-secondary">50K+</div>
              <div className="text-white/80">Active Jobs</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-secondary">10K+</div>
              <div className="text-white/80">Companies</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-secondary">1M+</div>
              <div className="text-white/80">Job Seekers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};