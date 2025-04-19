const Hostel = require("./models/hostel"); // Renamed from Listing
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError");
const { hostelSchema, reviewSchema } = require("./schema.js"); // Updated schema name

// Middleware to check if user is logged in
module.exports.isLoggedIn = (req, res, next) => {
	if (!req.isAuthenticated()) {
		req.session.redirectURL = req.originalUrl;
		req.flash("error", "You must be logged in to access this page.");
		return res.redirect("/login");
	}
	next();
};

// Middleware to store redirect URL for post-login redirection
module.exports.saveRedirectURL = (req, res, next) => {
	if (req.session.redirectURL) {
		res.locals.redirectURL = req.session.redirectURL;
	}
	next();
};

// Middleware to check if user is the owner of a hostel listing
module.exports.isOwner = async (req, res, next) => {
	let { id } = req.params;
	let hostel = await Hostel.findById(id);
	if (!hostel) {
		req.flash("error", "Hostel not found.");
		return res.redirect("/hostels");
	}
	if (!hostel.owner.equals(req.user._id)) {
		req.flash("error", "You are not the owner of this hostel.");
		return res.redirect(`/hostels/${id}`);
	}
	next();
};

// Middleware to check if user is the author of a review
module.exports.isReviewAuthor = async (req, res, next) => {
	let { id, reviewId } = req.params;
	let review = await Review.findById(reviewId);
	if (!review) {
		req.flash("error", "Review not found.");
		return res.redirect(`/hostels/${id}`);
	}
	if (!review.author.equals(req.user._id)) {
		req.flash("error", "You are not the author of this review.");
		return res.redirect(`/hostels/${id}`);
	}
	next();
};

// Middleware to validate hostel data
module.exports.validateHostel = (req, res, next) => {
	console.log("Validating hostel data...", req.body.hostel);
	console.log("nearbyColleges:", req.body.hostel.nearbyColleges);
	if (!req.body.hostel) {
		req.body.hostel = {};
	}

	// ✅ Normalize and split nearbyColleges only by ~
	if (req.body.hostel.nearbyColleges) {
		let raw = req.body.hostel.nearbyColleges;

		// Force into array if it's a single string
		if (!Array.isArray(raw)) {
			raw = [raw];
		}

		req.body.hostel.nearbyColleges = raw
			.flatMap((entry) => entry.split("~")) // only split by ~
			.map((college) => college.trim()) // trim whitespace
			.filter((college) => college.length > 0); // remove empty
	}

	console.log("Processed nearby colleges:", req.body.hostel.nearbyColleges);

	if (req.body.hostel.amenities && !Array.isArray(req.body.hostel.amenities)) {
		req.body.hostel.amenities = [req.body.hostel.amenities];
	}

	if (req.files && req.files.length > 0) {
		req.body.hostel.images = req.files.map((file) => ({
			url: file.path,
			filename: file.filename,
		}));
	}

	if (!req.body.hostel.owner && req.user && req.user._id) {
		req.body.hostel.owner = req.user;
	}

	let { error } = hostelSchema.validate(req.body);
	if (error) {
		let errMsg = error.details.map((ele) => ele.message).join(",");
		throw new ExpressError(400, errMsg);
	} else {
		next();
	}
};

// Middleware to validate review data
module.exports.validateReview = (req, res, next) => {
	let { error } = reviewSchema.validate(req.body);
	if (error) {
		let errMsg = error.details.map((ele) => ele.message).join(",");
		throw new ExpressError(400, errMsg);
	} else {
		next();
	}
};
