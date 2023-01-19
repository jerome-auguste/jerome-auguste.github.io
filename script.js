// Smooth scroll to sections
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Mouseover animations
const sections = document.querySelectorAll("section");
sections.forEach(section => {
  section.addEventListener("mouseover", event => {
    section.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  });
  section.addEventListener("mouseout", event => {
    section.style.backgroundColor = "white";
  });
});
