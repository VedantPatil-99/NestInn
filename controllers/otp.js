const bcrypt = require("bcryptjs");
const Otp = require("../models/otp");

const User = require("../models/user");
const { sendOTPEmail } = require("../utils/mailer");

module.exports.sendOTP = async (req, res) => {
	const { email } = req.body;
	const otp = Math.floor(100000 + Math.random() * 900000).toString();

	const hashedOtp = await bcrypt.hash(otp, 12);

	await Otp.deleteMany({ email }); // clear previous
	await Otp.create({ email, hashedOtp });

	await sendOTPEmail(email, otp);
	req.flash("success", "OTP sent to your email");
	res.redirect("/verify-otp");
};

module.exports.verifyOTP = async (req, res) => {
	const { email, otp } = req.body;
	const records = await Otp.find({ email });

	if (records.length === 0) {
		req.flash("error", "OTP expired or not found");
		return res.redirect("/forgot-password");
	}

	const match = await bcrypt.compare(otp, records[0].hashedOtp);
	if (!match) {
		req.flash("error", "Invalid OTP");
		return res.redirect("/verify-otp");
	}

	req.session.resetEmail = email;
	await Otp.deleteMany({ email }); // remove on success

	res.redirect("/reset-password");
};

module.exports.resetPassword = async (req, res) => {
	const { password } = req.body;
	const email = req.session.resetEmail;

	const user = await User.findOne({ email });
	if (!user) {
		req.flash("error", "User not found");
		return res.redirect("/signup");
	}

	await user.setPassword(password); // works because of passport-local-mongoose
	await user.save();

	req.session.resetEmail = null;
	req.flash("success", "Password updated! Login now.");
	res.redirect("/login");
};
