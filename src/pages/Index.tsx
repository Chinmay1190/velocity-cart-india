
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedCars from '../components/FeaturedCars';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCars />
    </div>
  );
};

export default Index;
