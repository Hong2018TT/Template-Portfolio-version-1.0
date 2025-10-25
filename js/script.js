function toggleMenu() {
    let menuIcon = document.getElementById("menu-icon");
    let closeIcon = document.getElementById("close-icon");
    let navMenu = document.getElementById("navMenu");

    // Toggle active class for slide effect
    navMenu.classList.toggle("active");

    // Show/hide menu and close icons
    if (navMenu.classList.contains("active")) {
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}
