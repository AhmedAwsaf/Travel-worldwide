// middleware/auth.js

const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  // Retrieve the token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  // Check if token is not provided
  if (!token) {
    return res.status(401).json({ message: 'NO TOKEN FOUND' });
  }

  // Verify the token
  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'NOT ALLOWED, WRONG TOKEN' });
    }
    // Store the user information in the request object
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
