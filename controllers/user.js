const User = require("../models/user.js");
const Hostel = require("../models/hostel");
const allSVGs = require("../utils/SVGs");

module.exports.renderSignupForm = async (req, res) => {
	res.render("users/signup.ejs");
};

module.exports.signup = async (req, res, next) => {
	try {
		let { username, email, password } = req.body;
		const newUser = new User({ email, username });
		const regUser = await User.register(newUser, password);

		req.login(regUser, (err) => {
			if (err) {
				return next(err);
			}
			req.flash("success", "Account created successfully! Welcome to NestInn!");
			res.redirect("/hostels");
		});
	} catch (e) {
		req.flash("error", e.message);
		res.redirect("/signup");
	}
};

module.exports.renderLoginForm = (req, res) => {
	res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
	req.flash("success", "Welcome back! Login successful.");
	let redirectURL = res.locals.redirectURL || "/hostels";
	res.redirect(redirectURL);
};

module.exports.logout = (req, res, next) => {
	req.logout((err) => {
		if (err) {
			return next(err);
		}
		req.flash("success", "You have logged out successfully.");
		res.redirect("/hostels");
	});
};

module.exports.googleLogin = (req, res) => {
	req.flash("success", "Welcome back!");
	const redirectUrl = res.locals.redirectUrl || "/hostels"; // or your homepage
	res.redirect(redirectUrl);
};

module.exports.showMyHostedHostels = async (req, res) => {
	try {
		const myHostels = await Hostel.find({ owner: req.user._id })
			.populate("reviews")
			.sort({
				createdAt: -1,
			}); // or req.session.user._id

		myHostels.forEach((hostel) => {
			const total = hostel.reviews.reduce((sum, r) => sum + r.rating, 0);
			hostel.avgRating = hostel.reviews.length
				? total / hostel.reviews.length
				: 0;
		});
		res.render("users/myHostedHostels", { myHostels, allSVGs });
	} catch (err) {
		// console.log(err);
		req.flash("error", "Unable to fetch your hostels.");
		res.redirect("/hostels");
	}
};
