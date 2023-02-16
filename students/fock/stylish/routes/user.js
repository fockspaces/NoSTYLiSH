const express = require("express");
const user = express.Router();

const { signupHandler, signInHandler } = require("../controllers/users/users");

user.post("/signup", signupHandler);
user.post("/signin", signInHandler);

module.exports = user;
