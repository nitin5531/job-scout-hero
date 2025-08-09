import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { LocationFilter } from '@/components/LocationFilter';
import { FeaturedJobs } from '@/components/FeaturedJobs';
import { Footer } from '@/components/Footer';

interface IndexProps {
  onLogin: (user: { name: string; email: string; avatar?: string }) => void;
}

const Index = ({ onLogin }: IndexProps) => {
  const navigate = useNavigate();

  const handleAuthSuccess = (user: { name: string; email: string; avatar?: string }) => {
    onLogin(user);
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <LocationFilter />
      <FeaturedJobs />
      <Footer />
    </div>
  );
};

export default Index;
