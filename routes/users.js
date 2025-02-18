const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const passport = require("passport");
const { saveRedirectURL } = require("../middleware.js");
const userController = require("../controllers/user.js");

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

module.exports = router;
