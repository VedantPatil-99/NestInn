const User = require("../models/user.js");

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
		res.redirect("/hostels"); // Redirect to hostels page after logout
	});
};
