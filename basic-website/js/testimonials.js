
// Testimonials data and functionality
const testimonialsData = [
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
                ${generateStarsForTestimonial(testimonial.rating)}
            </div>
            
            <p class="testimonial-text">${testimonial.text}</p>
        `;

        testimonialsGrid.appendChild(testimonialCard);
    });
}

function generateStarsForTestimonial(rating) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push('<i class="fas fa-star star"></i>');
    }
    return stars.join('');
}

// Add new testimonial (for future use)
function addTestimonial(testimonial) {
    testimonialsData.push(testimonial);
    renderTestimonials();
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
                    </div>
                    <p class="testimonial-text">${testimonial.text}</p>
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
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }
    
    createControls() {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'testimonial-prev';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.addEventListener('click', () => this.prevSlide());
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'testimonial-next';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.container.appendChild(prevBtn);
        this.container.appendChild(nextBtn);
    }
    
    goToSlide(index) {
        const slides = this.slidesContainer.querySelectorAll('.testimonial-slide');
        const dots = this.dotsContainer.querySelectorAll('.testimonial-dot');
        
        slides[this.currentIndex].classList.remove('active');
        dots[this.currentIndex].classList.remove('active');
        
        this.currentIndex = index;
        
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
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Initialize testimonials when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderTestimonials();
    
    // Initialize slider if container exists
    const sliderContainer = document.getElementById('testimonialSlider');
    if (sliderContainer) {
        new TestimonialSlider(sliderContainer);
    }
});

// Export for use in other files
window.testimonialsModule = {
    testimonialsData,
    renderTestimonials,
    addTestimonial,
    TestimonialSlider
};
