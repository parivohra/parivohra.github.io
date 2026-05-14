// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Hamburger menu (mobile)
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    if (!isOpen) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '30px';
        navLinks.style.background = 'rgba(30,18,23,0.97)';
        navLinks.style.padding = '20px 30px';
        navLinks.style.borderRadius = '12px';
        navLinks.style.gap = '16px';
    }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Scroll reveal animation
const reveals = document.querySelectorAll(
    '.about-grid, .collection-card, .service-card, .testimonial-card, .contact-grid, .section-header'
);

reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.innerHTML = 'Appointment Booked! <i class="fas fa-check"></i>';
    btn.style.background = '#4CAF50';
    btn.style.borderColor = '#4CAF50';
    this.reset();
    setTimeout(() => {
        btn.innerHTML = 'Book Appointment <i class="fas fa-calendar-check"></i>';
        btn.style.background = '';
        btn.style.borderColor = '';
    }, 3500);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
            const active = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            if (active) active.style.color = '#e8789a';
        }
    });
});
