
// Testimonials data and functionality
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
    },
    {
        name: 'Vikram Singh',
        location: 'Bangalore, Karnataka',
        rating: 5,
        text: 'Excellent tutoring service for my daughter. The math tutor was very patient and helped improve her grades significantly.',
        avatar: '👨',
        service: 'Tutoring'
    },
    {
        name: 'Kavita Reddy',
        location: 'Hyderabad, Telangana',
        rating: 4,
        text: 'Good experience with electrical repairs. The electrician was knowledgeable and completed the work safely and efficiently.',
        avatar: '👩',
        service: 'Electrical'
    },
    {
        name: 'Amit Gupta',
        location: 'Chennai, Tamil Nadu',
        rating: 5,
        text: 'Amazing cooking classes! The chef taught traditional recipes with modern techniques. Highly recommended for food enthusiasts.',
        avatar: '👨',
        service: 'Cooking Classes'
    }
];

function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;

    testimonialsGrid.innerHTML = '';

    // Show first 3 testimonials for grid view
    const displayTestimonials = testimonialsData.slice(0, 3);

    displayTestimonials.forEach((testimonial, index) => {
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
                ${generateStarsForTestimonial(testimonial.rating)}
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

function generateStarsForTestimonial(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push('<i class="fas fa-star star"></i>');
        } else {
            stars.push('<i class="far fa-star star" style="opacity: 0.3;"></i>');
        }
    }
    return stars.join('');
}

// Add new testimonial (for future use)
function addTestimonial(testimonial) {
    testimonialsData.push(testimonial);
    renderTestimonials();
}

// Get random testimonials
function getRandomTestimonials(count = 3) {
    const shuffled = [...testimonialsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Testimonial slider functionality
class TestimonialSlider {
    constructor(container) {
        this.container = container;
        this.currentIndex = 0;
        this.testimonials = testimonialsData;
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        this.createSlider();
        this.createControls();
        this.startAutoPlay();
        this.addEventListeners();
    }
    
    createSlider() {
        this.container.innerHTML = `
            <div class="testimonial-slider">
                <div class="testimonial-slides"></div>
                <div class="testimonial-dots"></div>
            </div>
        `;
        
        this.slidesContainer = this.container.querySelector('.testimonial-slides');
        this.dotsContainer = this.container.querySelector('.testimonial-dots');
        
        this.renderSlides();
        this.renderDots();
    }
    
    renderSlides() {
        this.slidesContainer.innerHTML = '';
        
        this.testimonials.forEach((testimonial, index) => {
            const slide = document.createElement('div');
            slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
            
            slide.innerHTML = `
                <div class="testimonial-content">
                    <div class="testimonial-avatar">${testimonial.avatar}</div>
                    <h4>${testimonial.name}</h4>
                    <div class="testimonial-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${testimonial.location}
                    </div>
                    <div class="testimonial-rating">
                        ${generateStarsForTestimonial(testimonial.rating)}
                        <span class="rating-text">(${testimonial.rating}/5)</span>
                    </div>
                    <p class="testimonial-text">${testimonial.text}</p>
                    <div style="margin-top: 1.5rem;">
                        <small style="color: var(--indian-saffron); font-weight: 600;">Service: ${testimonial.service}</small>
                    </div>
                </div>
            `;
            
            this.slidesContainer.appendChild(slide);
        });
    }
    
    renderDots() {
        this.dotsContainer.innerHTML = '';
        
        this.testimonials.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }
    
    createControls() {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'testimonial-prev';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.setAttribute('aria-label', 'Previous testimonial');
        prevBtn.addEventListener('click', () => this.prevSlide());
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'testimonial-next';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.setAttribute('aria-label', 'Next testimonial');
        nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.container.appendChild(prevBtn);
        this.container.appendChild(nextBtn);
    }
    
    addEventListeners() {
        // Pause autoplay on hover
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Keyboard navigation
        this.container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
                this.stopAutoPlay();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
                this.stopAutoPlay();
            }
        });
        
        // Touch/swipe support
        let startX = 0;
        let endX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
                this.stopAutoPlay();
            }
        });
    }
    
    goToSlide(index) {
        const slides = this.slidesContainer.querySelectorAll('.testimonial-slide');
        const dots = this.dotsContainer.querySelectorAll('.testimonial-dot');
        
        // Remove active class from current slide and dot
        slides[this.currentIndex].classList.remove('active');
        dots[this.currentIndex].classList.remove('active');
        
        // Update current index
        this.currentIndex = index;
        
        // Add active class to new slide and dot
        slides[this.currentIndex].classList.add('active');
        dots[this.currentIndex].classList.add('active');
    }
    
    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
        this.goToSlide(prevIndex);
    }
    
    startAutoPlay() {
        this.stopAutoPlay(); // Clear any existing interval
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    destroy() {
        this.stopAutoPlay();
        this.container.innerHTML = '';
    }
}

// Testimonial filter functionality
function filterTestimonialsByService(service) {
    const filtered = service === 'all' 
        ? testimonialsData 
        : testimonialsData.filter(testimonial => 
            testimonial.service.toLowerCase().includes(service.toLowerCase())
          );
    
    return filtered;
}

// Get testimonial statistics
function getTestimonialStats() {
    const totalReviews = testimonialsData.length;
    const averageRating = testimonialsData.reduce((sum, testimonial) => sum + testimonial.rating, 0) / totalReviews;
    const serviceTypes = [...new Set(testimonialsData.map(t => t.service))];
    
    return {
        totalReviews,
        averageRating: Math.round(averageRating * 10) / 10,
        serviceTypes
    };
}

// Initialize testimonials when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render grid testimonials
    renderTestimonials();
    
    // Initialize slider if container exists
    const sliderContainer = document.getElementById('testimonialSlider');
    if (sliderContainer) {
        new TestimonialSlider(sliderContainer);
    }
    
    // Display stats if container exists
    const statsContainer = document.getElementById('testimonialStats');
    if (statsContainer) {
        const stats = getTestimonialStats();
        statsContainer.innerHTML = `
            <div class="testimonial-stats">
                <div class="stat-item">
                    <span class="stat-number">${stats.totalReviews}+</span>
                    <span class="stat-label">Reviews</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${stats.averageRating}</span>
                    <span class="stat-label">Average Rating</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${stats.serviceTypes.length}+</span>
                    <span class="stat-label">Service Types</span>
                </div>
            </div>
        `;
    }
});

// Export for use in other files
window.testimonialsModule = {
    testimonialsData,
    renderTestimonials,
    addTestimonial,
    TestimonialSlider,
    filterTestimonialsByService,
    getRandomTestimonials,
    getTestimonialStats
};
