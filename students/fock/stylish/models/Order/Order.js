const pool = require("../../utils/pool");

const AddOrder = async (order) => {
  const { shipping, payment, subtotal, freight, total, recipient_id } = order;
  const insertOrder = `INSERT INTO orders (shipping, status, subtotal, freight, total, recipient_id)
    `;
  const values = [shipping, payment, subtotal, freight, total, recipient_id];
  const [result] = await pool.query(insertOrder, values);
  return result.insertId;
};

module.exports = { AddOrder };
