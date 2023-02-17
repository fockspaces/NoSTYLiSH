const pool = require("../../utils/pool");
const catchAsync = require("../../utils/catchAsync");

const addCampaign = async ({ product_id, picture, story }) => {
  // error handling
  if (!product_id || !picture || !story) {
    throw new Error("Missing required parameters");
  }
  // insert statement
  const insertCampaign =
    "INSERT INTO campaign (product_id, picture, story) VALUES (?, ?, ?)";
  const values = [product_id, picture, story];

  const [result] = await pool.query(insertCampaign, values);
  // return data
  return result.insertId;
};

const getAllCampaigns = async () => {
  // query statement
  const searchCampaigns = `select * from campaign`;

  const [result] = await pool.query(searchCampaigns);
  console.log(result);
  // return data
  return result;
};

module.exports = {
  addCampaign,
  getAllCampaigns,
};