
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Multiple Supercars */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60 z-10" />
        {/* Main background - Lamborghini */}
        <img
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop"
          alt="Luxury Supercar"
          className="w-full h-full object-cover"
        />
        {/* Additional background elements for visual depth */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-30">
          <img
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=1200&fit=crop"
            alt="Ferrari"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=600&h=800&fit=crop"
            alt="McLaren"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Floating Supercar Elements */}
      <div className="absolute top-20 right-10 opacity-10 animate-float">
        <img
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop"
          alt="Floating Car"
          className="w-32 h-24 object-cover rounded-lg"
        />
      </div>
      
      <div className="absolute bottom-20 right-1/4 opacity-15 animate-pulse">
        <img
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop"
          alt="Sports Car"
          className="w-28 h-20 object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Award className="w-4 h-4 text-luxury-gold" />
            <span className="text-sm font-medium">India's Premier Supercar Collection</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-luxury font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Luxury</span>
            <br />
            <span className="text-white">Redefined</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in">
            Experience the world's most exclusive supercars. From Ferrari to Lamborghini, 
            discover automotive excellence crafted for the extraordinary.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-12 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">65+</div>
              <div className="text-sm text-gray-300">Premium Cars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">15+</div>
              <div className="text-sm text-gray-300">Luxury Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">100%</div>
              <div className="text-sm text-gray-300">Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Link to="/cars">
              <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 py-3 text-lg">
                Explore Collection
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in">
            <div className="glass-effect rounded-lg p-6 text-center backdrop-blur-lg">
              <Zap className="w-8 h-8 text-luxury-gold mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-300">Experience acceleration from 0-100 km/h in under 3 seconds</p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center backdrop-blur-lg">
              <Award className="w-8 h-8 text-luxury-gold mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Award Winning</h3>
              <p className="text-sm text-gray-300">Each vehicle represents pinnacle automotive engineering</p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center backdrop-blur-lg">
              <Shield className="w-8 h-8 text-luxury-gold mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Guaranteed Quality</h3>
              <p className="text-sm text-gray-300">Comprehensive warranty and premium service support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-luxury-gold/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-20 w-16 h-16 bg-luxury-gold/5 rounded-full animate-bounce"></div>
    </section>
  );
};

export default HeroSection;
