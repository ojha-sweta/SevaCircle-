
// InNeedIndeed Website JavaScript

// Global variables
let currentTestimonial = 0;
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

const services = [
    {
        id: 1,
        title: 'Professional Home Cleaning Service',
        description: 'Deep cleaning for your home with eco-friendly products. Experienced team with 5+ years.',
        price: 500,
        rating: 4.8,
        reviews: 120,
        location: 'Mumbai Central',
        category: 'Cleaning',
        provider: 'Cleaning Masters',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop&auto=format'
    },
    {
        id: 2,
        title: 'Math & Science Home Tutor',
        description: 'Expert tutor for classes 8-12. IIT graduate with proven track record.',
        price: 800,
        rating: 4.9,
        reviews: 85,
        location: 'Bangalore',
        category: 'Education',
        provider: 'Dr. Anil Kumar',
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop&auto=format'
    },
    {
        id: 3,
        title: 'Vedic Astrology Consultation',
        description: 'Get insights into your future with authentic Vedic astrology readings.',
        price: 300,
        rating: 4.7,
        reviews: 200,
        location: 'Varanasi',
        category: 'Astrology',
        provider: 'Pandit Sharma',
        image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop&auto=format'
    }
];

// Utility functions
window.validateEmail = function(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

window.showNotification = function(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = '#10b981';
            break;
        case 'error':
            notification.style.background = '#ef4444';
            break;
        case 'warning':
            notification.style.background = '#f59e0b';
            break;
        default:
            notification.style.background = '#3b82f6';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
};

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Categories functionality
function loadCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (categoriesGrid) {
        categoriesGrid.innerHTML = categories.map(category => `
            <div class="category-card animate-float">
                <div class="category-icon">${category.icon}</div>
                <h3 class="category-name">${category.name}</h3>
                <p class="category-count">${category.count}</p>
            </div>
        `).join('');
    }
}

// Services functionality
function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (servicesGrid) {
        servicesGrid.innerHTML = services.map(service => `
            <div class="service-card">
                <img src="${service.image}" alt="${service.title}" class="service-image" />
                <div class="service-content">
                    <div class="service-category">${service.category}</div>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">${service.description}</p>
                    <div class="service-meta">
                        <div class="service-rating">
                            ${Array(5).fill(0).map((_, i) => 
                                `<span class="star">${i < Math.floor(service.rating) ? '★' : '☆'}</span>`
                            ).join('')}
                            <span class="rating-text">${service.rating} (${service.reviews} reviews)</span>
                        </div>
                        <div class="service-price">₹${service.price}</div>
                    </div>
                    <div class="service-footer">
                        <div class="service-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${service.location}
                        </div>
                        <div class="service-provider">${service.provider}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Testimonials functionality
function loadTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (testimonialsGrid) {
        testimonialsGrid.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <div class="testimonial-avatar">${testimonial.avatar}</div>
                    <div class="testimonial-info">
                        <h4>${testimonial.name}</h4>
                        <div class="testimonial-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${testimonial.location}
                        </div>
                    </div>
                </div>
                <div class="testimonial-rating">
                    ${Array(testimonial.rating).fill(0).map(() => '<span class="star">★</span>').join('')}
                </div>
                <p class="testimonial-text">${testimonial.text}</p>
            </div>
        `).join('');
    }
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in-on-scroll class
    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Form handling
function initializeForms() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message && window.validateEmail(email)) {
                window.showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                this.reset();
            } else {
                window.showNotification('Please fill in all fields with valid information.', 'error');
            }
        });
    }

    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            if (email && password && window.validateEmail(email)) {
                window.showNotification('Login successful! Welcome back.', 'success');
                this.reset();
            } else {
                window.showNotification('Please enter valid credentials.', 'error');
            }
        });
    }

    // Signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const userType = document.getElementById('userType').value;
            
            if (firstName && lastName && email && password && userType && window.validateEmail(email)) {
                window.showNotification('Account created successfully! Welcome to InNeedIndeed.', 'success');
                this.reset();
            } else {
                window.showNotification('Please fill in all fields with valid information.', 'error');
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadCategories();
    loadServices();
    loadTestimonials();
    initializeScrollAnimations();
    initializeForms();
    
    // Add fade-in-on-scroll class to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-on-scroll');
    });
    
    console.log('InNeedIndeed website initialized successfully!');
});

// Handle navbar scroll behavior
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--white)';
            navbar.style.backdropFilter = 'none';
        }
    }
});
