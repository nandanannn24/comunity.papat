// ===============================
// PATDEV STUDIO - UTILITIES
// ===============================

// Smooth scrolling untuk anchor links
export const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href')

            // Skip jika hanya "#" atau external link
            if (href === '#' || href === '#!' || href.includes('http')) return

            const targetElement = document.querySelector(href)

            if (targetElement) {
                e.preventDefault()

                const headerHeight = document.querySelector('header').offsetHeight || 80
                const elementPosition = targetElement.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })

                // Update URL tanpa reload
                if (href !== window.location.hash) {
                    window.history.pushState(null, null, href)
                }
            }
        })
    })
}

// Mobile menu functionality
export const initMobileMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu')
    const navLinks = document.querySelector('.nav-links')
    const mobileOverlay = document.createElement('div')

    mobileOverlay.className = 'mobile-overlay'
    document.body.appendChild(mobileOverlay)

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation()
            navLinks.classList.toggle('active')
            mobileMenu.classList.toggle('active')
            mobileOverlay.classList.toggle('active')
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : ''
        })

        mobileOverlay.addEventListener('click', () => {
            navLinks.classList.remove('active')
            mobileMenu.classList.remove('active')
            mobileOverlay.classList.remove('active')
            document.body.style.overflow = ''
        })

        // Close menu when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active')
                mobileMenu.classList.remove('active')
                mobileOverlay.classList.remove('active')
                document.body.style.overflow = ''
            })
        })

        // Close menu on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active')
                mobileMenu.classList.remove('active')
                mobileOverlay.classList.remove('active')
                document.body.style.overflow = ''
            }
        })
    }
}

// Back to top button
export const initBackToTop = () => {
    const backToTopBtn = document.createElement('div')
    backToTopBtn.className = 'back-to-top'
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>'
    document.body.appendChild(backToTopBtn)

    // Show/hide button on scroll
    const handleScroll = () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active')
        } else {
            backToTopBtn.classList.remove('active')
        }
    }

    window.addEventListener('scroll', handleScroll)

    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    // Initial check
    handleScroll()
}

// Current year in footer
export const updateCurrentYear = () => {
    const yearElements = document.querySelectorAll('.current-year')
    if (yearElements.length > 0) {
        const currentYear = new Date().getFullYear()
        yearElements.forEach(el => {
            el.textContent = currentYear
        })
    }
}

// Animation on scroll
export const initScrollAnimations = () => {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(
            '.philosophy-item, .service-card, .team-member, .skill-category, .project-card, .process-step'
        )

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top
            const elementVisible = 150

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animated')
            }
        })
    }

    // Initial check
    animateOnScroll()

    // Listen for scroll (debounced)
    let scrollTimeout
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(animateOnScroll, 50)
    })
}

// Header scroll effect
export const initHeaderScroll = () => {
    const header = document.querySelector('header')

    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled')
            } else {
                header.classList.remove('scrolled')
            }
        }

        window.addEventListener('scroll', handleScroll)

        // Initial check
        handleScroll()
    }
}

// Code animation in hero section
export const initCodeAnimation = () => {
    const codeLines = document.querySelectorAll('.code-line')
    if (codeLines.length > 0) {
        // Animate code lines on load
        setTimeout(() => {
            codeLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1'
                    line.style.transform = 'translateX(0)'
                }, index * 300)
            })
        }, 500)
    }
}

// Initialize all scripts
export const initAllScripts = () => {
    console.log('🚀 PatDev Studio - Initializing...')

    smoothScroll()
    initMobileMenu()
    initBackToTop()
    updateCurrentYear()
    initScrollAnimations()
    initHeaderScroll()
    initCodeAnimation()

    console.log('✅ All scripts initialized successfully')
    console.log('📱 Mobile:', window.innerWidth <= 768)
    console.log('💻 Desktop:', window.innerWidth > 768)

    // Console styling
    console.log('%c🚀 PatDev Studio', 'color: #6B46C1; font-size: 24px; font-weight: bold;')
    console.log('%cWebsite initialized successfully!', 'color: #00D4FF; font-size: 16px;')
    console.log('%cNeed help with your website? Contact us!', 'color: #10B981; font-size: 14px;')
}

// Error handling
window.addEventListener('error', function (e) {
    console.error('❌ Script error:', e.message)
})

// Window load event
window.addEventListener('load', function () {
    console.log('📄 Page fully loaded')
    document.body.classList.add('loaded')
})