const Hostel = require("../models/hostel");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const allSVGs = require("../utils/SVGs");
const amenities = require("../utils/amenities");
const collegeList = require("../utils/collegeList");
const cloudinary = require("cloudinary").v2;

const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
	const { city, state, college } = req.query;

	let filter = {};
	if (city && state) {
		filter = {
			"address.city": city,
			"address.state": state,
		};
	} else if (college) {
		filter = {
			nearbyColleges: college,
		};
	}

	const allHostels = await Hostel.find(filter).populate("reviews");

	// Fetch all unique hostel locations
	const allLocations = await Hostel.find().select(
		"address.city address.state -_id",
	);

	const uniqueLocationsMap = new Map();
	allLocations.forEach((loc) => {
		const key = `${loc.address.city.toLowerCase()},${loc.address.state.toLowerCase()}`;
		if (!uniqueLocationsMap.has(key)) {
			uniqueLocationsMap.set(key, {
				city: loc.address.city,
				state: loc.address.state,
			});
		}
	});
	const uniqueLocations = Array.from(uniqueLocationsMap.values());
	uniqueLocations.unshift({ city: "None", state: "" });

	// Fetch all unique colleges from DB
	const allHostelsWithColleges = await Hostel.find().select(
		"nearbyColleges -_id",
	);
	const collegeSet = new Set();
	allHostelsWithColleges.forEach((h) => {
		if (Array.isArray(h.nearbyColleges)) {
			h.nearbyColleges.forEach((c) => collegeSet.add(c));
		}
	});
	const uniqueColleges = Array.from(collegeSet).sort();

	// Calculate average rating
	allHostels.forEach((hostel) => {
		const total = hostel.reviews.reduce((sum, r) => sum + r.rating, 0);
		hostel.avgRating = hostel.reviews.length
			? total / hostel.reviews.length
			: 0;
	});

	res.render("hostels/index", {
		allHostels,
		uniqueLocations,
		selectedCity: city,
		selectedState: state,
		uniqueColleges,
		selectedCollege: college,
		allSVGs,
	});
};

module.exports.renderNewHostelForm = (req, res) => {
	const groupedColleges = {};
	collegeList.forEach((college) => {
		const city = college.City.trim();
		if (!groupedColleges[city]) groupedColleges[city] = [];
		groupedColleges[city].push(college["College Name"].trim());
	});
	res.render("./hostels/new.ejs", { amenities, groupedColleges });
};

module.exports.showHostel = async (req, res) => {
	let { id } = req.params;
	let hostel = await Hostel.findById(id)
		.populate({ path: "reviews", populate: { path: "author" } })
		.populate("owner");
	if (!hostel) {
		req.flash("error", "Hostel not found!");
		return res.redirect("/hostels");
	}
	const total = hostel.reviews.reduce((sum, r) => sum + r.rating, 0);
	hostel.avgRating = hostel.reviews.length ? total / hostel.reviews.length : 0;

	res.render("./hostels/show.ejs", { hostel, amenities, allSVGs });
};

module.exports.createHostel = async (req, res) => {
	let fullAddress = `${req.body.hostel.address.street}, ${req.body.hostel.address.city}, ${req.body.hostel.address.state}, ${req.body.hostel.address.country}`;

	let response = await geocodingClient
		.forwardGeocode({
			query: fullAddress,
			limit: 1,
		})
		.send();

	// Ensure hostel.nearbyColleges is not empty or null in your validation
	if (
		!req.body.hostel.nearbyColleges ||
		req.body.hostel.nearbyColleges.length === 0
	) {
		// Handle the error or set a default value
		return res.status(400).json({ error: "Nearby colleges must be selected" });
	}

	let newHostel = new Hostel(req.body.hostel);
	newHostel.owner = req.user._id;
	newHostel.geometry = response.body.features[0].geometry;

	if (req.files) {
		newHostel.images = req.files.map((file) => ({
			url: file.path,
			filename: file.filename,
		}));
	}

	if (req.body.hostel.amenities) {
		newHostel.amenities = Array.isArray(req.body.hostel.amenities)
			? req.body.hostel.amenities
			: [req.body.hostel.amenities];
	} else {
		newHostel.amenities = [];
	}

	await newHostel.save();
	req.flash("success", "New hostel added successfully!");
	res.redirect("/hostels");
};

module.exports.renderEditHostelForm = async (req, res) => {
	let { id } = req.params;
	let hostel = await Hostel.findById(id);
	if (!hostel) {
		req.flash("error", "Hostel not found!");
		return res.redirect("/hostels");
	}
	const sortedColleges = collegeList.sort((a, b) =>
		a["College Name"].trim().localeCompare(b["College Name"].trim()),
	);

	res.render("./hostels/edit.ejs", {
		hostel,
		amenities,
		collegeList,
		sortedColleges,
	});
};

module.exports.updateHostel = async (req, res) => {
	let { id } = req.params;
	let hostel = await Hostel.findById(id);

	if (!hostel) {
		req.flash("error", "Hostel not found!");
		return res.redirect("/hostels");
	}

	let fullAddress = `${req.body.hostel.address.street}, ${req.body.hostel.address.city}, ${req.body.hostel.address.state}, ${req.body.hostel.address.country}`;

	let response = await geocodingClient
		.forwardGeocode({
			query: fullAddress,
			limit: 1,
		})
		.send();

	hostel.geometry = response.body.features[0].geometry;
	hostel.set(req.body.hostel);

	if (req.files && req.files.length > 0) {
		hostel.images = req.files.map((file) => ({
			url: file.path,
			filename: file.filename,
		}));
	}

	await hostel.save();
	req.flash("success", "Hostel updated successfully!");
	res.redirect(`/hostels/${id}`);
};

module.exports.destroyHostel = async (req, res) => {
	let { id } = req.params;
	let hostel = await Hostel.findById(id);

	if (hostel) {
		for (let img of hostel.images) {
			await cloudinary.uploader.destroy(img.filename);
		}
		await Hostel.findByIdAndDelete(id);
		req.flash("success", "Hostel deleted successfully!");
	} else {
		req.flash("error", "Hostel not found!");
	}

	res.redirect("/hostels");
};
