
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Car } from '../types/Car';
import { ShoppingCart, Star, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

interface CarCardProps {
  car: Car;
  className?: string;
}

const CarCard: React.FC<CarCardProps> = ({ car, className = "" }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(car);
    toast({
      title: "Added to Cart",
      description: `${car.name} has been added to your cart.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'In Stock': return 'bg-green-500';
      case 'Limited': return 'bg-yellow-500';
      case 'Pre-Order': return 'bg-blue-500';
      case 'Sold Out': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className={`group relative overflow-hidden hover-lift bg-card border-border ${className}`}>
      <Link to={`/car/${car.id}`}>
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Overlay Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {car.isNew && (
              <Badge className="bg-luxury-gold text-black font-bold">NEW</Badge>
            )}
            {car.isFeatured && (
              <Badge variant="secondary" className="bg-black/80 text-white">
                <Star className="w-3 h-3 mr-1" />
                FEATURED
              </Badge>
            )}
            {car.discount && (
              <Badge variant="destructive" className="bg-red-500 text-white">
                -{car.discount}%
              </Badge>
            )}
          </div>

          {/* Top Right Actions */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 text-black hover:bg-white"
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>

          {/* Availability Badge */}
          <div className="absolute bottom-3 left-3">
            <Badge className={`${getAvailabilityColor(car.availability)} text-white`}>
              {car.availability}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4">
          {/* Brand and Year */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-luxury-gold">{car.brand}</span>
            <span className="text-sm text-muted-foreground">{car.year}</span>
          </div>

          {/* Car Name */}
          <h3 className="font-luxury font-semibold text-lg mb-2 group-hover:text-luxury-gold transition-colors">
            {car.name}
          </h3>

          {/* Key Specs */}
          <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3" />
              {car.specifications.horsepower}
            </div>
            <div>{car.specifications.acceleration}</div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium ml-1">{car.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({car.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">
                {formatPrice(car.price)}
              </span>
              {car.originalPrice && car.originalPrice > car.price && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(car.originalPrice)}
                </span>
              )}
            </div>
            {car.originalPrice && car.originalPrice > car.price && (
              <span className="text-sm text-green-600 font-medium">
                Save {formatPrice(car.originalPrice - car.price)}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold"
            disabled={car.availability === 'Sold Out'}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {car.availability === 'Sold Out' ? 'Sold Out' : 'Add to Cart'}
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default CarCard;
