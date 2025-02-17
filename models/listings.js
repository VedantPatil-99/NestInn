const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;
const { cloudinary } = require("../config/cloudinary");

const listingSchema = new Schema({
	title: { type: String, required: true, trim: true },
	description: { type: String, required: true },

	address: {
		street: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		country: { type: String, required: true },
		zipCode: { type: String, required: true },
	},

	price: { type: Number, required: true, min: 0 },

	images: [
		{
			url: { type: String, required: true },
			filename: { type: String, required: true },
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
			enum: [
				"WiFi",
				"Laundry",
				"Parking",
				"Security",
				"Mess",
				"Hot Water",
				"AC",
				"Non-AC",
				"Gym",
			],
		},
	],

	createdAt: { type: Date, default: Date.now },
});

// 🔥 Delete associated reviews AND images on listing deletion
listingSchema.post("findOneAndDelete", async (listing) => {
	if (listing) {
		// Delete all associated reviews
		await Review.deleteMany({ _id: { $in: listing.reviews } });

		// Delete images from Cloudinary
		if (listing.images.length) {
			for (let img of listing.images) {
				await cloudinary.uploader.destroy(img.filename);
			}
		}
	}
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
