const mongoose = require("mongoose");
const Hostel = require("../models/hostel"); // Adjust path if needed

mongoose
	.connect("mongodb://127.0.0.1:27017/nestinn")
	.then(() => console.log("MongoDB Connected"))
	.catch((err) => console.log(err));

const sampleHostels = [
	{
		title: "Cozy Mountain Cabin",
		description:
			"A beautiful wooden cabin in the mountains with breathtaking views.",
		address: {
			street: "123 Mountain View Rd",
			city: "Manali",
			state: "Himachal Pradesh",
			country: "India",
			zipCode: "175131",
		},
		price: 1500,
		images: [
			{
				url: "https://res.cloudinary.com/demo/image/upload/v1700000000/mountain_cabin.jpg",
				filename: "mountain_cabin.jpg",
			},
		],
		reviews: [],
		owner: "65d0e6fdfd3a4a001c9b7f50",
		geometry: {
			type: "Point",
			coordinates: [77.1892, 32.2396],
		},
		amenities: ["WiFi", "Heating", "Parking"],
	},
	{
		title: "Beachfront Paradise",
		description:
			"A luxurious beachfront villa with a private pool and ocean view.",
		address: {
			street: "456 Ocean Drive",
			city: "Goa",
			state: "Goa",
			country: "India",
			zipCode: "403001",
		},
		price: 3500,
		images: [
			{
				url: "https://res.cloudinary.com/demo/image/upload/v1700000000/beach_villa.jpg",
				filename: "beach_villa.jpg",
			},
		],
		reviews: [],
		owner: "65d0e6fdfd3a4a001c9b7f50",
		geometry: {
			type: "Point",
			coordinates: [73.748, 15.2993],
		},
		amenities: ["WiFi", "Pool", "Sea View"],
	},
	{
		title: "City Center Apartment",
		description:
			"A modern and fully furnished apartment in the heart of the city.",
		address: {
			street: "789 Urban St",
			city: "Mumbai",
			state: "Maharashtra",
			country: "India",
			zipCode: "400001",
		},
		price: 2000,
		images: [
			{
				url: "https://res.cloudinary.com/demo/image/upload/v1700000000/city_apartment.jpg",
				filename: "city_apartment.jpg",
			},
		],
		reviews: [],
		owner: "65d0e6fdfd3a4a001c9b7f50",
		geometry: {
			type: "Point",
			coordinates: [72.8777, 19.076],
		},
		amenities: ["WiFi", "Gym", "Air Conditioning"],
	},
];

const seedDB = async () => {
	await Hostel.deleteMany({});
	await Hostel.insertMany(sampleHostels);
	console.log("Database Seeded!");
	mongoose.connection.close();
};

seedDB();
