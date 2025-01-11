const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.identifier = (req, res, next) => {
  try {
    let token;

    // Check if the client is not a browser
    if (req.headers.client === 'not-browser') {
      token = req.headers.authorization; // Ensure lowercase 'authorization'
    } else {
      token = req.cookies['Authorization']; // Match the cookie key casing
    }

    // No token provided
    if (!token) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    // Extract token value (if it starts with "Bearer ")
    const userToken = token.startsWith('Bearer ') ? token.split(' ')[1] : token;

    // Verify the token
    const jwtVerified = jwt.verify(userToken, process.env.ACCESS_TOKEN_SECRET);

    // Attach the verified user payload to req.user
    req.user = jwtVerified;
    next();
  } catch (error) {
    console.error('Error in identifier middleware:', error);
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
