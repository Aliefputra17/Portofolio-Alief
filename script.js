
// ===================================
// PORTFOLIO ALIEF - JAVASCRIPT
// ===================================

// 1. ANIMASI TEKS BERGANTI
const typingElement = document.querySelector(".typing-text");

const textList = [
    "Network Enthusiast",
    "Linux Learner",
    "Cybersecurity Enthusiast",
    "Server Administrator"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typingElement) return;

    const currentText = textList[textIndex];

    typingElement.textContent = currentText.substring(0, charIndex);

    if (!deleting) {
        charIndex++;

        if (charIndex > currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            charIndex = 0;
            textIndex = (textIndex + 1) % textList.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();


// 2. ANIMASI SAAT SCROLL
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
} else {
    revealElements.forEach(element => {
        element.classList.add("active");
    });
}


// 3. MENU NAVIGASI HP
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// 4. TAHUN COPYRIGHT OTOMATIS
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 5. PESAN DI CONSOLE
console.log("Portfolio Alief berhasil dijalankan!");

