import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/login', formData);
      alert('Login successful!');
      navigate('/booking');
    } catch (error) {
      console.error(error);
      alert('Login failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange} required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
