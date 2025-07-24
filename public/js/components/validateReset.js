// OTP Form (verify-otp.ejs)
const otpForm = document.querySelector('form[action="/verify-otp"]');
if (otpForm) {
	const otpInput = document.getElementById("otp");

	otpForm.addEventListener("submit", function (e) {
		const otp = otpInput.value.trim();

		if (!/^\d{6}$/.test(otp)) {
			e.preventDefault();
			alert("Please enter a valid 6-digit OTP.");
			otpInput.focus();
		}
	});
}

// Reset Password Form (reset-password.ejs)
const resetForm = document.querySelector('form[action="/reset-password"]');
if (resetForm) {
	const pass1 = document.getElementById("password");
	const pass2 = document.getElementById("confirmPassword");

	resetForm.addEventListener("submit", function (e) {
		if (pass1.value.length < 6) {
			e.preventDefault();
			alert("Password must be at least 6 characters long.");
			pass1.focus();
			return;
		}

		if (pass1.value !== pass2.value) {
			e.preventDefault();
			alert("Passwords do not match.");
			pass2.focus();
		}
	});
}
