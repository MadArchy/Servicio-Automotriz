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

// Run on scroll
window.addEventListener('scroll', handleScrollAnimations);

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
// WHATSAPP BUTTON ANALYTICS (Optional)
// ============================================
document.querySelectorAll('.whatsapp-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('WhatsApp button clicked for service');
        // You can add analytics tracking here
    });
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
// PRELOAD IMAGES
// ============================================
function preloadImages() {
    const images = [
        'https://images.unsplash.com/photo-1759477444312-73e240a8ec46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkYXNoYm9hcmQlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NjMwNjEzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1715597964018-b9ecfd21574e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhaXIlMjBjb25kaXRpb25pbmclMjByZXBhaXJ8ZW58MXx8fHwxNzYzMDYxMTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1640815169249-24705979d176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlJTIwc2VjdXJpdHklMjBzeXN0ZW18ZW58MXx8fHwxNzYzMDQ4MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1641893823219-38b433f736c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMG1ldGFsfGVufDF8fHx8MTc2MzAxNjUyMHww&ixlib=rb-4.1.0&q=80&w=1080'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Preload images after page load
window.addEventListener('load', preloadImages);

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
// CONSOLE WELCOME MESSAGE
// ============================================
console.log('%c🚗 AutoTech - Servicios Automotriz en Cúcuta', 'color: #00AEEF; font-size: 20px; font-weight: bold;');
console.log('%cPotencia y precisión en cada detalle', 'color: #A0A0A0; font-style: italic;');

