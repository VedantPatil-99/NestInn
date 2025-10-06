const Hostel = require("../models/hostel");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const allSVGs = require("../utils/SVGs");
const amenities = require("../utils/amenities");
const collegeList = require("../utils/collegeList");
const cloudinary = require("cloudinary").v2;

const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({
	accessToken: mapToken,
});

module.exports.index = async (req, res) => {
	// Helper functions for scoring
	const mostFrequent = (arr) =>
		arr.reduce(
			(acc, curr) => {
				if (curr) {
					acc.counts[curr] =
						(acc.counts[curr] || 0) + 1;
					if (acc.counts[curr] > acc.max) {
						acc.max = acc.counts[curr];
						acc.most = curr;
					}
				}
				return acc;
			},
			{ counts: {}, max: 0, most: null },
		).most;

	const average = (arr) =>
		arr.reduce((a, b) => a + b, 0) / arr.length;

	const {
		city,
		state,
		college,
		minPrice,
		maxPrice,
		forWhom,
	} = req.query;
	let filter = {};
	if (city && state) {
		filter = {
			"address.city": city,
			"address.state": state,
		};
	}

	if (college) {
		filter = {
			nearbyColleges: college,
		};
	}

	if (minPrice || maxPrice) {
		const min = parseInt(minPrice);
		const max = parseInt(maxPrice);

		if (!isNaN(min) && !isNaN(max)) {
			filter.price = { $gte: min, $lte: max };
		} else if (!isNaN(min)) {
			filter.price = { $gte: min };
		} else if (!isNaN(max)) {
			filter.price = { $lte: max };
		}
	}

	if (forWhom) {
		filter.forWhom = forWhom;
	}

	if (city === "None" || !city)
		delete filter["address.city"];
	if (!state) delete filter["address.state"];
	if (!college) delete filter["nearbyColleges"];

	let allHostels =
		await Hostel.find(filter).populate("reviews");
	let recommendedHostels = [];

	// Recommendation Logic
	if (
		req.session.viewedHostels &&
		req.session.viewedHostels.length > 0
	) {
		const viewedHostels = await Hostel.find({
			_id: { $in: req.session.viewedHostels },
		});

		// Fetch ALL hostels to create a pool for recommendations
		const allHostelsForRecs = await Hostel.find(
			{},
		).populate("reviews");

		if (viewedHostels.length > 0) {
			// Build preference profile
			const preferenceProfile = {
				city: mostFrequent(
					viewedHostels.map(
						(h) => h.address.city,
					),
				),
				price: average(
					viewedHostels.map((h) => h.price),
				),
				amenities: mostFrequent(
					viewedHostels.flatMap(
						(h) => h.amenities,
					),
				),
			};

			// Score and sort all hostels from the recommendation pool
			recommendedHostels = allHostelsForRecs
				.map((hostel) => {
					let score = 0;
					if (
						hostel.address.city ===
						preferenceProfile.city
					)
						score += 3;
					if (
						hostel.price >=
							preferenceProfile.price * 0.8 &&
						hostel.price <=
							preferenceProfile.price * 1.2
					)
						score += 2;
					if (
						preferenceProfile.amenities &&
						hostel.amenities.includes(
							preferenceProfile.amenities,
						)
					)
						score += 2;

					// Pass populated reviews through .toObject()
					return {
						...hostel.toObject({
							virtuals: true,
						}),
						reviews: hostel.reviews,
						score,
					};
				})
				.filter(
					(h) =>
						!req.session.viewedHostels.includes(
							h._id.toString(),
						),
				)
				.sort((a, b) => b.score - a.score)
				.slice(0, 4); // Get top 4 recommendations
		}
	}

	// Calculate average rating for recommended hostels
	recommendedHostels.forEach((hostel) => {
		if (
			hostel.reviews &&
			hostel.reviews.length > 0
		) {
			const total = hostel.reviews.reduce(
				(sum, r) => sum + r.rating,
				0,
			);
			hostel.avgRating =
				total / hostel.reviews.length;
		} else {
			hostel.avgRating = 0;
		}
	});

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

	const uniqueLocations = Array.from(
		uniqueLocationsMap.values(),
	);
	uniqueLocations.unshift({
		city: "None",
		state: "",
	});

	// Fetch all unique colleges from DB
	const allHostelsWithColleges =
		await Hostel.find().select(
			"nearbyColleges -_id",
		);
	const collegeSet = new Set();
	allHostelsWithColleges.forEach((h) => {
		if (Array.isArray(h.nearbyColleges)) {
			h.nearbyColleges.forEach((c) =>
				collegeSet.add(c),
			);
		}
	});
	const uniqueColleges =
		Array.from(collegeSet).sort();

	// Calculate average rating for main list
	allHostels.forEach((hostel) => {
		const total = hostel.reviews.reduce(
			(sum, r) => sum + r.rating,
			0,
		);
		hostel.avgRating = hostel.reviews.length
			? total / hostel.reviews.length
			: 0;
	});

	res.render("hostels/index", {
		allHostels,
		recommendedHostels,
		uniqueLocations,
		uniqueColleges,
		allSVGs,
		selectedCity: city,
		selectedState: state,
		selectedCollege: college,
		selectedMinPrice: minPrice,
		selectedMaxPrice: maxPrice,
		selectedForWhom: forWhom,
	});
};

module.exports.renderNewHostelForm = (
	req,
	res,
) => {
	const groupedColleges = {};
	collegeList.forEach((college) => {
		const city = college.City.trim();
		if (!groupedColleges[city])
			groupedColleges[city] = [];
		groupedColleges[city].push(
			college["College Name"].trim(),
		);
	});
	res.render("./hostels/new.ejs", {
		amenities,
		groupedColleges,
	});
};

module.exports.showHostel = async (req, res) => {
	let { id } = req.params;
	let hostel = await Hostel.findById(id)
		.populate({
			path: "reviews",
			populate: { path: "author" },
		})
		.populate("owner");
	if (!hostel) {
		req.flash("error", "Hostel not found!");
		return res.redirect("/hostels");
	}

	// Add viewed hostel to session
	if (req.session.viewedHostels) {
		// Add the hostel ID to the beginning of the array
		req.session.viewedHostels.unshift(id);
		// Remove duplicates and keep only the last 5 viewed hostels
		req.session.viewedHostels = [
			...new Set(req.session.viewedHostels),
		].slice(0, 5);
	} else {
		req.session.viewedHostels = [id];
	}

	const total = hostel.reviews.reduce(
		(sum, r) => sum + r.rating,
		0,
	);
	hostel.avgRating = hostel.reviews.length
		? total / hostel.reviews.length
		: 0;

	res.render("./hostels/show.ejs", {
		hostel,
		amenities,
		allSVGs,
	});
};

module.exports.createHostel = async (
	req,
	res,
) => {
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
		return res.status(400).json({
			error: "Nearby colleges must be selected",
		});
	}

	let newHostel = new Hostel(req.body.hostel);
	newHostel.owner = req.user._id;
	newHostel.geometry =
		response.body.features[0].geometry;

	if (req.files) {
		newHostel.images = req.files.map((file) => ({
			url: file.path,
			filename: file.filename,
		}));
	}

	if (req.body.hostel.amenities) {
		newHostel.amenities = Array.isArray(
			req.body.hostel.amenities,
		)
			? req.body.hostel.amenities
			: [req.body.hostel.amenities];
	} else {
		newHostel.amenities = [];
	}

	await newHostel.save();
	req.flash(
		"success",
		"New hostel added successfully!",
	);
	res.redirect("/hostels");
};

module.exports.renderEditHostelForm = async (
	req,
	res,
) => {
	let { id } = req.params;
	let hostel = await Hostel.findById(id);
	if (!hostel) {
		req.flash("error", "Hostel not found!");
		return res.redirect("/hostels");
	}
	const sortedColleges = collegeList.sort(
		(a, b) =>
			a["College Name"]
				.trim()
				.localeCompare(b["College Name"].trim()),
	);

	res.render("./hostels/edit.ejs", {
		hostel,
		amenities,
		collegeList,
		sortedColleges,
	});
};

module.exports.updateHostel = async (
	req,
	res,
) => {
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

	hostel.geometry =
		response.body.features[0].geometry;
	hostel.set(req.body.hostel);

	if (req.files && req.files.length > 0) {
		hostel.images = req.files.map((file) => ({
			url: file.path,
			filename: file.filename,
		}));
	}

	await hostel.save();
	req.flash(
		"success",
		"Hostel updated successfully!",
	);
	res.redirect(`/hostels/${id}`);
};

module.exports.destroyHostel = async (
	req,
	res,
) => {
	let { id } = req.params;
	let hostel = await Hostel.findById(id);

	if (hostel) {
		for (let img of hostel.images) {
			await cloudinary.uploader.destroy(
				img.filename,
			);
		}
		await Hostel.findByIdAndDelete(id);
		req.flash(
			"success",
			"Hostel deleted successfully!",
		);
	} else {
		req.flash("error", "Hostel not found!");
	}

	res.redirect("/hostels");
};
