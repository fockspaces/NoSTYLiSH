const express = require("express");
const marketing = express.Router();
const upload = require("../utils/multer");

const {
  createCampaignProduct,
} = require("../controllers/marketing/marketings");

marketing.get("/campaigns", (req, res) => {
  return res.send("list");
});

marketing
  .route("/createCampaign")
  .get((req, res) => {
    return res.render("marketing/campaignCreate");
  })
  .post(upload.single("picture"), createCampaignProduct);

module.exports = marketing;
