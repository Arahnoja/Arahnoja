// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle")
  const html = document.documentElement

  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem("theme") || "dark"
  html.classList.toggle("dark", currentTheme === "dark")

  themeToggle.addEventListener("click", () => {
    const isDark = html.classList.contains("dark")
    html.classList.toggle("dark", !isDark)
    localStorage.setItem("theme", !isDark ? "dark" : "light")

    // Update icon
    const icon = themeToggle.querySelector("svg")
    if (!isDark) {
      // Switch to moon icon for dark mode
      icon.innerHTML =
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>'
    } else {
      // Switch to sun icon for light mode
      icon.innerHTML =
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>'
    }
  })

  // Navigation functionality
  const navButtons = document.querySelectorAll(".nav-btn")
  navButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      navButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")

      // You can add navigation logic here
      console.log(`Navigation ${index} clicked`)
    })
  })

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      }),
    )
  }

  // Contact Form Handling
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Simple validation
      if (!data.name || !data.email || !data.service || !data.message) {
        alert("Please fill in all required fields.")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        alert("Please enter a valid email address.")
        return
      }

      // Simulate form submission
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      submitBtn.textContent = "Sending..."
      submitBtn.disabled = true

      // Simulate API call
      setTimeout(() => {
        alert("Thank you for your message! I will get back to you within 24 hours.")
        contactForm.reset()
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }, 2000)
    })
  }

  // Smooth scroll for buttons
  document.querySelector('button[class*="MORE ABOUT ME"]')?.addEventListener("click", () => {
    // Add your navigation logic here
    console.log("More about me clicked")
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add scroll effect to navbar
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
      navbar.style.backdropFilter = "blur(10px)"
    } else {
      navbar.style.background = "#ffffff"
      navbar.style.backdropFilter = "none"
    }
  })

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".service-card, .testimonial-card, .qual-card, .package-card, .faq-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Particle System
  function createParticles() {
    const particlesContainer = document.getElementById("particles")
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 15 + "s"
      particle.style.animationDuration = Math.random() * 10 + 10 + "s"
      particlesContainer.appendChild(particle)
    }
  }

  // Mobile Navigation
  function initMobileNav() {
    const hamburger = document.querySelector(".hamburger")
    const navMenu = document.querySelector(".nav-menu")

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
      })

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active")
          navMenu.classList.remove("active")
        })
      })
    }
  }

  // Smooth Scrolling
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  }

  // Active Navigation
  function updateActiveNav() {
    const sections = document.querySelectorAll("section[id]")
    const navLinks = document.querySelectorAll(".nav-link")

    window.addEventListener("scroll", () => {
      let current = ""
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (scrollY >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })

      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active")
        }
      })
    })
  }

  // Tilt Effect
  function initTiltEffect() {
    const tiltElements = document.querySelectorAll("[data-tilt]")

    tiltElements.forEach((element) => {
      element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 10
        const rotateY = (centerX - x) / 10

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
      })

      element.addEventListener("mouseleave", () => {
        element.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
      })
    })
  }

  // Contact Form
  function initContactForm() {
    const contactForm = document.getElementById("contactForm")

    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()

        // Get form data
        const formData = new FormData(contactForm)
        const data = Object.fromEntries(formData)

        // Simple validation
        if (!data.name || !data.email || !data.service || !data.message) {
          showNotification("Please fill in all required fields.", "error")
          return
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(data.email)) {
          showNotification("Please enter a valid email address.", "error")
          return
        }

        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]')
        const originalText = submitBtn.querySelector("span").textContent
        submitBtn.querySelector("span").textContent = "SENDING..."
        submitBtn.disabled = true

        // Simulate API call
        setTimeout(() => {
          showNotification("Message sent successfully! I will get back to you within 24 hours.", "success")
          contactForm.reset()
          submitBtn.querySelector("span").textContent = originalText
          submitBtn.disabled = false
        }, 2000)
      })
    }
  }

  // Notification System
  function showNotification(message, type = "info") {
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.innerHTML = `
      <div class="notification-content">
        <span>${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === "success" ? "var(--accent-gradient)" : "var(--secondary-gradient)"};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `

    document.body.appendChild(notification)

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)

    // Close functionality
    const closeBtn = notification.querySelector(".notification-close")
    closeBtn.addEventListener("click", () => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    })

    // Auto close
    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.style.transform = "translateX(100%)"
        setTimeout(() => {
          document.body.removeChild(notification)
        }, 300)
      }
    }, 5000)
  }

  // Scroll Animations
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    // Observe elements for animation
    document.querySelectorAll(".service-card, .skill-item, .contact-item").forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })
  }

  // Navbar Scroll Effect
  function initNavbarScroll() {
    const navbar = document.querySelector(".navbar")

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.background = "rgba(10, 10, 15, 0.95)"
        navbar.style.backdropFilter = "blur(20px)"
      } else {
        navbar.style.background = "rgba(10, 10, 15, 0.9)"
        navbar.style.backdropFilter = "blur(20px)"
      }
    })
  }

  // Cursor Effect
  function initCursorEffect() {
    const cursor = document.createElement("div")
    cursor.className = "custom-cursor"
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: var(--neon-blue);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.1s ease;
    `
    document.body.appendChild(cursor)

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX - 10 + "px"
      cursor.style.top = e.clientY - 10 + "px"
    })

    // Scale cursor on hover
    document.querySelectorAll("a, button, [data-tilt]").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(2)"
      })
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)"
      })
    })
  }

  // Initialize everything when DOM is loaded
  createParticles()
  initMobileNav()
  initSmoothScroll()
  updateActiveNav()
  initTiltEffect()
  initContactForm()
  initScrollAnimations()
  initNavbarScroll()
  initCursorEffect()

  // Add loading animation
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})

// Performance optimization
window.addEventListener("load", () => {
  // Preload critical images
  const criticalImages = ["https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=300&h=300&fit=crop&crop=face"]

  criticalImages.forEach((src) => {
    const img = new Image()
    img.src = src
  })
})
