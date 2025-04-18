const Reservation = require("../models/reservation");
const Hostel = require("../models/hostel");
// const dayjs = require("dayjs"); // Optional helper for date math

// CREATE Reservation
module.exports.createReservation = async (req, res) => {
	const { hostelId } = req.params;
	const { durationMonths, students, mealPlan } = req.body;

	const hostel = await Hostel.findById(hostelId);
	if (!hostel) {
		req.flash("error", "Hostel not found");
		return res.redirect("/hostels");
	}

	const startDate = new Date();
	const endDate = dayjs(startDate).add(durationMonths, "month").toDate();

	const monthlyPrice = hostel.price;
	const basePrice = monthlyPrice * durationMonths;

	// Optional discount logic per student
	const perStudent = students > 1 ? 0.95 : 1.0;
	const mealPlanCost = mealPlan ? 1500 * durationMonths * students : 0;
	const totalPrice = basePrice * students * perStudent + mealPlanCost;

	const reservation = new Reservation({
		user: req.user._id,
		hostel: hostelId,
		durationMonths,
		students,
		startDate,
		endDate,
		addOns: { mealPlan },
		totalPrice,
		status: "pending",
		paymentStatus: "pending",
	});

	await reservation.save();
	req.flash("success", "Reservation submitted successfully!");
	res.redirect("/reservations/my-reservations");
};

// SHOW User’s Reservations
module.exports.showMyReservations = async (req, res) => {
	const reservations = await Reservation.find({ user: req.user._id }).populate(
		"hostel",
	);
	res.render("reservations/myReservations", { reservations });
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
	const { durationMonths, students, mealPlan } = req.body;
	const reservation = await Reservation.findById(
		req.params.reservationId,
	).populate("hostel");

	const startDate = new Date();
	const endDate = dayjs(startDate).add(durationMonths, "month").toDate();
	const base = reservation.hostel.price * durationMonths;

	const perStudent = students > 1 ? 0.95 : 1.0;
	const mealPlanCost = mealPlan ? 1500 * durationMonths * students : 0;
	const totalPrice = base * students * perStudent + mealPlanCost;

	reservation.durationMonths = durationMonths;
	reservation.students = students;
	reservation.addOns.mealPlan = mealPlan;
	reservation.startDate = startDate;
	reservation.endDate = endDate;
	reservation.totalPrice = totalPrice;
	reservation.status = "pending";
	await reservation.save();

	req.flash("success", "Reservation updated successfully!");
	res.redirect("/reservations/my-reservations");
};
