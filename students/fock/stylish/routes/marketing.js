const express = require("express");
const marketing = express.Router();
const upload = require("../utils/multer");

const {
  createCampaignProduct,
  fetchCampaignList,
  checkCampaignCache,
} = require("../controllers/marketing/marketings");

marketing.get("/campaigns", checkCampaignCache, fetchCampaignList);

marketing
  .route("/createCampaign")
  .post(upload.single("picture"), createCampaignProduct);

module.exports = marketing;
