const pool = require("../../utils/pool");
const catchAsync = require("../../utils/catchAsync");

const addCampaign = async ({
  product_id,
  picture,
  story,
  start_date,
  end_date,
}) => {
  // error handling
  if (!product_id || !picture || !story || !start_date || !end_date) {
    throw new Error("Missing required parameters");
  }
  // insert statement
  const insertCampaign =
    "INSERT INTO campaign (product_id, picture, story, start_date, end_date) VALUES (?, ?, ?, ?, ?)";
  const values = [product_id, picture, story, start_date, end_date];

  const [result] = await pool.query(insertCampaign, values);
  // return data
  return result.insertId;
};

const getAllCampaigns = async () => {
  // query statement
  const searchCampaigns = `SELECT * FROM campaign WHERE start_date <= NOW() AND end_date >= NOW()`;

  const [result] = await pool.query(searchCampaigns);
  console.log(result);
  // return data
  return result;
};

module.exports = {
  addCampaign,
  getAllCampaigns,
};
