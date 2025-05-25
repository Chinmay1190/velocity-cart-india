
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Cart: React.FC = () => {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleQuantityChange = (carId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(carId);
    } else {
      updateQuantity(carId, newQuantity);
    }
  };

  const handleCheckout = () => {
    // Simulate payment processing
    alert('Redirecting to payment gateway...');
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/cars" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </div>

          <div className="text-center py-20">
            <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-4xl font-luxury font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              Discover our exclusive collection of luxury supercars and add them to your cart.
            </p>
            <Link to="/cars">
              <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold">
                Explore Supercars
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/cars" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </div>
          <h1 className="text-3xl font-luxury font-bold">Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={item.car.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Car Image */}
                    <div className="w-full md:w-48 aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                      <img
                        src={item.car.image}
                        alt={item.car.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Car Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="text-sm text-luxury-gold font-medium">{item.car.brand}</span>
                          <h3 className="text-xl font-semibold">{item.car.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.car.year}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.car.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm text-muted-foreground">{item.car.specifications.horsepower}</span>
                        <span className="text-sm text-muted-foreground">{item.car.specifications.acceleration}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">Quantity:</span>
                          <div className="flex items-center border rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.car.id, item.quantity - 1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.car.id, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="text-2xl font-bold">
                            {formatPrice(item.car.price * item.quantity)}
                          </div>
                          {item.quantity > 1 && (
                            <div className="text-sm text-muted-foreground">
                              {formatPrice(item.car.price)} each
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Clear Cart */}
            <div className="flex justify-end">
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {state.items.map((item) => (
                    <div key={item.car.id} className="flex justify-between text-sm">
                      <span>{item.car.name} × {item.quantity}</span>
                      <span>{formatPrice(item.car.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(state.total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (18% GST)</span>
                    <span>{formatPrice(state.total * 0.18)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Total</span>
                  <span>{formatPrice(state.total * 1.18)}</span>
                </div>

                <Button
                  onClick={handleCheckout}
                  size="lg"
                  className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold"
                >
                  Proceed to Checkout
                </Button>

                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Secure payment processing
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
