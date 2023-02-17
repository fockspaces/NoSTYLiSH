const { addCampaign } = require("../../models/Marketing/Marketing");

const createCampaignProduct = async (req, res) => {
  // get data from req.body
  const { product_id, picture, story } = req.body;

  // insert data into db
  const info = await addCampaign({ product_id, picture, story });

  return res.send(info);
};

module.exports = { createCampaignProduct };
