
// Complete JavaScript for InNeedIndeed Website

// Categories data and functionality
const categoriesData = [
    { name: 'Salon & Beauty', icon: '💄', count: '250+ services' },
    { name: 'Home Tutoring', icon: '📚', count: '180+ tutors' },
    { name: 'Astrology', icon: '🔮', count: '120+ astrologers' },
    { name: 'Plumbing', icon: '🔧', count: '300+ plumbers' },
    { name: 'House Cleaning', icon: '🧹', count: '200+ cleaners' },
    { name: 'Electronics Repair', icon: '⚡', count: '150+ technicians' },
    { name: 'Cooking & Catering', icon: '👨‍🍳', count: '100+ chefs' },
    { name: 'Fitness Training', icon: '💪', count: '80+ trainers' }
];

// Services data
const servicesData = [
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
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop&auto=format'
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
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop&auto=format'
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
        image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop&auto=format'
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
        image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=500&h=300&fit=crop&auto=format'
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
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=300&fit=crop&auto=format'
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
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop&auto=format'
    }
];

// Testimonials data
const testimonialsData = [
    {
        name: 'Priya Sharma',
        location: 'Mumbai, Maharashtra',
        rating: 5,
        text: 'Found an amazing house cleaner through InNeedIndeed. Very reliable and professional service! They arrived on time and did an excellent job.',
        avatar: '👩',
        service: 'Home Cleaning'
    },
    {
        name: 'Rajesh Kumar',
        location: 'Delhi, NCR',
        rating: 5,
        text: 'Great platform for finding local services. The plumber I hired was excellent and reasonably priced. Fixed my bathroom issue in no time!',
        avatar: '👨',
        service: 'Plumbing'
    },
    {
        name: 'Anita Patel',
        location: 'Pune, Maharashtra',
        rating: 5,
        text: 'As a service provider, this platform has helped me connect with many customers. The booking system is smooth and payments are secure.',
        avatar: '👩',
        service: 'Beauty Services'
    }
];

// Main functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeAnimations();
    renderCategories();
    renderServices();
    renderTestimonials();
    initializeCounters();
    initializeScrollEffects();
    
    // Navigation functionality
    function initializeNavigation() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
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

        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        let lastScrollTop = 0;

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Render categories
    function renderCategories() {
        const categoriesGrid = document.getElementById('categoriesGrid');
        if (!categoriesGrid) return;

        categoriesGrid.innerHTML = '';

        categoriesData.forEach((category, index) => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card fade-in-on-scroll';
            categoryCard.style.animationDelay = `${index * 0.1}s`;
            
            categoryCard.innerHTML = `
                <div class="category-icon animate-float">${category.icon}</div>
                <h3 class="category-name">${category.name}</h3>
                <p class="category-count">${category.count}</p>
            `;

            categoryCard.addEventListener('click', () => {
                showNotification(`Exploring ${category.name} services...`, 'info');
            });

            categoriesGrid.appendChild(categoryCard);
        });
    }

    // Render services
    function renderServices(services = servicesData.slice(0, 3)) {
        const servicesGrid = document.getElementById('servicesGrid');
        if (!servicesGrid) return;

        servicesGrid.innerHTML = '';

        services.forEach((service, index) => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card fade-in-on-scroll';
            serviceCard.style.animationDelay = `${index * 0.1}s`;
            
            serviceCard.innerHTML = `
                <img src="${service.image}" alt="${service.title}" class="service-image">
                <div class="service-content">
                    <div class="service-header">
                        <span class="service-category">${service.category}</span>
                    </div>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">${service.description}</p>
                    <div class="service-meta">
                        <div class="service-rating">
                            ${generateStars(service.rating)}
                            <span class="rating-text">${service.rating} (${service.reviews} reviews)</span>
                        </div>
                        <div class="service-price">₹${service.price}</div>
                    </div>
                    <div class="service-footer">
                        <div class="service-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${service.location}
                        </div>
                        <div class="service-provider">${service.provider.name}</div>
                    </div>
                </div>
            `;

            serviceCard.addEventListener('click', () => {
                showNotification(`Viewing ${service.title}...`, 'info');
            });

            servicesGrid.appendChild(serviceCard);
        });
    }

    // Render testimonials
    function renderTestimonials() {
        const testimonialsGrid = document.getElementById('testimonialsGrid');
        if (!testimonialsGrid) return;

        testimonialsGrid.innerHTML = '';

        testimonialsData.forEach((testimonial, index) => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card fade-in-on-scroll';
            testimonialCard.style.animationDelay = `${index * 0.2}s`;
            
            testimonialCard.innerHTML = `
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
                    ${generateStars(testimonial.rating)}
                    <span class="rating-text">(${testimonial.rating}/5)</span>
                </div>
                
                <p class="testimonial-text">${testimonial.text}</p>
                
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--gray-200);">
                    <small style="color: var(--gray-600); font-weight: 600;">Service: ${testimonial.service}</small>
                </div>
            `;

            testimonialsGrid.appendChild(testimonialCard);
        });
    }

    // Generate star ratings
    function generateStars(rating) {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push('<i class="fas fa-star star"></i>');
        }

        if (hasHalfStar) {
            stars.push('<i class="fas fa-star-half-alt star"></i>');
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push('<i class="far fa-star star"></i>');
        }

        return stars.join('');
    }

    // Counter animation for stats
    function initializeCounters() {
        function animateCounter(element, target, duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16);
            
            function updateCounter() {
                start += increment;
                if (start < target) {
                    element.textContent = Math.floor(start) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target + '+';
                }
            }
            
            updateCounter();
        }

        const observeStats = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const target = parseInt(stat.textContent);
                        animateCounter(stat, target);
                    });
                    observeStats.unobserve(entry.target);
                }
            });
        });

        const heroStats = document.querySelector('.hero-stats');
        if (heroStats) {
            observeStats.observe(heroStats);
        }
    }

    // Initialize scroll animations
    function initializeAnimations() {
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

        const animatedElements = document.querySelectorAll('.fade-in-on-scroll');
        animatedElements.forEach(el => observer.observe(el));
    }

    // Scroll effects
    function initializeScrollEffects() {
        // Add scroll to top button
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: var(--indian-saffron);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
        `;

        document.body.appendChild(scrollToTopBtn);

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.visibility = 'visible';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.visibility = 'hidden';
            }
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        if (type === 'success') {
            notification.style.backgroundColor = '#10b981';
        } else if (type === 'error') {
            notification.style.backgroundColor = '#ef4444';
        } else {
            notification.style.backgroundColor = '#3b82f6';
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Make functions globally available
    window.showNotification = showNotification;

    // Form validation functions
    window.validateEmail = function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    window.validatePhone = function(phone) {
        const re = /^[6-9]\d{9}$/;
        return re.test(phone);
    };
});
