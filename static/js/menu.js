const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
	const navLink = navMenu.querySelectorAll("a, .nav-link");
	const desktop = window.matchMedia("(min-width: 769px)");

	hamburger.addEventListener("click", toggleMenu);
	navLink.forEach(n => n.addEventListener("click", closeMenu));

	// Escape closes the menu and hands focus back to the button.
	document.addEventListener("keydown", function(e) {
		if (!isOpen()) {
			return;
		}

		if (e.key === "Escape") {
			closeMenu();
			hamburger.focus();
		} else if (e.key === "Tab") {
			trapFocus(e);
		}
	});

	// Don't leave the page scroll-locked when resizing up to the desktop layout.
	desktop.addEventListener("change", function(e) {
		if (e.matches) {
			closeMenu();
		}
	});

	// Pages restored from the back/forward cache keep their old classes.
	window.addEventListener("pageshow", function(e) {
		if (e.persisted) {
			closeMenu();
		}
	});
}

function isOpen() {
	return navMenu.classList.contains("active");
}

function toggleMenu() {
	if (isOpen()) {
		closeMenu();
	} else {
		openMenu();
	}
}

function openMenu() {
	lockScroll();
	hamburger.classList.add("active");
	navMenu.classList.add("active");
	hamburger.setAttribute("aria-expanded", "true");

	const first = navMenu.querySelector("a");
	if (first) {
		first.focus();
	}
}

function closeMenu() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
	hamburger.setAttribute("aria-expanded", "false");
	unlockScroll();
}

// The page scrolls on <html>, so the lock class goes there as well as on
// <body>. Measure the scrollbar before locking — once the class lands the
// scrollbar is gone and the measurement reads zero.
function lockScroll() {
	const width = window.innerWidth - document.documentElement.clientWidth;

	document.documentElement.style.setProperty("--scrollbar-width", width + "px");
	document.documentElement.classList.add("menu-open");
	document.body.classList.add("menu-open");
}

function unlockScroll() {
	document.documentElement.classList.remove("menu-open");
	document.body.classList.remove("menu-open");
	document.documentElement.style.removeProperty("--scrollbar-width");
}

// Keep Tab inside the open menu, cycling between the button and the links.
function trapFocus(e) {
	const items = [hamburger].concat(Array.from(navMenu.querySelectorAll("a")));
	const first = items[0];
	const last = items[items.length - 1];

	if (e.shiftKey && document.activeElement === first) {
		e.preventDefault();
		last.focus();
	} else if (!e.shiftKey && document.activeElement === last) {
		e.preventDefault();
		first.focus();
	}
}
