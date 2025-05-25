
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Download, Mail, Phone, Home, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Success: React.FC = () => {
  const orderNumber = `SC${Date.now().toString().slice(-8)}`;
  const currentDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl md:text-5xl font-luxury font-bold mb-4">
            Order <span className="text-gradient">Confirmed!</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Thank you for your purchase! Your dream supercar is now reserved for you. 
            We'll be in touch shortly to arrange the next steps.
          </p>

          {/* Order Details */}
          <Card className="mb-8 text-left">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Order Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-muted-foreground mb-2">Order Number</h3>
                  <p className="text-lg font-semibold">{orderNumber}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-muted-foreground mb-2">Order Date</h3>
                  <p className="text-lg">{currentDate}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-muted-foreground mb-2">Payment Status</h3>
                  <p className="text-lg text-green-600 font-semibold">Confirmed</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-muted-foreground mb-2">Estimated Delivery</h3>
                  <p className="text-lg">2-4 weeks</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What's Next */}
          <Card className="mb-8 text-left">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">What's Next?</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-black font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Order Confirmation Email</h3>
                    <p className="text-muted-foreground">You'll receive a detailed confirmation email within 15 minutes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-black font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Vehicle Preparation</h3>
                    <p className="text-muted-foreground">Our team will prepare your supercar and handle all documentation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-black font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Delivery Coordination</h3>
                    <p className="text-muted-foreground">We'll contact you to schedule delivery or pickup at our showroom.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-black font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold">Handover & Welcome</h3>
                    <p className="text-muted-foreground">Experience the joy of taking possession of your dream supercar!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-8 text-left">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Need Assistance?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <p className="font-medium">Call us</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <p className="font-medium">Email us</p>
                    <p className="text-muted-foreground">orders@supercars.in</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold">
              <Download className="w-4 h-4 mr-2" />
              Download Invoice
            </Button>
            
            <Link to="/">
              <Button size="lg" variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <Link to="/cars">
              <Button size="lg" variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black">
                <Car className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Order number: {orderNumber} | If you have any questions about your order, 
              please contact our customer service team at +91 98765 43210 or orders@supercars.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
