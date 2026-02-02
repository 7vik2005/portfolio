// Utility functions for better performance and reliability
const debounce = (func, wait) => {
<<<<<<< HEAD
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
=======
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
};

// Check if device is mobile
const isMobile = () => window.innerWidth <= 768;
const isTablet = () => window.innerWidth <= 1024 && window.innerWidth > 768;

// Mobile Navigation Toggle with improved accessibility
<<<<<<< HEAD
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;

hamburger?.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Prevent body scroll when mobile menu is open
  if (navMenu.classList.contains("active")) {
    body.style.overflow = "hidden";
    hamburger.setAttribute("aria-expanded", "true");
    navMenu.setAttribute("aria-hidden", "false");
  } else {
    body.style.overflow = "";
    hamburger.setAttribute("aria-expanded", "false");
    navMenu.setAttribute("aria-hidden", "true");
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    navMenu?.classList.contains("active") &&
    !navMenu.contains(e.target) &&
    !hamburger?.contains(e.target)
  ) {
    closeMobileMenu();
  }
=======
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

hamburger?.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when mobile menu is open
    if (navMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
        hamburger.setAttribute('aria-expanded', 'true');
        navMenu.setAttribute('aria-hidden', 'false');
    } else {
        body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-hidden', 'true');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu?.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburger?.contains(e.target)) {
        closeMobileMenu();
    }
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
});

// Close mobile menu function
function closeMobileMenu() {
<<<<<<< HEAD
  hamburger?.classList.remove("active");
  navMenu?.classList.remove("active");
  body.style.overflow = "";
  hamburger?.setAttribute("aria-expanded", "false");
  navMenu?.setAttribute("aria-hidden", "true");
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Enhanced smooth scrolling with mobile optimization
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = isMobile() ? 70 : 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
=======
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
    body.style.overflow = '';
    hamburger?.setAttribute('aria-expanded', 'false');
    navMenu?.setAttribute('aria-hidden', 'true');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Enhanced smooth scrolling with mobile optimization
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = isMobile() ? 70 : 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
});

// Enhanced navbar background on scroll with performance optimization
const handleScroll = throttle(() => {
<<<<<<< HEAD
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      navbar.style.background = "rgba(10, 10, 10, 0.98)";
      navbar.style.backdropFilter = "blur(15px)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
    } else {
      navbar.style.background = "rgba(10, 10, 10, 0.95)";
      navbar.style.backdropFilter = "blur(10px)";
      navbar.style.boxShadow = "none";
    }
  }
}, 16);

window.addEventListener("scroll", handleScroll);

// Enhanced Intersection Observer for animations with mobile optimization
const observerOptions = {
  threshold: isMobile() ? 0.1 : 0.2,
  rootMargin: isMobile() ? "0px 0px -30px 0px" : "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Add staggered animation for better mobile experience
      const delay =
        Array.from(entry.target.parentNode.children).indexOf(entry.target) *
        100;
      entry.target.style.animationDelay = `${delay}ms`;
    }
  });
}, observerOptions);

// Observe elements with improved mobile detection
const animateElements = document.querySelectorAll(
  ".project-card, .skill-category, .stat-card, .timeline-item, .education-card",
);
animateElements.forEach((el, index) => {
  el.classList.add("fade-in");
  // Add progressive delay for mobile
  if (isMobile()) {
    el.style.animationDelay = `${index * 150}ms`;
  }
  observer.observe(el);
});

// Enhanced typing effect with mobile optimization
const heroTitle = document.querySelector(".hero-title");
if (heroTitle) {
  const titleText = heroTitle.innerHTML;
  heroTitle.innerHTML = "";

  let i = 0;
  const speed = isMobile() ? 30 : 50; // Faster on mobile

  function typeWriter() {
    if (i < titleText.length) {
      heroTitle.innerHTML += titleText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      heroTitle.style.borderRight = "none"; // Remove cursor after typing
    }
  }

  // Add cursor effect
  heroTitle.style.borderRight = "3px solid #00d4ff";
  heroTitle.style.animation = "blink 1s infinite";

  window.addEventListener("load", () => {
    setTimeout(typeWriter, isMobile() ? 500 : 1000);
  });
=======
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = 'none';
        }
    }
}, 16);

window.addEventListener('scroll', handleScroll);

// Enhanced Intersection Observer for animations with mobile optimization
const observerOptions = {
    threshold: isMobile() ? 0.1 : 0.2,
    rootMargin: isMobile() ? '0px 0px -30px 0px' : '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Add staggered animation for better mobile experience
            const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
            entry.target.style.animationDelay = `${delay}ms`;
        }
    });
}, observerOptions);

// Observe elements with improved mobile detection
const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat-card, .timeline-item, .education-card');
animateElements.forEach((el, index) => {
    el.classList.add('fade-in');
    // Add progressive delay for mobile
    if (isMobile()) {
        el.style.animationDelay = `${index * 150}ms`;
    }
    observer.observe(el);
});

// Enhanced typing effect with mobile optimization
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const titleText = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    
    let i = 0;
    const speed = isMobile() ? 30 : 50; // Faster on mobile
    
    function typeWriter() {
        if (i < titleText.length) {
            heroTitle.innerHTML += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            heroTitle.style.borderRight = 'none'; // Remove cursor after typing
        }
    }

    // Add cursor effect
    heroTitle.style.borderRight = '3px solid #00d4ff';
    heroTitle.style.animation = 'blink 1s infinite';
    
    window.addEventListener('load', () => {
        setTimeout(typeWriter, isMobile() ? 500 : 1000);
    });
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
}

// Optimized parallax effect (disabled on mobile for performance)
if (!isMobile()) {
<<<<<<< HEAD
  const handleParallax = throttle(() => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector(".hero");
    const speed = scrolled * 0.3;
    if (parallax) {
      parallax.style.transform = `translateY(${speed}px)`;
    }
  }, 16);

  window.addEventListener("scroll", handleParallax);
}

// Enhanced skill tag interactions with touch support
document.querySelectorAll(".skill-tag").forEach((tag) => {
  // Mouse events for desktop
  tag.addEventListener("mouseenter", function () {
    if (!isMobile()) {
      this.style.transform = "translateY(-3px) scale(1.05)";
      this.style.boxShadow = "0 5px 15px rgba(0, 212, 255, 0.3)";
    }
  });

  tag.addEventListener("mouseleave", function () {
    if (!isMobile()) {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "none";
    }
  });

  // Touch events for mobile
  tag.addEventListener("touchstart", function () {
    this.style.transform = "scale(0.95)";
    this.style.background = "rgba(0, 212, 255, 0.2)";
  });

  tag.addEventListener("touchend", function () {
    setTimeout(() => {
      this.style.transform = "scale(1)";
      this.style.background = "rgba(0, 212, 255, 0.1)";
    }, 150);
  });
});

// Enhanced contact form with better mobile UX
const contactForm = document.querySelector(".contact-form form");

contactForm?.addEventListener("submit", async function (e) {
  e.preventDefault();

  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;

  // Show loading state
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;
  submitBtn.style.opacity = "0.7";

  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector("textarea").value.trim();

  // Enhanced validation
  if (!name || name.length < 2) {
    showNotification(
      "Please enter a valid name (at least 2 characters).",
      "error",
    );
    resetSubmitButton();
    return;
  }

  if (!email || !isValidEmail(email)) {
    showNotification("Please enter a valid email address.", "error");
    resetSubmitButton();
    return;
  }

  if (!message || message.length < 10) {
    showNotification(
      "Please enter a message (at least 10 characters).",
      "error",
    );
    resetSubmitButton();
    return;
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (response.ok) {
      showNotification(data.message || "Message sent successfully!", "success");
      this.reset();
    } else {
      showNotification(data.message || "Failed to send message.", "error");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    showNotification(
      "Network error. Please check your connection and try again.",
      "error",
    );
  }

  function resetSubmitButton() {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    submitBtn.style.opacity = "1";
  }

  setTimeout(resetSubmitButton, 1000);
=======
    const handleParallax = throttle(() => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        const speed = scrolled * 0.3;
        if (parallax) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
    }, 16);
    
    window.addEventListener('scroll', handleParallax);
}

// Enhanced skill tag interactions with touch support
document.querySelectorAll('.skill-tag').forEach(tag => {
    // Mouse events for desktop
    tag.addEventListener('mouseenter', function() {
        if (!isMobile()) {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 5px 15px rgba(0, 212, 255, 0.3)';
        }
    });

    tag.addEventListener('mouseleave', function() {
        if (!isMobile()) {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        }
    });

    // Touch events for mobile
    tag.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
        this.style.background = 'rgba(0, 212, 255, 0.2)';
    });

    tag.addEventListener('touchend', function() {
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            this.style.background = 'rgba(0, 212, 255, 0.1)';
        }, 150);
    });
});

// Enhanced contact form with better mobile UX
const contactForm = document.querySelector('.contact-form form');

contactForm?.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    // Enhanced validation
    if (!name || name.length < 2) {
        showNotification('Please enter a valid name (at least 2 characters).', 'error');
        resetSubmitButton();
        return;
    }

    if (!email || !isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        resetSubmitButton();
        return;
    }

    if (!message || message.length < 10) {
        showNotification('Please enter a message (at least 10 characters).', 'error');
        resetSubmitButton();
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
            showNotification(data.message || 'Message sent successfully!', 'success');
            this.reset();
        } else {
            showNotification(data.message || 'Failed to send message.', 'error');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification('Network error. Please check your connection and try again.', 'error');
    }

    function resetSubmitButton() {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }

    setTimeout(resetSubmitButton, 1000);
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
});

// Email validation helper
function isValidEmail(email) {
<<<<<<< HEAD
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Enhanced notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <span class="notification-icon">${type === "success" ? "✓" : type === "error" ? "✗" : "ℹ"}</span>
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success" ? "#4CAF50" : type === "error" ? "#f44336" : "#2196F3"};
=======
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.3);
        z-index: 10000;
        max-width: calc(100vw - 40px);
        word-wrap: break-word;
        animation: slideIn 0.3s ease-out;
    `;

<<<<<<< HEAD
  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  const autoRemove = setTimeout(() => notification.remove(), 5000);

  // Manual close
  notification
    .querySelector(".notification-close")
    .addEventListener("click", () => {
      clearTimeout(autoRemove);
      notification.style.animation = "slideOut 0.3s ease-in";
      setTimeout(() => notification.remove(), 300);
=======
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    const autoRemove = setTimeout(() => notification.remove(), 5000);

    // Manual close
    notification.querySelector('.notification-close').addEventListener('click', () => {
        clearTimeout(autoRemove);
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
    });
}

// Enhanced button ripple effect with touch support
<<<<<<< HEAD
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", createRipple);
  btn.addEventListener("touchstart", createRipple);

  function createRipple(e) {
    const ripple = document.createElement("span");
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.cssText = `
=======
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', createRipple);
    btn.addEventListener('touchstart', createRipple);
    
    function createRipple(e) {
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.cssText = `
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
<<<<<<< HEAD
            left: ${(e.clientX || e.touches[0].clientX) - rect.left - size / 2}px;
            top: ${(e.clientY || e.touches[0].clientY) - rect.top - size / 2}px;
            pointer-events: none;
        `;

    btn.style.position = "relative";
    btn.style.overflow = "hidden";
    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  }
});

// Enhanced project card interactions with mobile optimization
document.querySelectorAll(".project-card").forEach((card) => {
  if (!isMobile()) {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) rotateX(5deg)";
      this.style.boxShadow = "0 25px 50px rgba(0, 212, 255, 0.2)";
      this.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) rotateX(0deg)";
      this.style.boxShadow = "none";
    });
  } else {
    // Touch interactions for mobile
    card.addEventListener("touchstart", function () {
      this.style.transform = "scale(0.98)";
      this.style.transition = "transform 0.1s ease";
    });

    card.addEventListener("touchend", function () {
      this.style.transform = "scale(1)";
      this.style.transition = "transform 0.2s ease";
    });
  }
});

// Enhanced logo interaction
const logo = document.querySelector(".logo-text");
logo?.addEventListener("mouseenter", () => {
  if (!isMobile()) {
    logo.style.animation = "glitch 0.5s ease-in-out";
  }
});

logo?.addEventListener("touchstart", () => {
  if (isMobile()) {
    logo.style.animation = "glitch 0.3s ease-in-out";
  }
});

logo?.addEventListener("animationend", () => {
  logo.style.animation = "";
=======
            left: ${(e.clientX || e.touches[0].clientX) - rect.left - size/2}px;
            top: ${(e.clientY || e.touches[0].clientY) - rect.top - size/2}px;
            pointer-events: none;
        `;

        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
});

// Enhanced project card interactions with mobile optimization
document.querySelectorAll('.project-card').forEach(card => {
    if (!isMobile()) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg)';
            this.style.boxShadow = '0 25px 50px rgba(0, 212, 255, 0.2)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
            this.style.boxShadow = 'none';
        });
    } else {
        // Touch interactions for mobile
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.2s ease';
        });
    }
});

// Enhanced logo interaction
const logo = document.querySelector('.logo-text');
logo?.addEventListener('mouseenter', () => {
    if (!isMobile()) {
        logo.style.animation = 'glitch 0.5s ease-in-out';
    }
});

logo?.addEventListener('touchstart', () => {
    if (isMobile()) {
        logo.style.animation = 'glitch 0.3s ease-in-out';
    }
});

logo?.addEventListener('animationend', () => {
    logo.style.animation = '';
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
});

// Optimized particle background (reduced count on mobile)
function createParticles() {
<<<<<<< HEAD
  if (isMobile()) return; // Skip particles on mobile for performance

  const hero = document.querySelector(".hero");
  const particleCount = isTablet() ? 25 : 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 4 + 1;
    particle.style.cssText = `
=======
    if (isMobile()) return; // Skip particles on mobile for performance
    
    const hero = document.querySelector('.hero');
    const particleCount = isTablet() ? 25 : 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 4 + 1;
        particle.style.cssText = `
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(0, 212, 255, ${Math.random() * 0.5});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            animation: float ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 10}s;
            will-change: transform;
        `;

<<<<<<< HEAD
    hero?.appendChild(particle);
  }
=======
        hero?.appendChild(particle);
    }
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
}

// Responsive handling
function handleResize() {
<<<<<<< HEAD
  const currentlyMobile = isMobile();

  // Close mobile menu if screen becomes desktop
  if (!currentlyMobile && navMenu?.classList.contains("active")) {
    closeMobileMenu();
  }

  // Refresh particles based on screen size
  document.querySelectorAll(".particle").forEach((p) => p.remove());
  createParticles();
}

window.addEventListener("resize", debounce(handleResize, 250));

// Add CSS animations if not already present
if (!document.querySelector("#portfolio-animations")) {
  const style = document.createElement("style");
  style.id = "portfolio-animations";
  style.textContent = `
=======
    const currentlyMobile = isMobile();
    
    // Close mobile menu if screen becomes desktop
    if (!currentlyMobile && navMenu?.classList.contains('active')) {
        closeMobileMenu();
    }
    
    // Refresh particles based on screen size
    document.querySelectorAll('.particle').forEach(p => p.remove());
    createParticles();
}

window.addEventListener('resize', debounce(handleResize, 250));

// Add CSS animations if not already present
if (!document.querySelector('#portfolio-animations')) {
    const style = document.createElement('style');
    style.id = 'portfolio-animations';
    style.textContent = `
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
<<<<<<< HEAD

=======
        
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
<<<<<<< HEAD

=======
        
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
        @keyframes blink {
            0%, 50% { border-color: #00d4ff; }
            51%, 100% { border-color: transparent; }
        }
<<<<<<< HEAD

=======
        
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
<<<<<<< HEAD

=======
        
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
<<<<<<< HEAD

=======
        
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
        @media (max-width: 768px) {
            .notification {
                top: 10px !important;
                right: 10px !important;
                left: 10px !important;
                max-width: none !important;
            }
        }
<<<<<<< HEAD

=======
        
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `;
<<<<<<< HEAD
  document.head.appendChild(style);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  createParticles();

  // Add loading animation
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in-out";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Performance monitoring
if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.addEventListener("load", () => {
      img.style.animation = "fadeIn 0.5s ease-in-out";
    });
  });
}

// Error handling for better UX
window.addEventListener("error", (e) => {
  console.error("Portfolio error:", e.error);
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason);
});

// Final initialization log
console.log("🚀 Enhanced Portfolio loaded successfully!");
console.log("📱 Mobile optimizations active");
console.log("⚡ Performance optimizations enabled");
console.log("Made with ❤️ by Satvik Jambagi");
=======
    document.head.appendChild(style);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Performance monitoring
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.animation = 'fadeIn 0.5s ease-in-out';
        });
    });
}

// Error handling for better UX
window.addEventListener('error', (e) => {
    console.error('Portfolio error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Final initialization log
console.log('🚀 Enhanced Portfolio loaded successfully!');
console.log('📱 Mobile optimizations active');
console.log('⚡ Performance optimizations enabled');
console.log('Made with ❤️ by Satvik Jambagi');
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
