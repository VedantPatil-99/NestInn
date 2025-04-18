const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const passport = require("passport");
const { saveRedirectURL } = require("../middleware.js");
const userController = require("../controllers/user.js");
const { isLoggedIn } = require("../middleware.js");
// Signup Routes
router
	.route("/signup")
	.get(userController.renderSignupForm)
	.post(wrapAsync(userController.signup));

// Login Routes
router
	.route("/login")
	.get(userController.renderLoginForm)
	.post(
		saveRedirectURL, // Save original URL before authentication
		passport.authenticate("local", {
			failureRedirect: "/login",
			failureFlash: true,
		}),
		userController.login,
	);

// Logout Route
router.get("/logout", userController.logout);

// Google OAuth Routes
// 1. Start Google Auth process
router.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile", "email"] }),
);

// 2. Google Callback URL after authentication
router.get(
	"/auth/google/callback",
	passport.authenticate("google", {
		failureRedirect: "/login",
		failureFlash: true,
	}),
	userController.googleLogin,
);

// my-hostels Route
// This route is used to show the hostels that the user has created
router.get("/my-hosted-hostels", isLoggedIn, userController.showMyHostedHostels);

module.exports = router;
