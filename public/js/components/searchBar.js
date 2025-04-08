const navbar = document.querySelector(".navbar");
const searchBar = document.querySelector(".search-bar");
// document.body.style.paddingTop = `${navbar.offsetHeight + 3}px`;

window.addEventListener("scroll", () => {
	if (window.scrollY > 50) {
		searchBar.classList.add("scrolled");
		navbar.classList.add("border-bottom");
	} else {
		searchBar.classList.remove("scrolled");
		navbar.classList.remove("border-bottom");
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const locationOptions = document.querySelectorAll(".location-option");

	locationOptions.forEach((option) => {
		option.addEventListener("click", () => {
			const city = option.getAttribute("data-city");
			const state = option.getAttribute("data-state");

			const url = new URL(window.location.href);
			url.searchParams.set("city", city);
			url.searchParams.set("state", state);

			window.location.href = url.toString();
		});
	});
});
