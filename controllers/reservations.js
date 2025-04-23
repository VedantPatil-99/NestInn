const Reservation = require("../models/reservation");
const Hostel = require("../models/hostel");
const dayjs = require("dayjs"); // Optional helper for date math

module.exports.createReservation = async (req, res) => {
	const body = req.body;
	// console.log("Reservation body:", body);
	const { hostelId } = req.params;
	const { durationMonths, students } = req.body;

	const hostel = await Hostel.findById(hostelId);
	if (!hostel) {
		req.flash("error", "Hostel not found");
		return res.redirect("/hostels");
	}

	const startDate = new Date();
	const endDate = dayjs(startDate).add(durationMonths, "month").toDate();

	const monthlyPrice = hostel.price;
	const basePrice = monthlyPrice * durationMonths;

	const k = 4;
	const studentCount = parseInt(students);
	const discountFactor = 1 - (studentCount - 1) / (k * studentCount);
	const pricePerStudent = Math.round(monthlyPrice * discountFactor);
	const subtotal = pricePerStudent * studentCount;
	const totalAmount = subtotal * durationMonths;

	const allDetails = {
		monthlyPrice,
		basePrice,
		subtotal,
		pricePerStudent,
		totalAmount,
		startDate,
		endDate,
		durationMonths,
		studentCount,
		user: req.user._id,
		status: "pending",
		paymentStatus: "pending",
	};
	// console.log("All details:", allDetails);
	// const mealPlanCost = mealPlan ? 1500 * durationMonths * studentCount : 0;
	// const totalPrice = subtotal + mealPlanCost;

	res.render(`reservations/confirm`, { allDetails, hostel });
};

// controllers/reservationController.js
module.exports.confirmReservation = async (req, res) => {
	// console.log("Confirm Reservation Page:", req.body);
	const reservation = new Reservation(req.body);
	// console.log("Reservation object:", reservation);
	// console.log(reservation);
	await reservation.save();
	req.flash("success", "Reservation submitted successfully!");
	res.redirect("/reservations/my-reservations");
};

// SHOW User’s Reservations
module.exports.showMyReservations = async (req, res) => {
	// await Reservation.deleteMany({ user: req.user._id });
	const reservations = await Reservation.find({ user: req.user._id }).populate(
		"hostel",
	);
	// console.log(reservations);
	res.render("reservations/my-reservations", { reservations });
};

// CANCEL Reservation
module.exports.cancelReservation = async (req, res) => {
	const { reservationId } = req.params;
	await Reservation.findByIdAndUpdate(reservationId, { status: "cancelled" });
	req.flash("success", "Reservation cancelled.");
	res.redirect("/reservations/my-reservations");
};

// Optional: Edit reservation
module.exports.renderEditForm = async (req, res) => {
	const reservation = await Reservation.findById(
		req.params.reservationId,
	).populate("hostel");
	res.render("reservations/edit", { reservation });
};

module.exports.updateReservation = async (req, res) => {
	const { durationMonths, students } = req.body;
	const reservation = await Reservation.findById(
		req.params.reservationId,
	).populate("hostel");

	const startDate = new Date();
	const endDate = dayjs(startDate).add(durationMonths, "month").toDate();

	const basePrice = reservation.hostel.price * durationMonths;

	const k = 5;
	const studentCount = parseInt(students);
	const discountFactor = 1 - (studentCount - 1) / (k * studentCount);
	const pricePerStudent = Math.round(basePrice * discountFactor);
	const subtotal = pricePerStudent * studentCount;

	// const mealPlanCost = mealPlan ? 1500 * durationMonths * studentCount : 0;
	const totalPrice = subtotal; // + mealPlanCost;

	// Update reservation details
	reservation.durationMonths = durationMonths;
	reservation.students = studentCount;
	// reservation.addOns.mealPlan = mealPlan;
	reservation.startDate = startDate;
	reservation.endDate = endDate;
	reservation.totalPrice = totalPrice;
	reservation.status = "pending";

	await reservation.save();
	req.flash("success", "Reservation updated successfully!");
	res.redirect("/reservations/my-reservations");
};
