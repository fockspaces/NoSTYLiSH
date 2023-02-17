const jwt = require("jsonwebtoken");

const getJwtToken = (user) => {
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRED,
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken;
  } catch (err) {
    throw new Error("Invalid token");
  }
};

module.exports = { getJwtToken, verifyToken };
