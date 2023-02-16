const jwt = require("jsonwebtoken");

const getJwtToken = (user) => {
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRED,
  });
  return token;
};

module.exports = { getJwtToken };
