const express = require("express");
const user = express.Router();

const { handleSignUp } = require("../controllers/users/users");

user.post("/signup", handleSignUp);

module.exports = user;
