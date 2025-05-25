
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-luxury-carbon text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-luxury font-bold mb-4">
              Stay Updated with <span className="text-gradient">SuperCars</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get exclusive access to new arrivals, special offers, and automotive insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-r from-luxury-gold to-luxury-gold-light rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">S</span>
                </div>
                <div>
                  <span className="text-xl font-luxury font-bold text-gradient">SuperCars</span>
                  <p className="text-xs text-muted-foreground">Luxury Collection</p>
                </div>
              </Link>
              <p className="text-muted-foreground">
                India's premier destination for luxury supercars. Experience automotive excellence crafted for the extraordinary.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-luxury-gold">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-luxury-gold">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-luxury-gold">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-luxury-gold">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/cars" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    All Cars
                  </Link>
                </li>
                <li>
                  <Link to="/brands" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Brands
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Shopping Cart
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-muted-foreground hover:text-luxury-gold transition-colors cursor-pointer">
                    Sports Cars
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground hover:text-luxury-gold transition-colors cursor-pointer">
                    Hypercars
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground hover:text-luxury-gold transition-colors cursor-pointer">
                    Electric Cars
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground hover:text-luxury-gold transition-colors cursor-pointer">
                    Luxury Cars
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground hover:text-luxury-gold transition-colors cursor-pointer">
                    Classic Cars
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    123 Luxury Avenue, Mumbai, Maharashtra 400001, India
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    +91 98765 43210
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    info@supercars.in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} SuperCars Luxury Collection. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/shipping" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                Shipping Policy
              </Link>
              <Link to="/returns" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                Returns & Refunds
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
