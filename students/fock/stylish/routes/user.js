const express = require("express");
const user = express.Router();
const {
  signupHandler,
  signInHandler,
  profileHandler,
} = require("../controllers/users/users");
const { renderSignIn } = require("../controllers/users/userOAuth");

const { authToken } = require("../controllers/middleware/auth");

user.post("/signup", signupHandler);
user.post("/signin", signInHandler);

// need to be authorized
user.get("/profile", authToken, profileHandler);
user.get("/signin", renderSignIn);

module.exports = user;
