document.addEventListener("DOMContentLoaded", () => {
	const viewButtons = document.querySelectorAll(".view-details-btn");

	viewButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			const data = JSON.parse(btn.dataset.reservation);
			const hostel = data.hostel;

			document.getElementById("modalHostelName").innerText =
				hostel.name || "N/A";
			document.getElementById("modalHostelDescription").innerText =
				hostel.description || "No description provided.";

			const address = hostel.address || {};
			document.getElementById("modalHostelAddress").innerText =
				`${address.street || ""}, ${address.city || ""}, ${address.state || ""}, ${address.country || ""} - ${address.zipCode || ""}`;

			document.getElementById("modalHostelPrice").innerText =
				hostel.price?.toLocaleString("en-IN") || "0";
			document.getElementById("modalHostelCapacity").innerText =
				hostel.capacity || "Not specified";

			const modal = new bootstrap.Modal(
				document.getElementById("hostelDetailsModal"),
			);
			modal.show();
		});
	});
});
