document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");
        menuIcon.setAttribute("aria-expanded", isOpen);

        if (isOpen) {
            menuIcon.textContent = "✕";
        } else {
            menuIcon.textContent = "☰";
        }
    });
});
