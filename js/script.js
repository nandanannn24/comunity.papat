// Enhanced JavaScript untuk Glass Morphism Effect
document.addEventListener('DOMContentLoaded', function () {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');

        // Check for saved theme preference or use OS preference
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);

            // Update glass morphism variables
            updateGlassMorphism(newTheme);
        });

        function updateThemeIcon(theme) {
            if (theme === 'dark') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
    }

    // Enhanced Mobile Menu Toggle dengan Glass Effect
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-overlay';
    document.body.appendChild(mobileOverlay);

    if (mobileMenu && navLinks) {
        // Convert mobile menu to hamburger icon
        const menuIcon = document.createElement('div');
        menuIcon.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        mobileMenu.innerHTML = '';
        mobileMenu.appendChild(menuIcon);

        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        mobileOverlay.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    mobileOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });

    // Add scroll effect to header dengan Glass Effect
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        const backToTop = document.querySelector('.back-to-top');

        if (window.scrollY > 100) {
            header.style.background = 'var(--glass-bg)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            if (backToTop) backToTop.classList.add('active');
        } else {
            header.style.background = 'var(--glass-bg)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            if (backToTop) backToTop.classList.remove('active');
        }
    });

    // Back to top functionality dengan Glass Effect
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Enhanced Animation on scroll untuk Glass Elements
    function animateOnScroll() {
        const elements = document.querySelectorAll('.pillar, .philosophy-item, .service-card, .process-step, .skill-category, .team-member, .testimonial-item, .project-card, .philosophy-bubble');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }

    // Initialize elements with initial styles for animation
    const animatedElements = document.querySelectorAll('.pillar, .philosophy-item, .service-card, .process-step, .skill-category, .team-member, .testimonial-item, .project-card, .philosophy-bubble');

    animatedElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    // Trigger initial animation check
    animateOnScroll();

    // Listen for scroll events with throttle
    let scrollTimeout;
    window.addEventListener('scroll', function () {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function () {
                scrollTimeout = null;
                animateOnScroll();
            }, 100);
        }
    });

    // Code animation enhancement
    const codeLines = document.querySelectorAll('.code-line');
    if (codeLines.length > 0) {
        codeLines.forEach((line, index) => {
            line.style.transform = 'translateX(-20px)';
        });
    }

    // Project image lazy loading
    const projectImages = document.querySelectorAll('.project-img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src') || img.src;
                if (src && !img.src.includes(src)) {
                    img.src = src;
                }
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    projectImages.forEach(img => {
        if (!img.complete || img.naturalHeight === 0) {
            img.classList.add('lazy');
            imageObserver.observe(img);
        }
    });

    // Glass morphism theme update function
    function updateGlassMorphism(theme) {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.style.setProperty('--glass-bg', 'rgba(0, 0, 0, 0.25)');
            root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');
            root.style.setProperty('--glass-shadow', '0 8px 32px 0 rgba(0, 0, 0, 0.37)');
        } else {
            root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.25)');
            root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.18)');
            root.style.setProperty('--glass-shadow', '0 8px 32px 0 rgba(31, 38, 135, 0.37)');
        }
    }

    // Initialize glass morphism
    const currentTheme = document.documentElement.getAttribute('data-theme');
    updateGlassMorphism(currentTheme);

    // Parallax effect untuk background shapes
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');

        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translate3d(0, ${yPos}px, 0) ${shape.style.transform.split(' ').slice(3).join(' ')}`;
        });
    });

    // Performance optimization untuk mobile
    if (isMobileDevice()) {
        // Reduce animations on mobile
        document.documentElement.style.setProperty('--transition', 'all 0.2s ease');

        // Disable parallax on mobile for better performance
        window.removeEventListener('scroll', parallaxHandler);
    }
});

// Mobile detection
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Image error handling
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function () {
            this.style.display = 'none';
            console.warn('Image failed to load:', this.src);
        });
    });
});