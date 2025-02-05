import "./assets/css/tailwind.css";

let switchers = document.querySelectorAll(".switcher");

// Set default to light only if not already set
if (!localStorage.getItem("color-theme")) {
  localStorage.setItem("color-theme", "light");
}

// Apply theme based on storage
if (localStorage.getItem("color-theme") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

switchers.forEach((switcher) => {
  switcher.addEventListener("click", function () {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  });
});

// Rest of your existing code for theme toggle and menu
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleBtn = document.getElementById('theme-toggle');

const menuBtn = document.getElementById('menu');
const mobileMenu = document.querySelector('.w-full.h-0.lg\\:w-fit');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');

menuBtn.addEventListener('click', function() {
    // Toggle menu visibility
    mobileMenu.classList.toggle('h-0');
    mobileMenu.classList.toggle('h-auto');
    
    // Animate hamburger icon
    line1.classList.toggle('rotate-45');
    line1.classList.toggle('translate-y-[6px]');
    line2.classList.toggle('-rotate-45');
    line2.classList.toggle('-translate-y-[2px]');
});