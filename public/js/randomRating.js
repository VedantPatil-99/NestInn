function getRandomData() {
	return {
		km: Math.floor(Math.random() * (5 - 1 + 1)) + 15, // Distance between 1 to 5 km
	};
}

// Example usage
document.addEventListener("DOMContentLoaded", function () {
	// document.querySelectorAll(".random-rating").forEach((ele) => {
	// 	const data = getRandomData();
	// 	ele.innerHTML = `${data.rating}&nbsp;${svgData.largeStar} &nbsp;&nbsp;&nbsp;<span class="text-secondary">(${data.reviews} reviews)</span>`;
	// });

	document.querySelectorAll(".random-km").forEach((ele) => {
		const data = getRandomData();
		ele.textContent = `${data.km} kilometers away from college`;
	});
});
