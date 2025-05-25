
import React from 'react';
import { Car, Award, Shield, Users, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const stats = [
    { icon: Car, label: 'Supercars', value: '65+' },
    { icon: Users, label: 'Happy Clients', value: '1,200+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Shield, label: 'Warranty', value: '100%' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-luxury-carbon to-luxury-carbon-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-luxury font-bold mb-6">
              About <span className="text-gradient">SuperCars</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              India's premier destination for luxury supercars and automotive excellence
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-background/95 backdrop-blur-sm border-luxury-gold/20">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-luxury font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2009, SuperCars has been at the forefront of India's luxury automotive industry. 
                    What started as a passion for exceptional automobiles has evolved into the nation's most trusted 
                    destination for supercars.
                  </p>
                  <p>
                    We specialize in curating the world's finest supercars, from legendary Ferraris and Lamborghinis 
                    to cutting-edge McLarens and Porsches. Each vehicle in our collection is meticulously inspected 
                    and certified to meet our exacting standards.
                  </p>
                  <p>
                    Our commitment extends beyond sales – we provide comprehensive after-sales support, maintenance 
                    services, and a community for supercar enthusiasts across India.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-luxury-gold/20 to-luxury-carbon/20">
                  <img
                    src="/placeholder.svg"
                    alt="SuperCars showroom"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-luxury font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-12">
              To make the dream of owning a supercar accessible to enthusiasts across India, 
              while maintaining the highest standards of quality, service, and authenticity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <Award className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    Every supercar meets our rigorous quality standards
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8 text-center">
                  <Shield className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Trust</h3>
                  <p className="text-muted-foreground">
                    Complete transparency in every transaction
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    Building relationships that last beyond the sale
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-luxury font-bold text-center mb-12">Visit Our Showroom</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    123 Luxury Avenue<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    +91 98765 43210<br />
                    Mon - Sat: 10 AM - 8 PM<br />
                    Sun: 11 AM - 6 PM
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    info@supercars.in<br />
                    sales@supercars.in<br />
                    support@supercars.in
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
