document.addEventListener("DOMContentLoaded", function () {
	const steps = document.querySelectorAll(".step");
	const stepContainer = document.getElementById("step-container");

	let currentStep = 0;

	// Hide all steps except the first one
	function showStep(step) {
		steps.forEach((fieldset, index) => {
			fieldset.style.display = index === step ? "block" : "none";
		});
	}

	// Validate current step before moving to the next
	function validateStep(step) {
		const inputs = steps[step].querySelectorAll("input, textarea");
		for (const input of inputs) {
			if (!input.checkValidity()) {
				input.reportValidity();
				return false;
			}
		}
		return true;
	}

	// Next Step Button
	document.querySelectorAll(".next-step").forEach((button) => {
		button.addEventListener("click", () => {
			if (validateStep(currentStep)) {
				currentStep++;
				showStep(currentStep);
			}
		});
	});

	// Previous Step Button
	document.querySelectorAll(".prev-step").forEach((button) => {
		button.addEventListener("click", () => {
			currentStep--;
			showStep(currentStep);
		});
	});

	// Show first step initially
	showStep(currentStep);
});
