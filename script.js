// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.4)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// Scroll Reveal Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Hover effect enhancement for product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Category filtering
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Filter products based on category
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Animate buy button when clicked
function animateBuyButton(button) {
    // Add pressed class for animation
    button.classList.add('pressed');
    
    // Remove pressed class after animation
    setTimeout(() => {
        button.classList.remove('pressed');
    }, 300);
    
    // Optional: Show loading indicator or confirmation
    // This can be customized based on your needs
    if (button.textContent === 'Buy Now') {
        // Change text temporarily to indicate action
        const originalText = button.textContent;
        button.textContent = 'Redirecting...';
        
        // Restore original text after delay
        setTimeout(() => {
            button.textContent = originalText;
        }, 1000);
    }
}

// Handle window resize for dynamic adjustments
window.addEventListener('resize', function() {
    // Adjust spacing for smaller screens
    if (window.innerWidth <= 480) {
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.height = 'auto';
        });
    }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for navbar
    if (window.scrollY > 50) {
        document.getElementById('navbar').style.padding = '10px 0';
        document.getElementById('navbar').style.background = 'rgba(10, 10, 10, 0.95)';
    }
    
    // Initialize first product as visible
    const firstCategory = document.querySelector('.category-btn');
    if (firstCategory) {
        firstCategory.classList.add('active');
    }
});