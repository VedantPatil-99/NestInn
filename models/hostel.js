const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;
const { cloudinary } = require("../cloudConfig.js");
const hostelSchema = new Schema({
	title: { type: String, required: true, trim: true },
	description: { type: String, required: true },

	address: {
		street: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		country: { type: String, required: true },
		pinCode: { type: String, required: true },
	},

	price: { type: Number, required: true, min: 0 },

	images: [
		{
			url: { type: String, required: true },
			filename: { type: String, required: true },
		},
	],

	nearbyColleges: [
		{
			type: String,
			trim: true,
		},
	],

	reviews: [
		{
			type: Schema.Types.ObjectId,
			ref: "Review",
		},
	],

	owner: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},

	geometry: {
		type: { type: String, enum: ["Point"], required: true },
		coordinates: { type: [Number], required: true }, // [longitude, latitude]
	},

	amenities: [
		{
			type: String,
		},
	],

	createdAt: { type: Date, default: Date.now },
});

hostelSchema.post("findOneAndDelete", async (hostel) => {
	if (hostel) {
		await Review.deleteMany({ _id: { $in: hostel.reviews } });

		if (hostel.images.length) {
			for (let img of hostel.images) {
				await cloudinary.uploader.destroy(img.filename);
			}
		}
	}
});

const Hostel = mongoose.model("Hostel", hostelSchema);
module.exports = Hostel;
