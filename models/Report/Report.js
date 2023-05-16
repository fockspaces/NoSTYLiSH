const pool = require("../../utils/pool");
const GetPayments = async () => {
  const [result] = await pool.query("SELECT recipient_id, total FROM orders");
  return result;
};

module.exports = { GetPayments };
