import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/admin">Admin Panel</Link></li>
        </ul>
    </nav>
);

export default Navbar;
