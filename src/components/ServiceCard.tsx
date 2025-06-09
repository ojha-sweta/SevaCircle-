
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  location: string;
  category: string;
  provider: {
    name: string;
    avatar?: string;
  };
  image?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  price,
  rating,
  reviews,
  location,
  category,
  provider,
  image
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative overflow-hidden">
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-indian-saffron text-white">
          {category}
        </Badge>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-indian-saffron rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">
              {provider.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="text-sm text-gray-600">{provider.name}</span>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-indian-navy">₹{price}</span>
            <span className="text-sm text-gray-500 ml-1">onwards</span>
          </div>
          <div className="text-sm text-gray-500">
            {reviews} reviews
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link to={`/gig/${id}`} className="w-full">
          <Button className="w-full bg-indian-saffron hover:bg-indian-saffron-dark">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
