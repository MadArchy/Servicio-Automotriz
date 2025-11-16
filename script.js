// ============================================
// NAVBAR FUNCTIONALITY
// ============================================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
let menuOpen = false;

function toggleMenu(forceState) {
    menuOpen = typeof forceState === 'boolean' ? forceState : !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    mobileMenu.setAttribute('aria-hidden', String(!menuOpen));
    menuToggle.setAttribute('aria-expanded', String(menuOpen));
    menuToggle.setAttribute('aria-label', menuOpen ? 'Cerrar menú' : 'Abrir menú');

    // Update SVG icon based on menu state
    const useElement = menuIcon.querySelector('use');
    if (useElement) {
        if (menuOpen) {
            useElement.setAttribute('href', 'assets/icons/icon-sprites.svg#icon-times');
        } else {
            useElement.setAttribute('href', 'assets/icons/icon-sprites.svg#icon-bars');
        }
    }
}

menuToggle.addEventListener('click', () => {
    toggleMenu();
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu(false);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuOpen) {
        toggleMenu(false);
        menuToggle.focus();
    }
});

// Initialize accessibility attributes
toggleMenu(false);

// ============================================
// HERO SLIDER FUNCTIONALITY
// ============================================
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let currentSlide = 0;
let autoPlayInterval;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        const isActive = idx === index;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
        slide.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    indicators.forEach((indicator, idx) => {
        const isActive = idx === index;
        indicator.classList.toggle('active', isActive);
        indicator.setAttribute('aria-selected', String(isActive));
        indicator.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function startAutoPlay() {
    if (prefersReducedMotion.matches) return;
    stopAutoPlay();
    autoPlayInterval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Event listeners for arrows
prevButton.addEventListener('click', () => {
    stopAutoPlay();
    prevSlide();
    startAutoPlay();
});

nextButton.addEventListener('click', () => {
    stopAutoPlay();
    nextSlide();
    startAutoPlay();
});

// Event listeners for indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        stopAutoPlay();
        showSlide(index);
        startAutoPlay();
        
        // Scroll to service and highlight
        const serviceId = indicator.getAttribute('data-service');
        highlightService(serviceId);
        
        const element = document.getElementById(serviceId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

// Start autoplay respecting user preferences
startAutoPlay();

const handleMotionPreferenceChange = () => {
    if (prefersReducedMotion.matches) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
};

if (typeof prefersReducedMotion.addEventListener === 'function') {
    prefersReducedMotion.addEventListener('change', handleMotionPreferenceChange);
} else if (typeof prefersReducedMotion.addListener === 'function') {
    prefersReducedMotion.addListener(handleMotionPreferenceChange);
}

// Initialize slider accessibility state
showSlide(0);

// ============================================
// SERVICE CARD HIGHLIGHTING
// ============================================
let highlightTimeout;

function highlightService(serviceId) {
    const serviceCard = document.getElementById(serviceId);
    if (!serviceCard) return;
    
    // Clear previous timeout if exists
    if (highlightTimeout) {
        clearTimeout(highlightTimeout);
    }
    
    // Remove highlighted class from all cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.remove('highlighted');
    });
    
    // Add highlighted class to target card
    serviceCard.classList.add('highlighted');
    
    // Remove after 3 seconds
    highlightTimeout = setTimeout(() => {
        serviceCard.classList.remove('highlighted');
    }, 3000);
}

// ============================================
// SMOOTH SCROLL FOR ALL ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Run on load
window.addEventListener('load', handleScrollAnimations);

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Observe contact section items
document.querySelectorAll('.contact-info-item').forEach(item => {
    observer.observe(item);
});

// ============================================
// KEYBOARD NAVIGATION FOR SLIDER
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
    } else if (e.key === 'ArrowRight') {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
    }
});

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    handleScrollAnimations();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// ============================================
// PRELOAD IMAGES (eliminado: se cargaban imágenes externas pesadas innecesarias)

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================

// Pause slider on focus
slides.forEach(slide => {
    slide.addEventListener('focus', stopAutoPlay);
    slide.addEventListener('blur', startAutoPlay);
});

// Add keyboard support for interactive elements
document.querySelectorAll('.service-card').forEach(card => {
    card.setAttribute('tabindex', '0');
});

// ============================================
// CONSOLE WELCOME MESSAGE (eliminado para no ensuciar la consola en producción)
// ============================================

