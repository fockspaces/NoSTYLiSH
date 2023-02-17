const express = require("express");
const marketing = express.Router();
const upload = require("../utils/multer");

const {
  createCampaignProduct,
  renderCampaignPage,
  fetchCampaignList,
} = require("../controllers/marketing/marketings");

marketing.get("/campaigns", fetchCampaignList);

marketing
  .route("/createCampaign")
  .get(renderCampaignPage)
  .post(upload.single("picture"), createCampaignProduct);

module.exports = marketing;
