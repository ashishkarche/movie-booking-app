import React, { useState } from 'react';
import axios from 'axios';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showtime, setShowtime] = useState('');

  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seat)) {
        return prev.filter(s => s !== seat);
      } else {
        return [...prev, seat];
      }
    });
  };

  const handleShowtimeChange = (e) => {
    setShowtime(e.target.value);
  };

  const handleBooking = async () => {
    try {
      await axios.post('/api/book', { seats: selectedSeats, showtime });
      alert('Booking successful!');
    } catch (error) {
      console.error(error);
      alert('Booking failed!');
    }
  };

  return (
    <div>
      <h2>Select Seats</h2>
      <div className="seating-map">
        {[...Array(60).keys()].map(seat => (
          <div
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat + 1}
          </div>
        ))}
      </div>
      <label>
        Showtime:
        <select value={showtime} onChange={handleShowtimeChange}>
          <option value="10:00 AM">10:00 AM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
          <option value="7:00 PM">7:00 PM</option>
        </select>
      </label>
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default SeatSelection;
