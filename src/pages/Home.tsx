
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Search, MapPin, Users, CheckCircle } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const Home = () => {
  const categories = [
    { name: 'Salon & Beauty', icon: '💄', count: '250+ services' },
    { name: 'Home Tutoring', icon: '📚', count: '180+ tutors' },
    { name: 'Astrology', icon: '🔮', count: '120+ astrologers' },
    { name: 'Plumbing', icon: '🔧', count: '300+ plumbers' },
    { name: 'House Cleaning', icon: '🧹', count: '200+ cleaners' },
    { name: 'Electronics Repair', icon: '⚡', count: '150+ technicians' },
    { name: 'Cooking & Catering', icon: '👨‍🍳', count: '100+ chefs' },
    { name: 'Fitness Training', icon: '💪', count: '80+ trainers' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Found an amazing house cleaner through InNeedIndeed. Very reliable and professional service!',
      avatar: '👩'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Great platform for finding local services. The plumber I hired was excellent and reasonably priced.',
      avatar: '👨'
    },
    {
      name: 'Anita Patel',
      location: 'Pune',
      rating: 5,
      text: 'As a service provider, this platform has helped me connect with many customers. Highly recommended!',
      avatar: '👩'
    }
  ];

  const featuredGigs = [
    {
      id: '1',
      title: 'Professional Home Cleaning Service',
      description: 'Deep cleaning for your home with eco-friendly products. Experienced team with 5+ years.',
      price: 500,
      rating: 4.8,
      reviews: 120,
      location: 'Mumbai Central',
      category: 'Cleaning',
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
      category: 'Education',
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
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find Trusted Local Services
            <br />
            <span className="text-indian-gold">Across India</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
            Connect with skilled professionals for all your needs - from home repairs to personal services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
            <Link to="/gigs">
              <Button size="lg" className="bg-white text-indian-navy hover:bg-gray-100 px-8 py-3 text-lg">
                <Search className="w-5 h-5 mr-2" />
                Find Services
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indian-navy px-8 py-3 text-lg">
                Join as Provider
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-indian-gold">Service Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-indian-gold">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-indian-gold">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Service Categories</h2>
            <p className="text-xl text-gray-600">Discover local professionals for every need</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={`/gigs?category=${encodeURIComponent(category.name)}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:animate-float">{category.icon}</div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-indian-saffron">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gigs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Services</h2>
            <p className="text-xl text-gray-600">Top-rated professionals near you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGigs.map((gig) => (
              <ServiceCard key={gig.id} {...gig} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gigs">
              <Button size="lg" className="bg-indian-saffron hover:bg-indian-saffron-dark">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get things done</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-indian-saffron rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Search & Browse</h3>
              <p className="text-gray-600">Find the perfect service provider by browsing categories or searching by location and requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indian-saffron rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect & Hire</h3>
              <p className="text-gray-600">Review profiles, ratings, and contact service providers directly to discuss your requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indian-saffron rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Get It Done</h3>
              <p className="text-gray-600">Enjoy quality service and leave a review to help others in the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real people</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and service providers on InNeedIndeed
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup?type=consumer">
              <Button size="lg" className="bg-white text-indian-navy hover:bg-gray-100 px-8 py-3 text-lg">
                I Need Services
              </Button>
            </Link>
            <Link to="/signup?type=provider">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indian-navy px-8 py-3 text-lg">
                I Provide Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
