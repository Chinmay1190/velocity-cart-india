
export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  description: string;
  specifications: {
    engine: string;
    horsepower: string;
    torque: string;
    acceleration: string;
    topSpeed: string;
    transmission: string;
    drivetrain: string;
    fuelType: string;
    seating: number;
    weight: string;
  };
  features: string[];
  category: 'Sports' | 'Luxury' | 'Hypercar' | 'Electric' | 'Classic';
  availability: 'In Stock' | 'Limited' | 'Pre-Order' | 'Sold Out';
  rating: number;
  reviews: number;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
}
