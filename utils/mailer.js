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
				<div style="max-width: 500px; margin: auto; padding: 20px; font-family: Arial, sans-serif; background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 8px;">
					<h2 style="text-align: center; color: #333;">🔐 OTP Verification</h2>
					<p style="font-size: 16px; color: #555;">Hello,</p>
					<p style="font-size: 16px; color: #555;">
						Use the following One-Time Password (OTP) to proceed with your request:
					</p>
					<div style="text-align: center; margin: 20px 0;">
						<span style="display: inline-block; font-size: 24px; font-weight: bold; background-color: #efefef; padding: 10px 20px; border-radius: 6px; color: #222;">
							${otp}
						</span>
					</div>
					<p style="font-size: 14px; color: #777;">
						This OTP is valid for <strong>10 minutes</strong>. Please do not share it with anyone.
					</p>
					<p style="font-size: 14px; color: #999; text-align: center; margin-top: 30px;">
						If you did not request this, please ignore this email.
					</p>
				</div>
		`,
		});
	} catch (err) {
		console.error("Error sending email:", err);
	}
};
