// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.background = window.scrollY > 100 ? 'rgba(10, 10, 10, 0.98)' : 'rgba(10, 10, 10, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat-card, .timeline-item');
animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Typing effect for hero title
const heroTitle = document.querySelector('.hero-title');
const titleText = heroTitle?.innerHTML || '';
if (heroTitle) heroTitle.innerHTML = '';

let i = 0;
function typeWriter() {
    if (i < titleText.length) {
        heroTitle.innerHTML += titleText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Skill tag hover effects
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
        this.style.boxShadow = '0 5px 15px rgba(0, 212, 255, 0.3)';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// ✅ Contact form integration with Node.js backend
// File: script.js
const contactForm = document.querySelector('.contact-form form');

contactForm?.addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message || 'Message sent successfully!');
      this.reset();
    } else {
      alert(data.message || 'Failed to send message.');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    alert('An error occurred. Please try again later.');
  }
});


// Button ripple effect
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = `${e.offsetX}px`;
        ripple.style.top = `${e.offsetY}px`;
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.pointerEvents = 'none';

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Ripple keyframes
const style = document.createElement('style');
style.textContent = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

// Floating animation
function addFloatingAnimation() {
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach((card, index) => {
        const delay = Math.random() * 2;
        const duration = 4 + Math.random() * 4;
        card.style.animationDelay = `${delay}s`;
        card.style.animationDuration = `${duration}s`;
    });
}
addFloatingAnimation();

// Project card hover
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) rotateX(5deg)';
        this.style.boxShadow = '0 25px 50px rgba(0, 212, 255, 0.2)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0deg)';
        this.style.boxShadow = 'none';
    });
});

// Logo glitch
const logo = document.querySelector('.logo-text');
logo?.addEventListener('mouseenter', () => {
    logo.style.animation = 'glitch 0.5s ease-in-out';
});
logo?.addEventListener('animationend', () => {
    logo.style.animation = '';
});

const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
@keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
}`;
document.head.appendChild(glitchStyle);

// Particle background
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(0, 212, 255, ${Math.random() * 0.5})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';
        particle.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`;
        particle.style.animationDelay = Math.random() * 10 + 's';

        hero?.appendChild(particle);
    }
}
createParticles();

// Final log
console.log('🚀 Portfolio loaded successfully!');
console.log('Made with ❤️ by Satvik Jambagi');
