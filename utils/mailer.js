const nodemailer = require("nodemailer");

module.exports.sendOTPEmail = async (to, otp) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_PASS,
		},
	});

	try {
		await transporter.sendMail({
			from: `"NestInn OTP" <${process.env.GMAIL_USER}>`,
			to,
			subject: "Your NestInn OTP Code",
			html: `
			<h2>OTP Verification</h2>
			<p>Your OTP is: <b>${otp}</b></p>
			<p>This will expire in 10 minutes.</p>
		`,
		});
	} catch (err) {
		console.error("Error sending email:", err);
	}
};
