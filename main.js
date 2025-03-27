import 'tailwindcss/tailwind.css'
import './assets/css/tailwind.css'

// Theme toggle functionality
function setupThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    if (!themeToggleBtn) return;
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply the correct theme on page load
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }
    
    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Mobile menu functionality
function setupMobileMenu() {
    const menu = document.getElementById('menu');
    const mobileMenuContent = document.querySelector('.w-full.h-0.lg\\:w-fit');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    
    if (!menu || !mobileMenuContent || !line1 || !line2) return;
    
    let isOpen = false;
    
    menu.addEventListener('click', () => {
        if (isOpen) {
            mobileMenuContent.classList.add('h-0');
            mobileMenuContent.classList.remove('h-fit');
            line1.classList.remove('rotate-45', 'translate-y-[0.35rem]');
            line2.classList.remove('-rotate-45', '-translate-y-[0.35rem]');
        } else {
            mobileMenuContent.classList.remove('h-0');
            mobileMenuContent.classList.add('h-fit');
            line1.classList.add('rotate-45', 'translate-y-[0.35rem]');
            line2.classList.add('-rotate-45', '-translate-y-[0.35rem]');
        }
        isOpen = !isOpen;
    });
}

// Function to highlight the best value plan
function setupPlanHighlighting() {
    const premiumPlan = document.querySelector('.border-primary-500');
    
    if (premiumPlan) {
        // Add a slight pulse animation to draw attention
        setInterval(() => {
            premiumPlan.classList.add('scale-105');
            setTimeout(() => {
                premiumPlan.classList.remove('scale-105');
            }, 500);
        }, 5000);
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    setupMobileMenu();
    setupPlanHighlighting();
});