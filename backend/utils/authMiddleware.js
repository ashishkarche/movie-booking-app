const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return res.status(401).json({ message: 'Not authorized to access this resource' });
  }
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = await User.findById(decoded.userId);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Not authorized to access this resource' });
  }
};
