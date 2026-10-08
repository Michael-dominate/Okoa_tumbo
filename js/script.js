// Welcome alert on Home Page
window.onload = () => {
  if (window.location.pathname.includes("index.html")) {
    alert("Karibu! Welcome to Al hilal dishes.");
  }
};

// Image Slider
let current = 0;
const slides = document.querySelectorAll(".slider img");
if (slides.length > 0) {
  setInterval(() => {
    slides[current].style.display = "none";
    current = (current + 1) % slides.length;
    slides[current].style.display = "block";
  }, 3000);
}

// Quote Rotator on About Page
const quotes = [
  "Haraka haraka haina baraka.",
  "Pole pole ndio mwendo.",
  "Mgeni njoo, mwenyeji apone."
];
let qIndex = 0;
if (document.getElementById("quote")) {
  setInterval(() => {
    document.getElementById("quote").innerText = quotes[qIndex];
    qIndex = (qIndex + 1) % quotes.length;
  }, 4000);
}

// Show Menu Categories
function showCategory(cat) {
  document.querySelectorAll('.category').forEach(c => c.style.display = 'none');
  document.getElementById(cat).style.display = 'flex';
}

// Contact Form Validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Asante! Your message has been sent.");
    form.reset();
  });
}