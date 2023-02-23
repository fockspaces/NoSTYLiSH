const express = require("express");
const demo = express.Router();

const { renderIndexPage } = require("../controllers/demo/demos");

demo.get("/index", renderIndexPage);

module.exports = demo;
