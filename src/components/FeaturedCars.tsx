
import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import CarCard from './CarCard';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedCars: React.FC = () => {
  const featuredCars = cars.filter(car => car.isFeatured).slice(0, 6);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-luxury-gold/10 border border-luxury-gold/20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-luxury-gold">FEATURED COLLECTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
            Extraordinary <span className="text-gradient">Machines</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked selection of the most sought-after supercars, 
            each representing the pinnacle of automotive artistry and performance.
          </p>
        </div>

        {/* Featured Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car, index) => (
            <div 
              key={car.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/cars">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black px-8 py-3 text-lg group"
            >
              View All Supercars
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
