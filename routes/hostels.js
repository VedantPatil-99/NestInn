const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateHostel } = require("../middleware.js");
const hostelController = require("../controllers/hostel.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Index Route (Show all hostels) & Create Route
router
	.route("/")
	.get(wrapAsync(hostelController.index))
	.post(
		isLoggedIn,
		upload.array("hostel[images]", 5),
		validateHostel,
		wrapAsync(hostelController.createHostel),
	);

// New Hostel Form Route
router.get("/new", isLoggedIn, hostelController.renderNewHostelForm);

// Show, Update, Delete a Specific Hostel
router
	.route("/:id")
	.get(wrapAsync(hostelController.showHostel)) // Show a hostel
	.put(
		isLoggedIn,
		isOwner,
		upload.array("hostel[images]", 5), // Allow multiple image updates
		wrapAsync(hostelController.updateHostel),
	)
	.delete(isLoggedIn, isOwner, wrapAsync(hostelController.destroyHostel));

// Edit Hostel Form Route
router.get(
	"/:id/edit",
	isLoggedIn,
	isOwner,
	wrapAsync(hostelController.renderEditHostelForm),
);

module.exports = router;
