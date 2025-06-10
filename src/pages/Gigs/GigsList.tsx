
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Filter, MapPin, Star } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const GigsList = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('relevance');

  const categories = [
    'All Categories',
    'Salon & Beauty',
    'Home Tutoring',
    'Astrology',
    'Plumbing',
    'House Cleaning',
    'Electronics Repair',
    'Cooking & Catering',
    'Fitness Training',
    'Home Repair',
    'Pet Care'
  ];

  // Mock data for gigs
  const allGigs = [
    {
      id: '1',
      title: 'Professional Home Cleaning Service',
      description: 'Deep cleaning for your home with eco-friendly products. Experienced team with 5+ years.',
      price: 500,
      rating: 4.8,
      reviews: 120,
      location: 'Mumbai Central',
      category: 'House Cleaning',
      provider: { name: 'Cleaning Masters' },
      image: '/placeholder.svg'
    },
    {
      id: '2',
      title: 'Math & Science Home Tutor',
      description: 'Expert tutor for classes 8-12. IIT graduate with proven track record.',
      price: 800,
      rating: 4.9,
      reviews: 85,
      location: 'Bangalore',
      category: 'Home Tutoring',
      provider: { name: 'Dr. Anil Kumar' },
      image: '/placeholder.svg'
    },
    {
      id: '3',
      title: 'Vedic Astrology Consultation',
      description: 'Get insights into your future with authentic Vedic astrology readings.',
      price: 300,
      rating: 4.7,
      reviews: 200,
      location: 'Varanasi',
      category: 'Astrology',
      provider: { name: 'Pandit Sharma' },
      image: '/placeholder.svg'
    },
    {
      id: '4',
      title: 'Professional Plumbing Services',
      description: 'Emergency plumbing repairs and installations. Available 24/7.',
      price: 400,
      rating: 4.6,
      reviews: 150,
      location: 'Delhi NCR',
      category: 'Plumbing',
      provider: { name: 'Delhi Plumbers' },
      image: '/placeholder.svg'
    },
    {
      id: '5',
      title: 'Hair & Beauty Services at Home',
      description: 'Complete salon services at your doorstep. Certified beauticians.',
      price: 600,
      rating: 4.8,
      reviews: 95,
      location: 'Pune',
      category: 'Salon & Beauty',
      provider: { name: 'Beauty at Home' },
      image: '/placeholder.svg'
    },
    {
      id: '6',
      title: 'Personal Fitness Trainer',
      description: 'Certified fitness trainer for home workouts and nutrition guidance.',
      price: 1000,
      rating: 4.9,
      reviews: 75,
      location: 'Mumbai',
      category: 'Fitness Training',
      provider: { name: 'Fit India' },
      image: '/placeholder.svg'
    }
  ];

  const filteredGigs = allGigs.filter(gig => {
    const matchesSearch = searchTerm === '' || 
      gig.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gig.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      selectedCategory === 'All Categories' ||
      gig.category === selectedCategory;
    
    const matchesLocation = location === '' ||
      gig.location.toLowerCase().includes(location.toLowerCase());

    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Services</h1>
          <p className="text-gray-600">Discover trusted professionals near you</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Search */}
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.slice(1).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Location */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedCategory !== 'all' && selectedCategory !== 'All Categories' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="ml-1 text-xs hover:text-red-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {location && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Location: {location}
                  <button
                    onClick={() => setLocation('')}
                    className="ml-1 text-xs hover:text-red-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredGigs.length} services
          </p>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Gigs Grid */}
        {filteredGigs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGigs.map((gig) => (
              <ServiceCard key={gig.id} {...gig} />
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-gray-400 mb-4">
                <Search className="w-12 h-12 mx-auto mb-2" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or explore different categories
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setLocation('');
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Load More */}
        {filteredGigs.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Services
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GigsList;
