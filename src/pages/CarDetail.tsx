
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { useCart } from '../contexts/CartContext';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star, Zap, Gauge, Users, Weight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  const car = cars.find(c => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
          <Link to="/cars">
            <Button>Back to Cars</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/cars" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cars
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            {/* Main Image */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-muted">
              <img
                src={car.gallery[selectedImage] || car.image}
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image Gallery */}
            {car.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {car.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-luxury-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${car.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {car.isNew && (
                <Badge className="bg-luxury-gold text-black font-bold">NEW</Badge>
              )}
              {car.isFeatured && (
                <Badge variant="secondary" className="bg-black text-white">
                  <Star className="w-3 h-3 mr-1" />
                  FEATURED
                </Badge>
              )}
              {car.discount && (
                <Badge variant="destructive" className="bg-red-500 text-white">
                  -{car.discount}%
                </Badge>
              )}
              <Badge className={`${getAvailabilityColor(car.availability)} text-white`}>
                {car.availability}
              </Badge>
            </div>

            {/* Brand and Year */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-medium text-luxury-gold">{car.brand}</span>
              <span className="text-lg text-muted-foreground">{car.year}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl font-luxury font-bold mb-4">{car.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-medium ml-1">{car.rating}</span>
              </div>
              <span className="text-muted-foreground">({car.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-foreground">
                  {formatPrice(car.price)}
                </span>
                {car.originalPrice && car.originalPrice > car.price && (
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(car.originalPrice)}
                  </span>
                )}
              </div>
              {car.originalPrice && car.originalPrice > car.price && (
                <span className="text-lg text-green-600 font-medium">
                  Save {formatPrice(car.originalPrice - car.price)}
                </span>
              )}
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <Zap className="w-6 h-6 text-luxury-gold" />
                <div>
                  <div className="font-semibold">{car.specifications.horsepower}</div>
                  <div className="text-sm text-muted-foreground">Power</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <Gauge className="w-6 h-6 text-luxury-gold" />
                <div>
                  <div className="font-semibold">{car.specifications.acceleration}</div>
                  <div className="text-sm text-muted-foreground">0-100 km/h</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <Users className="w-6 h-6 text-luxury-gold" />
                <div>
                  <div className="font-semibold">{car.specifications.seating} Seats</div>
                  <div className="text-sm text-muted-foreground">Capacity</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <Weight className="w-6 h-6 text-luxury-gold" />
                <div>
                  <div className="font-semibold">{car.specifications.weight}</div>
                  <div className="text-sm text-muted-foreground">Weight</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="flex-1 bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold"
                disabled={car.availability === 'Sold Out'}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {car.availability === 'Sold Out' ? 'Sold Out' : 'Add to Cart'}
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Quick Contact */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our luxury car specialists are here to assist you
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">Call Now</Button>
                  <Button variant="outline" className="flex-1">Schedule Test Drive</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-16">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">About this {car.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {car.description}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(car.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">Premium Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">Customer Reviews</h3>
                  <div className="space-y-6">
                    {/* Mock reviews */}
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border-b pb-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center text-black font-bold">
                            JD
                          </div>
                          <div>
                            <div className="font-semibold">John Doe</div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          Absolutely incredible machine! The performance is mind-blowing and the attention to detail is extraordinary.
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
