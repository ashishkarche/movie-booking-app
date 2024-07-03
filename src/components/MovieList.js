import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('/api/movies');
      setMovies(response.data);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Available Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <p>{movie.showtimes.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
