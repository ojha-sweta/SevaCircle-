
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  TrendingUp,
  Users,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  const isProvider = user.type === 'provider';

  // Mock data for demonstration
  const stats = isProvider 
    ? [
        { title: 'Active Gigs', value: '3', icon: CheckCircle, color: 'text-green-600' },
        { title: 'Total Views', value: '245', icon: TrendingUp, color: 'text-blue-600' },
        { title: 'Reviews', value: '12', icon: Star, color: 'text-yellow-600' },
        { title: 'Earnings', value: '₹8,500', icon: TrendingUp, color: 'text-green-600' }
      ]
    : [
        { title: 'Active Requests', value: '2', icon: CheckCircle, color: 'text-blue-600' },
        { title: 'Completed Jobs', value: '8', icon: CheckCircle, color: 'text-green-600' },
        { title: 'Favorite Providers', value: '5', icon: Star, color: 'text-yellow-600' },
        { title: 'Total Spent', value: '₹12,500', icon: TrendingUp, color: 'text-purple-600' }
      ];

  const recentActivity = isProvider
    ? [
        {
          id: 1,
          type: 'booking',
          title: 'New booking for House Cleaning',
          customer: 'Priya Sharma',
          time: '2 hours ago',
          status: 'pending'
        },
        {
          id: 2,
          type: 'review',
          title: 'New 5-star review received',
          customer: 'Rajesh Kumar',
          time: '1 day ago',
          status: 'completed'
        },
        {
          id: 3,
          type: 'payment',
          title: 'Payment received - ₹1,500',
          customer: 'Anita Patel',
          time: '2 days ago',
          status: 'completed'
        }
      ]
    : [
        {
          id: 1,
          type: 'booking',
          title: 'Plumber booked for kitchen repair',
          provider: 'Mumbai Plumbing Services',
          time: '3 hours ago',
          status: 'confirmed'
        },
        {
          id: 2,
          type: 'completion',
          title: 'House cleaning completed',
          provider: 'Cleaning Masters',
          time: '1 day ago',
          status: 'completed'
        },
        {
          id: 3,
          type: 'payment',
          title: 'Payment made - ₹800',
          provider: 'Dr. Anil Kumar',
          time: '3 days ago',
          status: 'completed'
        }
      ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user.name}!
              </h1>
              <p className="text-gray-600 mt-1">
                {isProvider ? 'Manage your services and bookings' : 'Find and manage your service requests'}
              </p>
            </div>
            
            <div className="mt-4 sm:mt-0">
              {isProvider ? (
                <Link to="/post-gig">
                  <Button className="bg-indian-saffron hover:bg-indian-saffron-dark">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Gig
                  </Button>
                </Link>
              ) : (
                <Link to="/post-job">
                  <Button className="bg-indian-saffron hover:bg-indian-saffron-dark">
                    <Plus className="w-4 h-4 mr-2" />
                    Post Job Request
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Profile Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-indian-saffron rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{user.name}</h3>
                  <Badge variant="secondary" className="mt-1">
                    {user.type === 'provider' ? 'Service Provider' : 'Customer'}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{user.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{user.location}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4">
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="flex-shrink-0">
                      <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-600">
                        {isProvider ? `Customer: ${activity.customer}` : `Provider: ${activity.provider}`}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Badge 
                        variant={activity.status === 'completed' ? 'default' : 'secondary'}
                        className={activity.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline">View All Activity</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {isProvider ? (
                <>
                  <Link to="/my-gigs">
                    <Button variant="outline" className="w-full justify-start">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Manage My Gigs
                    </Button>
                  </Link>
                  <Link to="/bookings">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      View Bookings
                    </Button>
                  </Link>
                  <Link to="/analytics">
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      View Analytics
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/gigs">
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Find Services
                    </Button>
                  </Link>
                  <Link to="/my-requests">
                    <Button variant="outline" className="w-full justify-start">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      My Requests
                    </Button>
                  </Link>
                  <Link to="/favorites">
                    <Button variant="outline" className="w-full justify-start">
                      <Star className="w-4 h-4 mr-2" />
                      Favorites
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
