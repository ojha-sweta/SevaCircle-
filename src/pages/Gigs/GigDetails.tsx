
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Clock,
  CheckCircle,
  Users,
  Award,
  MessageCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const GigDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isContactVisible, setIsContactVisible] = useState(false);

  // Mock data for different gigs based on ID
  const gigData = {
    '1': {
      id: '1',
      title: 'Professional Home Cleaning Service',
      description: 'Deep cleaning service for your home using eco-friendly products. Our experienced team provides comprehensive cleaning including dusting, mopping, bathroom sanitization, kitchen cleaning, and more.',
      fullDescription: `Our professional home cleaning service offers: • Deep cleaning of all rooms • Kitchen and bathroom sanitization • Dusting and vacuuming • Floor mopping and polishing • Window cleaning (interior) • Eco-friendly cleaning products • Insured and background-checked staff`,
      price: 500,
      rating: 4.8,
      reviews: 120,
      location: 'Mumbai Central, Mumbai',
      category: 'House Cleaning',
      serviceArea: ['Mumbai Central', 'Bandra', 'Andheri', 'Powai', 'Thane'],
      duration: '2-3 hours',
      availability: 'Mon-Sat: 8AM-6PM',
      provider: {
        id: 'provider1',
        name: 'Cleaning Masters',
        rating: 4.8,
        reviews: 150,
        experience: '5+ years',
        verified: true,
        joinedDate: 'January 2020',
        phone: '+91 9876543210',
        email: 'contact@cleaningmasters.com',
        description: 'Professional cleaning service with a team of experienced cleaners.'
      },
      images: [
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop&auto=format'
      ],
      features: ['Eco-friendly products', 'Insured service', 'Background-checked staff', 'Own equipment provided', 'Satisfaction guarantee'],
      packages: [
        { name: 'Basic Clean', price: 500, description: 'Standard cleaning of 1BHK' },
        { name: 'Deep Clean', price: 800, description: 'Thorough cleaning of 1BHK' },
        { name: 'Premium Clean', price: 1200, description: 'Deep clean + appliance cleaning' }
      ]
    },
    '2': {
      id: '2',
      title: 'Math & Science Home Tutor',
      description: 'Expert tutor for classes 8-12. IIT graduate with proven track record in mathematics and science subjects.',
      fullDescription: `Our professional tutoring service includes: • Mathematics (Algebra, Geometry, Calculus) • Physics (Mechanics, Thermodynamics, Optics) • Chemistry (Organic, Inorganic, Physical) • Personalized study plans • Regular assessments and progress tracking • Exam preparation strategies • Doubt clearing sessions`,
      price: 800,
      rating: 4.9,
      reviews: 85,
      location: 'Bangalore, Karnataka',
      category: 'Home Tutoring',
      serviceArea: ['Koramangala', 'BTM Layout', 'Jayanagar', 'JP Nagar', 'Electronic City'],
      duration: '1-2 hours per session',
      availability: 'Mon-Sun: 4PM-9PM',
      provider: {
        id: 'provider2',
        name: 'Dr. Anil Kumar',
        rating: 4.9,
        reviews: 95,
        experience: '8+ years',
        verified: true,
        joinedDate: 'March 2018',
        phone: '+91 9876543211',
        email: 'dr.anil@tutoring.com',
        description: 'IIT graduate with PhD in Mathematics. Specialized in board exam preparation.'
      },
      images: [
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&auto=format'
      ],
      features: ['IIT Graduate', 'PhD in Mathematics', 'Board exam specialist', 'Personalized teaching', '95% success rate'],
      packages: [
        { name: 'Basic Tutoring', price: 800, description: 'Regular subject tutoring' },
        { name: 'Exam Preparation', price: 1200, description: 'Intensive exam preparation' },
        { name: 'Complete Package', price: 2000, description: 'All subjects + test series' }
      ]
    },
    '3': {
      id: '3',
      title: 'Vedic Astrology Consultation',
      description: 'Get insights into your future with authentic Vedic astrology readings from certified astrologers.',
      fullDescription: `Our Vedic astrology services include: • Birth chart analysis • Career guidance • Marriage compatibility • Health predictions • Gemstone recommendations • Remedial measures • Muhurat selection • Vastu consultation`,
      price: 300,
      rating: 4.7,
      reviews: 200,
      location: 'Varanasi, Uttar Pradesh',
      category: 'Astrology',
      serviceArea: ['Varanasi', 'Allahabad', 'Lucknow', 'Kanpur', 'Online Consultations'],
      duration: '30-60 minutes',
      availability: 'Daily: 6AM-10PM',
      provider: {
        id: 'provider3',
        name: 'Pandit Sharma',
        rating: 4.7,
        reviews: 220,
        experience: '15+ years',
        verified: true,
        joinedDate: 'January 2015',
        phone: '+91 9876543212',
        email: 'pandit.sharma@astrology.com',
        description: 'Certified Vedic astrologer with traditional training from Varanasi gurukul.'
      },
      images: [
        'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop&auto=format'
      ],
      features: ['Certified astrologer', 'Traditional training', '15+ years experience', 'Multiple languages', 'Online consultations'],
      packages: [
        { name: 'Basic Reading', price: 300, description: 'Birth chart analysis' },
        { name: 'Detailed Consultation', price: 500, description: 'Complete life reading' },
        { name: 'Premium Package', price: 800, description: 'Reading + remedies + follow-up' }
      ]
    }
  };

  // Get the specific gig data based on ID, fallback to first gig if not found
  const gig = gigData[id as keyof typeof gigData] || gigData['1'];

  const customerReviews = [
    {
      id: 1,
      customer: 'Priya Sharma',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Excellent service! Very thorough and professional. Highly recommended.',
      avatar: '👩'
    },
    {
      id: 2,
      customer: 'Rajesh Kumar',
      rating: 5,
      date: '1 month ago',
      comment: 'Great attention to detail. Very satisfied with the service quality.',
      avatar: '👨'
    },
    {
      id: 3,
      customer: 'Anita Patel',
      rating: 4,
      date: '2 months ago',
      comment: 'Good service, arrived on time and did a thorough job. Will book again.',
      avatar: '👩'
    }
  ];

  const handleContactProvider = () => {
    setIsContactVisible(true);
    toast({
      title: 'Contact Information Revealed',
      description: 'You can now contact the service provider directly.',
    });
  };

  const handleBookService = () => {
    toast({
      title: 'Booking Request Sent',
      description: 'The service provider will contact you soon to confirm the booking.',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img
                    src={gig.images[0]}
                    alt={gig.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 p-4">
                  {gig.images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Service ${index + 2}`}
                      className="aspect-video object-cover rounded-md cursor-pointer hover:opacity-80"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Details */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="mb-2 bg-indian-saffron text-white">
                      {gig.category}
                    </Badge>
                    <CardTitle className="text-2xl mb-2">{gig.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{gig.rating}</span>
                        <span className="ml-1">({gig.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {gig.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-indian-navy">₹{gig.price}</div>
                    <div className="text-sm text-gray-600">starting price</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {gig.description}
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">What's Included</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {gig.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Service Packages</h3>
                    <div className="space-y-3">
                      {gig.packages.map((pkg, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:border-indian-saffron transition-colors">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{pkg.name}</h4>
                              <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-lg">₹{pkg.price}</div>
                              <Button size="sm" className="mt-2 bg-indian-saffron hover:bg-indian-saffron-dark">
                                Select
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Service Area</h3>
                    <div className="flex flex-wrap gap-2">
                      {gig.serviceArea.map((area, index) => (
                        <Badge key={index} variant="outline">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  Customer Reviews ({gig.reviews})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {customerReviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{review.avatar}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{review.customer}</h4>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline">View All Reviews</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Provider Info */}
            <Card>
              <CardHeader>
                <CardTitle>Service Provider</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-indian-saffron text-white">
                        {gig.provider.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{gig.provider.name}</h3>
                        {gig.provider.verified && (
                          <Badge variant="outline" className="text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{gig.provider.rating}</span>
                        <span className="text-sm text-gray-600 ml-1">
                          ({gig.provider.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{gig.provider.experience} experience</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <span>Joined {gig.provider.joinedDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{gig.availability}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">
                    {gig.provider.description}
                  </p>

                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-indian-saffron hover:bg-indian-saffron-dark"
                      onClick={handleBookService}
                    >
                      Book This Service
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleContactProvider}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact Provider
                    </Button>
                  </div>

                  {isContactVisible && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg space-y-2">
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 text-gray-400 mr-2" />
                        <span>{gig.provider.phone}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="break-all">{gig.provider.email}</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Duration</span>
                    <span className="text-sm font-medium">{gig.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Service Area</span>
                    <span className="text-sm font-medium">{gig.serviceArea.length} locations</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Response Time</span>
                    <span className="text-sm font-medium">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Languages</span>
                    <span className="text-sm font-medium">Hindi, English</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar Services */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <Link key={i} to={`/gig/${i + 10}`} className="block">
                      <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <img
                          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop&auto=format"
                          alt="Service"
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium truncate">
                            Professional Service {i}
                          </h4>
                          <div className="flex items-center mt-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="text-xs">4.{7 + i}</span>
                            <span className="text-xs text-gray-500 ml-1">
                              ₹{400 + i * 100}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigDetails;
