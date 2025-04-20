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

			const cityDisplay = document.getElementById("selected-city");
			if (cityDisplay) {
				cityDisplay.innerText = city === "None" ? "Search destinations" : city;
			}

			const url = new URL(window.location.href);
			url.searchParams.set("city", city);
			url.searchParams.set("state", state);

			window.location.href = url.toString();
		});

		const collegeOptions = document.querySelectorAll(".college-option");

		collegeOptions.forEach((option) => {
			option.addEventListener("click", () => {
				const college = option.getAttribute("data-college");
				const collegeDisplay = document.getElementById("selected-college");

				if (collegeDisplay) {
					collegeDisplay.innerText =
						college === "None" ? "Add college" : college;
				}

				const url = new URL(window.location.href);
				if (college === "None") {
					url.searchParams.delete("college");
				} else {
					url.searchParams.set("college", college);
				}

				window.location.href = url.toString();
			});
		});
	});
});
document.addEventListener("DOMContentLoaded", () => {
	const priceForm = document.getElementById("priceRangeForm");

	if (priceForm) {
		priceForm.addEventListener("submit", (e) => {
			e.preventDefault();

			const minPrice = document.getElementById("minPrice").value;
			const maxPrice = document.getElementById("maxPrice").value;

			const url = new URL(window.location.href);

			if (minPrice) {
				url.searchParams.set("minPrice", minPrice);
			} else {
				url.searchParams.delete("minPrice");
			}

			if (maxPrice) {
				url.searchParams.set("maxPrice", maxPrice);
			} else {
				url.searchParams.delete("maxPrice");
			}
			if (!minPrice && !maxPrice) {
				e.preventDefault(); // Prevent form submission if both fields are empty
				return;
			}

			window.location.href = url.toString();
		});
	}

	const clearButton = document.getElementById("clearPriceFilter");
	if (clearButton) {
		clearButton.addEventListener("click", () => {
			// Clear inputs
			document.getElementById("minPrice").value = "";
			document.getElementById("maxPrice").value = "";

			// Redirect to hostel index without any price filter
			const url = new URL(window.location.href);
			url.searchParams.delete("minPrice");
			url.searchParams.delete("maxPrice");

			window.location.href = url.toString(); // Show all hostels
		});
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const forWhomForm = document.getElementById("forWhomForm");

	if (forWhomForm) {
		forWhomForm.addEventListener("submit", (e) => {
			e.preventDefault();
			const value = document.getElementById("forWhomSelect").value;

			const url = new URL(window.location.href);
			if (value) {
				url.searchParams.set("forWhom", value);
			} else {
				url.searchParams.delete("forWhom");
			}
			window.location.href = url.toString();
		});

		document.getElementById("clearForWhom").addEventListener("click", () => {
			const url = new URL(window.location.href);
			url.searchParams.delete("forWhom");
			window.location.href = url.toString();
		});
	}
});
