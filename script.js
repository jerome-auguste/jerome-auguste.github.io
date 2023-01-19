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

// Fade in sections on scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (sectionTop < window.innerHeight && sectionBottom > 0) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});

// Animate skills on hover
const skills = document.querySelectorAll("section#skills li");
skills.forEach(skill => {
  skill.addEventListener("mouseover", event => {
    skill.classList.add("animate");
  });
  skill.addEventListener("mouseout", event => {
    skill.classList.remove("animate");
  });
});
