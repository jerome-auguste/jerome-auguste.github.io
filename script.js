// Function to check if an element is in the viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
};

// Smooth scrolling when clicking on navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


// Fade-in effect for sections
const sections = document.querySelectorAll('section');
function handleScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (isInViewport(section)) {
      section.style.opacity = 1;
    } else if (section.style.opacity === "1") {
      // don't change the opacity if it's already 1
    } else {
      section.style.opacity = 0.2;
    }
  });

}

document.addEventListener('scroll', handleScroll);
