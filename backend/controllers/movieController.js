const Movie = require('../models/Movie');

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
