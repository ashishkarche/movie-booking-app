import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BookingPage from './pages/BookingPage';
import AdminPage from './pages/AdminPage';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  </Router>
);

export default App;
