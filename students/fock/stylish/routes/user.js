const express = require("express");
const user = express.Router();
const {
  signupHandler,
  signInHandler,
  profileHandler,
  logoutHandler,
} = require("../controllers/users/users");

const { authToken } = require("../controllers/middleware/auth");

user.post("/signup", signupHandler);
user.post("/signin", signInHandler);
user.get("/logout", logoutHandler);

// need to be authorized
user.get("/profile", authToken, profileHandler);

module.exports = user;
