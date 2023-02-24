const express = require("express");
const demo = express.Router();

const {
  renderItemPage,
  renderIndexPage,
  renderProfile,
  renderLogin,
  renderSignup,
  renderLoginOptions,
} = require("../controllers/demo/demos");

const { authToken } = require("../controllers/middleware/auth");

demo.get("/index", renderIndexPage);
demo.get("/product", renderItemPage);

demo.get("/profile", authToken, renderProfile);
demo.get("/loginOptions", renderLoginOptions);
demo.get("/login", renderLogin);
demo.get("/signup", renderSignup);

module.exports = demo;
