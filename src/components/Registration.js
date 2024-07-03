import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', formData);
      alert('Registration successful!');
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange} required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
