const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: "User", required: true },
	hostel: { type: Schema.Types.ObjectId, ref: "Hostel", required: true },

	durationMonths: {
		type: Number,
		enum: [6, 9, 12],
		required: true,
	},

	students: { type: Number, required: true },

	totalPrice: { type: Number, required: true },

	status: {
		type: String,
		enum: ["pending", "confirmed", "cancelled"],
		default: "pending",
	},

	paymentStatus: {
		type: String,
		enum: ["pending", "paid", "failed"],
		default: "pending",
	},

	startDate: { type: Date, required: true },

	endDate: { type: Date, required: true },

	// addOns: {
	// 	mealPlan: { type: Boolean, default: false },
	// },

	createdAt: { type: Date, default: Date.now },
});

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
