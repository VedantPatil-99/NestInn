document.addEventListener("DOMContentLoaded", function () {
	const successToast = document.getElementById("successToast");
	const errorToast = document.getElementById("errorToast");

	if (successToast) {
		const toast = new bootstrap.Toast(successToast);
		toast.show();
	}

	if (errorToast) {
		const toast = new bootstrap.Toast(errorToast);
		toast.show();
	}
});
