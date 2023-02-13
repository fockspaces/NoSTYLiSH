const express = require("express");
const admin = express.Router();

const product = require("../config/configs.js");

// admin.get("/product", (req, res) => {
//   return res.redirect("/");
// });

module.exports = admin;
