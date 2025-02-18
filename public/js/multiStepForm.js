document.addEventListener("DOMContentLoaded", function () {
	const steps = document.querySelectorAll(".step");
	let currentStep = 0;

	function showStep(step) {
		steps.forEach((fieldset, index) => {
			fieldset.classList.toggle("active-step", index === step);
		});
	}

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

	document.querySelectorAll(".next-step").forEach((button) => {
		button.addEventListener("click", () => {
			if (validateStep(currentStep)) {
				currentStep++;
				showStep(currentStep);
			}
		});
	});

	document.querySelectorAll(".prev-step").forEach((button) => {
		button.addEventListener("click", () => {
			currentStep--;
			showStep(currentStep);
		});
	});

	showStep(currentStep);
});
