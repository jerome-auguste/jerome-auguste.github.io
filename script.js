// Smooth scrolling when clicking on navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in effect for sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  section.style.opacity = 0;
});

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.style.opacity = 1;
    }
  });
});

// Function to check if an element is in the viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}
