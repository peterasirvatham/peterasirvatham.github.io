// ------------------------------
// 1. Header Fixed on Scroll
// ------------------------------
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (!header) return;

  if (window.scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});


// ------------------------------
// 2. Navbar Active Link + Close Menu on Click
// ------------------------------
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Close menu on mobile
    navbar.classList.remove("show");
  });
});


// ------------------------------
// 3. Hamburger Toggle
// ------------------------------
const hamBurger = document.querySelector(".hamburger");
if (hamBurger) {
  hamBurger.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });
}


// ------------------------------
// 4. Footer Dynamic Year
// ------------------------------
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
