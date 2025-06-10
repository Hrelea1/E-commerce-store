document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroPrev = document.querySelector('.hero-prev');
    const heroNext = document.querySelector('.hero-next');
    const heroDots = document.querySelector('.hero-dots');
    let currentHeroSlide = 0;
    
    // Create dots
    heroSlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('hero-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToHeroSlide(index));
        heroDots.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.hero-dot');
    
    function goToHeroSlide(n) {
        heroSlides[currentHeroSlide].classList.remove('active');
        dots[currentHeroSlide].classList.remove('active');
        
        currentHeroSlide = (n + heroSlides.length) % heroSlides.length;
        
        heroSlides[currentHeroSlide].classList.add('active');
        dots[currentHeroSlide].classList.add('active');
    }
    
    function nextHeroSlide() {
        goToHeroSlide(currentHeroSlide + 1);
    }
    
    function prevHeroSlide() {
        goToHeroSlide(currentHeroSlide - 1);
    }
    
    heroNext.addEventListener('click', nextHeroSlide);
    heroPrev.addEventListener('click', prevHeroSlide);
    
    // Auto slide
    let heroInterval = setInterval(nextHeroSlide, 5000);
    
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(heroInterval);
    });
    
    heroSlider.addEventListener('mouseleave', () => {
        heroInterval = setInterval(nextHeroSlide, 5000);
    });
    
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    const testimonialDotsContainer = document.querySelector('.testimonial-dots');
    let currentTestimonialSlide = 0;
    
    // Create dots
    testimonialSlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('testimonial-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonialSlide(index));
        testimonialDotsContainer.appendChild(dot);
    });
    
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    
    function goToTestimonialSlide(n) {
        testimonialSlides[currentTestimonialSlide].classList.remove('active');
        testimonialDots[currentTestimonialSlide].classList.remove('active');
        
        currentTestimonialSlide = (n + testimonialSlides.length) % testimonialSlides.length;
        
        testimonialSlides[currentTestimonialSlide].classList.add('active');
        testimonialDots[currentTestimonialSlide].classList.add('active');
    }
    
    function nextTestimonialSlide() {
        goToTestimonialSlide(currentTestimonialSlide + 1);
    }
    
    function prevTestimonialSlide() {
        goToTestimonialSlide(currentTestimonialSlide - 1);
    }
    
    testimonialNext.addEventListener('click', nextTestimonialSlide);
    testimonialPrev.addEventListener('click', prevTestimonialSlide);
    
    // Auto slide
    let testimonialInterval = setInterval(nextTestimonialSlide, 7000);
    
    testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(nextTestimonialSlide, 7000);
    });

}); document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 1000);
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Animate elements when scrolling
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-slide');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounters = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const speed = 2000; // Duration in ms
            const increment = target / (speed / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCounter();
        });
    };
    
    // Only animate counters when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
});