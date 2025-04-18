const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservations");
const { isLoggedIn } = require("../middleware"); // for auth

// POST Reservation
router.post("/:hostelId", isLoggedIn, reservationController.createReservation);

// View User Reservations
router.get(
	"/my-reservations",
	isLoggedIn,
	reservationController.showMyReservations,
);

// Cancel Reservation
router.post(
	"/:reservationId/cancel",
	isLoggedIn,
	reservationController.cancelReservation,
);

// Edit Reservation (optional)
router.get(
	"/:reservationId/edit",
	isLoggedIn,
	reservationController.renderEditForm,
);
router.put(
	"/:reservationId",
	isLoggedIn,
	reservationController.updateReservation,
);

module.exports = router;
