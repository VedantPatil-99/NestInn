const express = require("express");
const router = express.Router();
const otpCtrl = require("../controllers/otp");

router.get("/forgot-password", (req, res) =>
	res.render("users/forgot-password"),
);
router.post("/forgot-password", otpCtrl.sendOTP);

router.get("/verify-otp", (req, res) => res.render("users/verify-otp"));
router.post("/verify-otp", otpCtrl.verifyOTP);

router.get("/reset-password", (req, res) => res.render("users/reset-password"));
router.post("/reset-password", otpCtrl.resetPassword);

module.exports = router;
