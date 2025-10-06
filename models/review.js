const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
	comment: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 2000,
	},
	rating: {
		type: Number,
		min: 1,
		max: 5,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	hostel: {
		type: Schema.Types.ObjectId,
		ref: "Hostel",
	},
	sentiment: {
		type: Number,
		default: 0,
	},
});

module.exports = mongoose.model(
	"Review",
	reviewSchema,
);
