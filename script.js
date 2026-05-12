
window.addEventListener("load", () => {

  const entries = document.querySelectorAll(".boot-entry");

  entries.forEach((entry, index) => {
    setTimeout(() => {
      entry.classList.add("visible");
    }, 700 + (index * 650));
  });

  setTimeout(() => {
    document.getElementById("boot").classList.add("hidden");
  }, 6200);
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
