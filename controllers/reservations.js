const Reservation = require("../models/reservation");
const Hostel = require("../models/hostel");
const dayjs = require("dayjs"); // Optional helper for date math
const Razorpay = require("razorpay");
const crypto = require("crypto");

// Instantiate Razorpay (add keys to your .env file)
const razorpay = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// This function renders the confirmation page (original createReservation)
module.exports.createReservation = async (
	req,
	res,
) => {
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
	const endDate = dayjs(startDate)
		.add(durationMonths, "month")
		.toDate();

	const monthlyPrice = hostel.price;
	const basePrice = monthlyPrice * durationMonths;

	const k = 4;
	const studentCount = parseInt(students);
	const discountFactor =
		1 - (studentCount - 1) / (k * studentCount);
	const pricePerStudent = Math.round(
		monthlyPrice * discountFactor,
	);
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

	res.render(`reservations/confirm`, {
		allDetails,
		hostel,
	});
};

// This function creates the pending reservation and the Razorpay order
module.exports.confirmReservation = async (
	req,
	res,
) => {
	const reservation = new Reservation(req.body);

	try {
		// 1. Create Razorpay Order
		const options = {
			// Add 2000 for the security deposit
			amount:
				(reservation.totalPrice + 2000) * 100, // Amount in paise
			// reservation.totalPrice * 100, // Amount in paise

			currency: "INR",
			receipt: reservation._id.toString(), // A unique receipt ID
			notes: {
				hostel_id: reservation.hostel.toString(),
				user_id: reservation.user.toString(),
			},
		};

		const order =
			await razorpay.orders.create(options);

		// 2. Save the order_id to the reservation
		reservation.razorpay_order_id = order.id;
		await reservation.save();

		// 3. Render a new payment page, passing order details
		const hostel = await Hostel.findById(
			reservation.hostel,
		);
		res.render("reservations/payment", {
			hostel: hostel,
			reservation,
			order,
			razorpayKeyId: process.env.RAZORPAY_KEY_ID,
		});
	} catch (error) {
		console.log(error);
		req.flash(
			"error",
			"Payment order creation failed. Please try again.",
		);
		res.redirect("/hostels");
	}
};

// SHOW User’s Reservations
module.exports.showMyReservations = async (
	req,
	res,
) => {
	// await Reservation.deleteMany({ user: req.user._id });
	const reservations = await Reservation.find({
		user: req.user._id,
	}).populate("hostel");
	// console.log(reservations);
	res.render("reservations/my-reservations", {
		reservations,
	});
};

// CANCEL Reservation
module.exports.cancelReservation = async (
	req,
	res,
) => {
	const { reservationId } = req.params;
	await Reservation.findByIdAndUpdate(
		reservationId,
		{ status: "cancelled" },
	);
	req.flash("success", "Reservation cancelled.");
	res.redirect("/reservations/my-reservations");
};

// Optional: Edit reservation
module.exports.renderEditForm = async (
	req,
	res,
) => {
	const reservation = await Reservation.findById(
		req.params.reservationId,
	).populate("hostel");
	res.render("reservations/edit", {
		reservation,
	});
};

module.exports.updateReservation = async (
	req,
	res,
) => {
	const { durationMonths, students } = req.body;
	const reservation = await Reservation.findById(
		req.params.reservationId,
	).populate("hostel");

	const startDate = new Date();
	const endDate = dayjs(startDate)
		.add(durationMonths, "month")
		.toDate();

	const basePrice =
		reservation.hostel.price * durationMonths;

	const k = 5;
	const studentCount = parseInt(students);
	const discountFactor =
		1 - (studentCount - 1) / (k * studentCount);
	const pricePerStudent = Math.round(
		basePrice * discountFactor,
	);
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
	req.flash(
		"success",
		"Reservation updated successfully!",
	);
	res.redirect("/reservations/my-reservations");
};

// NEW: Verify Payment
module.exports.verifyPayment = async (
	req,
	res,
) => {
	const { reservationId } = req.params;
	const {
		razorpay_payment_id,
		razorpay_order_id,
		razorpay_signature,
	} = req.body;

	try {
		const hmac = crypto.createHmac(
			"sha256",
			process.env.RAZORPAY_KEY_SECRET,
		);
		hmac.update(
			razorpay_order_id +
				"|" +
				razorpay_payment_id,
		);
		const generated_signature =
			hmac.digest("hex");

		if (
			generated_signature === razorpay_signature
		) {
			// Payment is authentic
			await Reservation.findByIdAndUpdate(
				reservationId,
				{
					paymentStatus: "paid",
					status: "confirmed",
					razorpay_payment_id,
					razorpay_signature,
				},
			);

			req.flash(
				"success",
				"Payment successful and reservation confirmed!",
			);
			res.redirect(
				"/reservations/my-reservations",
			);
		} else {
			// Payment verification failed
			await Reservation.findByIdAndUpdate(
				reservationId,
				{
					paymentStatus: "failed",
				},
			);
			req.flash(
				"error",
				"Payment verification failed. Please contact support.",
			);
			res.redirect(
				"/reservations/my-reservations",
			);
		}
	} catch (error) {
		console.log(error);
		req.flash(
			"error",
			"An error occurred during payment verification.",
		);
		res.redirect("/reservations/my-reservations");
	}
};
