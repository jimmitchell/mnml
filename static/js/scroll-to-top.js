const mybutton = document.getElementById("to-top");

if (mybutton) {
	// addEventListener rather than window.onscroll, which would clobber any
	// other scroll handler on the page (Micro.blog plugins add their own).
	window.addEventListener("scroll", onScroll, { passive: true });
	mybutton.addEventListener("click", topFunction);
	scrollFunction();
}

let ticking = false;

function onScroll() {
	if (!ticking) {
		ticking = true;
		window.requestAnimationFrame(function() {
			scrollFunction();
			ticking = false;
		});
	}
}

function scrollFunction() {
	const y = window.scrollY || document.documentElement.scrollTop;
	mybutton.style.display = y > 100 ? "block" : "none";
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
