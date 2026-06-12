const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");
const contactForm = document.querySelector(".contact-form");
const imageFrames = document.querySelectorAll(".image-frame");
const brandLogo = document.querySelector(".brand-mark img");

function setThemeIcon() {
    if (!themeToggle) {
        return;
    }

    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light" : "Dark";
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

setThemeIcon();

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        setThemeIcon();
    });
}

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        hamburger.setAttribute("aria-expanded", String(isOpen));
        hamburger.textContent = isOpen ? "Close" : "Menu";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
            hamburger.textContent = "Menu";
        });
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        setTimeout(() => {
            contactForm.reset();
        }, 500);
    });
}

if (brandLogo) {
    brandLogo.addEventListener("error", () => {
        brandLogo.style.display = "none";
    });
}

imageFrames.forEach((frame) => {
    const image = frame.querySelector("img");

    if (!image) {
        return;
    }

    if (image.complete && image.naturalWidth > 0) {
        frame.classList.add("has-image");
    }

    image.addEventListener("load", () => {
        frame.classList.add("has-image");
    });

    image.addEventListener("error", () => {
        image.style.display = "none";
        frame.classList.remove("has-image");
    });
});
