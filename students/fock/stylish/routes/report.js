const express = require("express");
const report = express.Router();

const { paymentsHandler } = require("../controllers/reports/reports");

report.get("/payments", paymentsHandler);

module.exports = report;
