const Booking = require('../models/Booking');

exports.bookSeats = async (req, res) => {
  try {
    const { movieTitle, showtime, seats } = req.body;
    const booking = new Booking({
      user: req.user.userId,
      movieTitle,
      showtime,
      seats,
    });
    await booking.save();
    res.status(201).json({ message: 'Booking successful!', booking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user', 'name email');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
