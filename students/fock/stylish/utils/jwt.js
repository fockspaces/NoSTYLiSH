const jwt = require("jsonwebtoken");

const getJwtToken = (user, expiration) => {
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: expiration,
  });
  return token;
};

module.exports = { getJwtToken };
