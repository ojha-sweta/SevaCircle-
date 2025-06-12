
// Services data and functionality
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
            window.location.href = `pages/service-details.html?id=${service.id}`;
        });

        servicesGrid.appendChild(serviceCard);
    });
}

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

// Filter services by category
function filterServicesByCategory(category) {
    if (category === 'all' || !category) {
        return servicesData;
    }
    return servicesData.filter(service => 
        service.category.toLowerCase() === category.toLowerCase()
    );
}

// Search services
function searchServices(searchTerm) {
    return servicesData.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Sort services
function sortServices(services, sortBy) {
    const sortedServices = [...services];
    
    switch (sortBy) {
        case 'price-low':
            return sortedServices.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sortedServices.sort((a, b) => b.price - a.price);
        case 'rating':
            return sortedServices.sort((a, b) => b.rating - a.rating);
        case 'reviews':
            return sortedServices.sort((a, b) => b.reviews - a.reviews);
        default:
            return sortedServices;
    }
}

// Get service by ID
function getServiceById(id) {
    return servicesData.find(service => service.id === id);
}

// Initialize services when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderServices();
});

// Export functions for use in other files
window.servicesModule = {
    servicesData,
    renderServices,
    filterServicesByCategory,
    searchServices,
    sortServices,
    getServiceById,
    generateStars
};
