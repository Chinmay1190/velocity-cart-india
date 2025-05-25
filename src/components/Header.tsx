
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, Menu, X, Sun, Moon, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { getItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const itemCount = getItemCount();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-luxury-gold to-luxury-gold-light rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-black font-bold text-xl">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-luxury font-bold text-gradient">SuperCars</span>
              <p className="text-xs text-muted-foreground">Luxury Collection</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-luxury-gold transition-colors font-medium">
              Home
            </Link>
            <Link to="/cars" className="text-foreground hover:text-luxury-gold transition-colors font-medium">
              All Cars
            </Link>
            <Link to="/brands" className="text-foreground hover:text-luxury-gold transition-colors font-medium">
              Brands
            </Link>
            <Link to="/about" className="text-foreground hover:text-luxury-gold transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-luxury-gold transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="hover:bg-accent"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-accent"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 min-w-[20px] h-5 flex items-center justify-center bg-luxury-gold text-black text-xs font-bold">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-accent"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 min-w-[20px] h-5 flex items-center justify-center bg-luxury-gold text-black text-xs font-bold">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="hover:bg-accent"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-fade-in">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search supercars..."
                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-luxury-gold transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/cars" 
                className="text-foreground hover:text-luxury-gold transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                All Cars
              </Link>
              <Link 
                to="/brands" 
                className="text-foreground hover:text-luxury-gold transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Brands
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-luxury-gold transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-luxury-gold transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black">
                  Sign In
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
