function toggleMobileNav() {
  hamburgerButton.classList.toggle("open");
}

const hamburgerButton = document.getElementById("mobile-nav-toggle");

hamburgerButton.addEventListener("click", toggleMobileNav);
