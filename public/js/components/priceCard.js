document.addEventListener("DOMContentLoaded", () => {
	const priceCard = document.getElementById("priceCard");

	let basePrice = parseInt(priceCard.dataset.basePrice);
	let months = 6;
	let students = 1;

	const breakdownPrice = document.getElementById("breakdownPrice");
	const pricePerStudentEl = document.getElementById("perStudentPrice");
	const totalAmount = document.getElementById("totalAmount");
	const durationSpan = document.getElementById("duration");
	const studentsSpan = document.getElementById("students");
	const studentCount = document.getElementById("studentCount");
	const studentCountLabel = document.getElementById("studentCountLabel");

	const roomTypeLabel = document.getElementById("roomTypeLabel");
	const durationLabel = document.getElementById("durationLabel");

	let inputRoomType = document.getElementById("formRoomType");
	let inputDuration = document.getElementById("formDuration");
	let inputStudents = document.getElementById("formStudents");
	let inputTotalPrice = document.getElementById("formTotalPrice");

	document.getElementById("roomTypeOptions").addEventListener("click", (e) => {
		if (e.target.dataset.roomType) {
			roomTypeLabel.innerText = e.target.dataset.roomType;
		}
	});

	document.getElementById("durationOptions").addEventListener("click", (e) => {
		const value = parseInt(e.target.dataset.duration);
		if (value) {
			months = value;
			durationLabel.innerText = `${months} months`;
			durationSpan.innerText = months;
			updatePrice();
		}
	});

	document.getElementById("increaseStudent").addEventListener("click", () => {
		students = Math.min(students + 1, 5);
		updateStudentUI();
	});

	document.getElementById("decreaseStudent").addEventListener("click", () => {
		students = Math.max(students - 1, 1);
		updateStudentUI();
	});

	function updateStudentUI() {
		studentCount.innerText = students;
		studentCountLabel.innerText = students;
		studentsSpan.innerText = students;
		updatePrice();
	}

	function updatePrice() {
		const k = 4;
		const discountFactor = 1 - (students - 1) / (k * students);
		const pricePerStudent = Math.round(basePrice * discountFactor);
		const subtotal = pricePerStudent * students * months;

		breakdownPrice.innerText = basePrice;
		totalAmount.innerText = subtotal.toLocaleString("en-IN");
		pricePerStudentEl.innerText = pricePerStudent.toLocaleString("en-IN");
	}

	// Initial price calculation
	updatePrice();

	document
		.getElementById("submitReservationBtn")
		.addEventListener("click", () => {
			const roomType = roomTypeLabel.textContent.trim();
			const duration = durationLabel.textContent.trim().split(" ")[0];
			const userLoggedIn = priceCard.dataset.user === "true";

			if (roomType === "Add Room Type" || duration === "Add Duration") {
				alert("Please select both Room Type and Duration.");
				return;
			}

			if (!userLoggedIn) {
				window.location.href = "/login";
				return;
			}

			inputRoomType.value = roomType;
			inputDuration.value = duration;
			inputStudents.value = students;
			// console.log("Clicking submit button");
			document.getElementById("reservationForm").submit();
		});

	// document
	// 	.getElementById("submitReservationBtn")
	// 	.addEventListener("click", (e) => {
	// 		e.preventDefault(); // Just for testing
	// 		alert(
	// 			`Room Type: ${inputRoomType.value}\nDuration: ${inputDuration.value} months\nStudents: ${inputStudents.value}\ntotalPrice: ${totalAmount.innerText}`,
	// 		);
	// 	});
});
