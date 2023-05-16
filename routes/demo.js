const express = require("express");
const demo = express.Router();

const {
  renderItemPage,
  renderIndexPage,
  renderProfile,
  renderLogin,
  renderSignup,
  renderCheckout,
  renderThankyou,
} = require("../controllers/demo/demos");

demo.get("/index", renderIndexPage);
demo.get("/product", renderItemPage);

demo.get("/profile", renderProfile);
demo.get("/login", renderLogin);
demo.get("/signup", renderSignup);
demo.get("/checkout", renderCheckout);
demo.get("/thankyou", renderThankyou);

module.exports = demo;
