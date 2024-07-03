const express = require('express');
const { bookSeats, getBookings } = require('../controllers/bookingController');
const { protect } = require('../utils/authMiddleware');

const router = express.Router();

router.post('/book', protect, bookSeats);
router.get('/bookings', protect, getBookings);

module.exports = router;
