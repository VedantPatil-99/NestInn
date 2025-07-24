document.addEventListener("DOMContentLoaded", function () {
	const maxColleges = 4;
	const collegeCheckboxes = document.querySelectorAll(".college-checkbox");
	const hiddenInput = document.getElementById("nearbyCollegesInput");
	const saveBtn = document.getElementById("saveCollegeSelection");

	// Limit checkbox selection
	collegeCheckboxes.forEach((cb) => {
		cb.addEventListener("change", () => {
			const selected = document.querySelectorAll(".college-checkbox:checked");
			if (selected.length > maxColleges) {
				cb.checked = false;
				alert(`You can select up to ${maxColleges} colleges.`);
			}
		});
	});

	// Save selected colleges
	// Save selected colleges
	saveBtn.addEventListener("click", () => {
		const selected = Array.from(
			document.querySelectorAll(".college-checkbox:checked"),
		).map((cb) => cb.value);

		if (selected.length === 0) {
			alert("Please select at least one college.");
			return;
		}
		if (selected.length > maxColleges) {
			alert(`You can select up to ${maxColleges} colleges only.`);
			return;
		}

		// Store in hidden input
		hiddenInput.value = selected.join("~");

		// Optionally update button text with selected names
		const selectBtn = document.querySelector(
			'[data-bs-target="#collegeModal"]',
		);
		selectBtn.textContent = `Selected: ${selected.slice(0, 2).join(", ")}${selected.length > 2 ? " +" + (selected.length - 2) + " more" : ""}`;

		// Hide modal
		const modal = bootstrap.Modal.getInstance(
			document.getElementById("collegeModal"),
		);
		modal.hide();
	});

	// City filter logic
	document.getElementById("cityFilter").addEventListener("change", function () {
		const selectedCity = this.value;
		const groups = document.querySelectorAll(".college-city-group");
		groups.forEach((group) => {
			if (selectedCity === "all" || group.dataset.city === selectedCity) {
				group.style.display = "";
			} else {
				group.style.display = "none";
			}
		});
	});
});
