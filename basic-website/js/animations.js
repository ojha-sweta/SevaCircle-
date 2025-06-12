
// Animation utilities and scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add stagger animation to children if they exist
                const children = entry.target.querySelectorAll('.fade-in-on-scroll, .slide-in-left, .slide-in-right');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-on-scroll, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Floating animation for category icons
    const categoryIcons = document.querySelectorAll('.category-icon');
    categoryIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.animation = 'float 2s ease-in-out infinite';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.animation = '';
        });
    });

    // Card hover effects
    const cards = document.querySelectorAll('.card, .service-card, .category-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });

    // Loading animation
    function showLoading(element) {
        const loader = document.createElement('div');
        loader.className = 'loading';
        loader.style.margin = '20px auto';
        element.appendChild(loader);
        return loader;
    }

    function hideLoading(loader) {
        if (loader && loader.parentNode) {
            loader.parentNode.removeChild(loader);
        }
    }

    // Smooth reveal animation for content sections
    function revealSection(section) {
        const items = section.querySelectorAll('.category-card, .service-card, .testimonial-card, .step-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate-fade-in');
            }, index * 150);
        });
    }

    // Auto-trigger reveal animations
    const sections = document.querySelectorAll('.categories, .featured-services, .testimonials, .how-it-works');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealSection(entry.target);
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => sectionObserver.observe(section));

    // Text typing animation
    class TypeWriter {
        constructor(element, words, wait = 3000) {
            this.element = element;
            this.words = words;
            this.wait = parseInt(wait, 10);
            this.wordIndex = 0;
            this.currentWord = '';
            this.isDeleting = false;
            this.type();
        }

        type() {
            const current = this.wordIndex % this.words.length;
            const fullWord = this.words[current];

            if (this.isDeleting) {
                this.currentWord = fullWord.substring(0, this.currentWord.length - 1);
            } else {
                this.currentWord = fullWord.substring(0, this.currentWord.length + 1);
            }

            this.element.innerHTML = `<span class="txt">${this.currentWord}</span>`;

            let typeSpeed = 150;

            if (this.isDeleting) {
                typeSpeed /= 2;
            }

            if (!this.isDeleting && this.currentWord === fullWord) {
                typeSpeed = this.wait;
                this.isDeleting = true;
            } else if (this.isDeleting && this.currentWord === '') {
                this.isDeleting = false;
                this.wordIndex++;
                typeSpeed = 500;
            }

            setTimeout(() => this.type(), typeSpeed);
        }
    }

    // Initialize typewriter effect if element exists
    const typeWriterElement = document.querySelector('.typewriter');
    if (typeWriterElement) {
        const words = JSON.parse(typeWriterElement.getAttribute('data-words'));
        const wait = typeWriterElement.getAttribute('data-wait');
        new TypeWriter(typeWriterElement, words, wait);
    }

    // Scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
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

    // Export animation utilities
    window.animationUtils = {
        showLoading,
        hideLoading,
        revealSection,
        TypeWriter
    };
});
