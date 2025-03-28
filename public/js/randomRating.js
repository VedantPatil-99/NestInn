function getRandomData() {
	return {
		rating: (Math.random() * (5 - 1) + 1).toFixed(1), // Ratings between 1.0 to 5.0
		reviews: Math.floor(Math.random() * (500 - 10 + 1)) + 10, // Reviews between 10 and 500
		km: Math.floor(Math.random() * (600 - 15 + 1)) + 15, // Distance between 15 to 600 km
	};
}

// Example usage
document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".random-rating").forEach((ele) => {
		const data = getRandomData();
		ele.innerHTML = `${data.rating} ⭐ <span class="text-secondary">(${data.reviews} reviews)</span>`;
	});

	document.querySelectorAll(".random-km").forEach((ele) => {
		const data = getRandomData();
		ele.textContent = `${data.km} kilometers away`;
	});
});
