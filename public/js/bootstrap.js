// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.from(forms).forEach((form) => {
		form.addEventListener(
			"submit",
			(event) => {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add("was-validated");
			},
			false,
		);
	});
})();

document.addEventListener("DOMContentLoaded", () => {
	const toastEl = document.querySelector(".toast");
	if (toastEl) {
		const toast = new bootstrap.Toast(toastEl);
		toast.show();
	}
});

const popoverTriggerList = document.querySelectorAll(
	'[data-bs-toggle="popover"]',
);
const popoverList = [...popoverTriggerList].map(
	(popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl),
);
const popover = new bootstrap.Popover(".popover-dismiss", {
	trigger: "focus",
});

document.addEventListener("DOMContentLoaded", function () {
	$(".selectpicker").selectpicker();

	$("#nearbyColleges").on("changed.bs.select", function () {
		const selectedCount = $(this).val()?.length || 0;

		if (selectedCount > 4) {
			alert("You can select up to 4 colleges only.");
			// Remove the last selected option
			const currentValues = $(this).val().slice(0, 4);
			$(this).selectpicker("val", currentValues);
		}
	});
});
