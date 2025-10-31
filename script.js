// ============================================
// Mobile Menu Toggle
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Close menu when clicking on a navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
            }
        });
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnToggle = menuToggle && menuToggle.contains(event.target);

            if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        }
    });
});

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();

            // Smooth scroll to target
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Update URL without triggering scroll
            history.pushState(null, null, href);
        }
    });
});

// ============================================
// Active Navigation Link Based on Scroll
// ============================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('.content-section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    const scrollPosition = window.scrollY + 200; // Offset for better UX

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    // If at the top of the page, highlight the first section
    if (window.scrollY < 200) {
        const firstSection = document.querySelector('.content-section[id]');
        if (firstSection) {
            current = firstSection.getAttribute('id');
        }
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Throttle function for performance
function throttle(func, wait) {
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

// Add scroll listener with throttling
window.addEventListener('scroll', throttle(updateActiveNavLink, 100));

// Initial call
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// ============================================
// Fade-in Animation for Elements
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, observerOptions);

    // Observe publications and research topics
    const animateElements = document.querySelectorAll('.publication, .research-topic');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Helper CSS class for fade-in
const style = document.createElement('style');
style.textContent = `
    .fade-in-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ============================================
// Handle Deep Links (URL Hash on Page Load)
// ============================================
window.addEventListener('load', function() {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
});
