const pool = require("../../utils/pool");
const catchAsync = require("../../utils/catchAsync");

const addCampaign = catchAsync(async ({ product_id, picture, story }) => {
  // error handling
  if (!product_id || !picture || !story) {
    throw new Error("Missing required parameters");
  }
  // insert statement
  const insertCampaign =
    "INSERT INTO campaign (product_id, picture, story) VALUES (?, ?, ?)";
  const values = [product_id, picture, story];

  const [result] = await pool.query(insertCampaign, values);
  console.log(result);
  // return data
  return result;
});

module.exports = {
  addCampaign,
};
