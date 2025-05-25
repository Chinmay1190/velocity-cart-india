
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Zap, Crown, Sparkles, Timer, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Categories: React.FC = () => {
  const categories = [
    {
      id: 'sports',
      name: 'Sports Cars',
      description: 'High-performance vehicles designed for speed and agility',
      icon: Car,
      count: 18,
      image: '/placeholder.svg',
      color: 'from-red-500 to-orange-500',
      features: ['High Speed', 'Aerodynamic Design', 'Racing Heritage']
    },
    {
      id: 'hypercar',
      name: 'Hypercars',
      description: 'The ultimate expression of automotive engineering',
      icon: Sparkles,
      count: 12,
      image: '/placeholder.svg',
      color: 'from-purple-500 to-pink-500',
      features: ['Extreme Performance', 'Limited Production', 'Cutting-edge Tech']
    },
    {
      id: 'luxury',
      name: 'Luxury Cars',
      description: 'Premium comfort meets exceptional performance',
      icon: Crown,
      count: 15,
      image: '/placeholder.svg',
      color: 'from-yellow-500 to-orange-500',
      features: ['Premium Interior', 'Advanced Features', 'Smooth Ride']
    },
    {
      id: 'electric',
      name: 'Electric Cars',
      description: 'Sustainable supercars for the future',
      icon: Zap,
      count: 10,
      image: '/placeholder.svg',
      color: 'from-green-500 to-emerald-500',
      features: ['Zero Emissions', 'Instant Torque', 'Quiet Operation']
    },
    {
      id: 'classic',
      name: 'Classic Cars',
      description: 'Timeless beauties with heritage and character',
      icon: Timer,
      count: 12,
      image: '/placeholder.svg',
      color: 'from-blue-500 to-indigo-500',
      features: ['Vintage Design', 'Collectible Value', 'Automotive History']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-luxury-carbon to-luxury-carbon-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-luxury font-bold mb-6">
              Car <span className="text-gradient">Categories</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Explore our curated collection of supercars by category
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Card key={category.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover mix-blend-overlay opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 left-4">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {category.count} Cars
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-luxury font-bold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {category.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to={`/cars?category=${category.id}`}>
                      <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold group">
                        Explore {category.name}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-luxury font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team of experts can help you find the perfect supercar that matches your specific requirements and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold">
                  Contact Our Experts
                </Button>
              </Link>
              <Link to="/cars">
                <Button size="lg" variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black">
                  View All Cars
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
