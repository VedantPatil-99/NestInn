const Hostel = require("../models/hostel");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
	let hostel = await Hostel.findById(req.params.id);
	if (!hostel) {
		req.flash("error", "Hostel not found!");
		return res.redirect("/hostels");
	}

	let newReview = new Review(req.body.review);
	newReview.author = req.user._id;
	hostel.reviews.push(newReview);

	await newReview.save();
	await hostel.save();

	req.flash("success", "Review added successfully!");
	res.redirect(`/hostels/${req.params.id}`);
};

module.exports.destroyReview = async (req, res) => {
	let { id, reviewId } = req.params;

	await Hostel.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
	await Review.findByIdAndDelete(reviewId);

	req.flash("success", "Review deleted successfully!");
	res.redirect(`/hostels/${id}`);
};
