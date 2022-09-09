// Menu hamburguesa

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Cerrar el menu hamburguesa cuando le da clic a un link
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  burger.classList.remove("active");
  navMenu.classList.remove("active");
}
