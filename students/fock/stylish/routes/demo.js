const express = require("express");
const demo = express.Router();

const { renderIndexPage } = require("../controllers/demo/demos");
const { renderItemPage } = require("../controllers/demo/demos");

demo.get("/index", renderIndexPage);
demo.get("/product", renderItemPage);

module.exports = demo;
