
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Menu, X, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indian-saffron to-indian-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IN</span>
            </div>
            <span className="text-xl font-bold text-gray-800">InNeedIndeed</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/gigs" className="text-gray-600 hover:text-indian-saffron transition-colors">
              Find Services
            </Link>
            <Link to="/post-job" className="text-gray-600 hover:text-indian-saffron transition-colors">
              Post Job
            </Link>
            {user?.type === 'provider' && (
              <Link to="/post-gig" className="text-gray-600 hover:text-indian-saffron transition-colors">
                Post Gig
              </Link>
            )}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="w-8 h-8 cursor-pointer">
                      <AvatarFallback className="bg-indian-saffron text-white">
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white">
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-indian-saffron hover:bg-indian-saffron-dark">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/gigs" 
                className="text-gray-600 hover:text-indian-saffron px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find Services
              </Link>
              <Link 
                to="/post-job" 
                className="text-gray-600 hover:text-indian-saffron px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Post Job
              </Link>
              {user?.type === 'provider' && (
                <Link 
                  to="/post-gig" 
                  className="text-gray-600 hover:text-indian-saffron px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Post Gig
                </Link>
              )}
              
              {user ? (
                <div className="px-4 space-y-2">
                  <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Dashboard
                    </Button>
                  </Link>
                  <Button onClick={handleLogout} variant="ghost" className="w-full">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="px-4 space-y-2">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-indian-saffron hover:bg-indian-saffron-dark">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
