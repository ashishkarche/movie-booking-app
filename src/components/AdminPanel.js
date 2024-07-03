import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get('/api/bookings');
      setBookings(response.data);
    };
    const fetchFoodMenu = async () => {
      const response = await axios.get('/api/food-menu');
      setFoodMenu(response.data);
    };
    fetchBookings();
    fetchFoodMenu();
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <h3>Bookings</h3>
        <ul>
          {bookings.map(booking => (
            <li key={booking.id}>
              {booking.movieTitle} - {booking.showtime} - Seats: {booking.seats.join(', ')}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Food Menu</h3>
        <ul>
          {foodMenu.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
