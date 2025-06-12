
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
            // Navigate to services page with category filter
            window.location.href = `pages/services.html?category=${encodeURIComponent(category.name)}`;
        });

        categoriesGrid.appendChild(categoryCard);
    });
}

// Search categories
function searchCategories(searchTerm) {
    const filteredCategories = categoriesData.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    renderFilteredCategories(filteredCategories);
}

function renderFilteredCategories(categories) {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = '';

    if (categories.length === 0) {
        categoriesGrid.innerHTML = '<p class="no-results">No categories found matching your search.</p>';
        return;
    }

    categories.forEach((category, index) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card fade-in-on-scroll';
        categoryCard.style.animationDelay = `${index * 0.1}s`;
        
        categoryCard.innerHTML = `
            <div class="category-icon animate-float">${category.icon}</div>
            <h3 class="category-name">${category.name}</h3>
            <p class="category-count">${category.count}</p>
        `;

        categoryCard.addEventListener('click', () => {
            window.location.href = `pages/services.html?category=${encodeURIComponent(category.name)}`;
        });

        categoriesGrid.appendChild(categoryCard);
    });
}

// Initialize categories when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
});
