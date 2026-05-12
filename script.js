
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("boot").classList.add("hidden");
  }, 2450);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section-reveal").forEach((section) => {
  observer.observe(section);
});
