const express = require("express");
const reportV2 = express.Router();

const { paymentsHandler } = require("../controllers/reports/reportsV2");

reportV2.get("/payments", paymentsHandler);

module.exports = reportV2;
