const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");
const contactForm = document.querySelector(".contact-form");
const imageFrames = document.querySelectorAll(".image-frame");
const brandLogo = document.querySelector(".brand-mark img");
const emailLink = document.getElementById("email-link");
const emailText = document.getElementById("email-text");

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
    contactForm.addEventListener("submit", () => {
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

if (emailLink && emailText) {
    const emailCodes = [100, 100, 101, 118, 51, 49, 48, 56, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109];
    const emailAddress = String.fromCharCode(...emailCodes);

    emailLink.href = `mailto:${emailAddress}`;
    emailText.textContent = emailAddress;
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
