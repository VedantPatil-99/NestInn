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
	listing: {
		type: Schema.Types.ObjectId,
		ref: "Hostel",
		required: true,
	},
});

module.exports = mongoose.model("Review", reviewSchema);
