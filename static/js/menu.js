const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	document.body.classList.toggle("menu-open");
}

function closeMenu() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
	document.body.classList.remove("menu-open");
}