document.addEventListener("DOMContentLoaded", function () {
	let rated = document.querySelectorAll(".s-rated");
	// console.log("First Review Rating:", listing.reviews[0]?.rating);

	rated.forEach((rate, idx) => {
		if (hostel.reviews[idx]) {
			let rating = hostel.reviews[idx].rating;
			// console.log(`Review ${idx + 1} Rating:`, rating);

			if (!isNaN(rating) && rating > 0) {
				rate.innerHTML = svgData.smallStar.repeat(rating);
			}
		}
	});
});
