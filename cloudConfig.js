const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: "NestInn_Images",
		allowedFormats: ["png", "jpg", "jpeg"],
		// transformation: [{ width: 800, height: 600, crop: "limit" }], // resizing
	},
});

module.exports = { cloudinary, storage };
