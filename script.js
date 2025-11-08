const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuToggle = document.getElementById("menuToggle");
  mobileMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
}

// Smooth scroll to sections
function scrollToSection(id, event) {
  if (event) {
    event.preventDefault();
  }
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  // Close mobile menu if open
  const mobileMenu = document.getElementById("mobileMenu");
  const menuToggle = document.getElementById("menuToggle");
  mobileMenu.classList.remove("active");
  menuToggle.classList.remove("active");
}

// WhatsApp handler
function handleWhatsApp() {
  const phone = "6285227803662";
  const message = encodeURIComponent(
    "Halo, saya tertarik membeli produk makanan dari Balancesweet Kitchen"
  );
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe products
const productCards = document.querySelectorAll(".product-card");
productCards.forEach(function (card, index) {
  card.style.transitionDelay = index * 0.2 + "s";
  observer.observe(card);
});

// Observe about content
const aboutContent = document.getElementById("aboutContent");
if (aboutContent) {
  observer.observe(aboutContent);
}

// Observe features
const featureCards = document.querySelectorAll(".feature-card");
featureCards.forEach(function (card, index) {
  card.style.transitionDelay = index * 0.2 + "s";
  observer.observe(card);
});

// Observe contact cards
const contactCards = document.querySelectorAll(".contact-card");
contactCards.forEach(function (card, index) {
  card.style.transitionDelay = index * 0.2 + "s";
  observer.observe(card);
});

// Observe section titles and descriptions
const animatedElements = document.querySelectorAll(
  ".section-title, .section-description"
);
animatedElements.forEach(function (element) {
  observer.observe(element);
});
