const pool = require("../../utils/pool");

const AddOrder = async (order) => {
  const { shipping, payment, subtotal, freight, total, recipient_id } = order;
  const insertOrder = `INSERT INTO orders (shipping, status, payment, subtotal, freight, total, recipient_id)
  VALUES (?, 'unpaid', ?, ?, ?, ?, ?)`;

  const values = [shipping, payment, subtotal, freight, total, recipient_id];

  const [result] = await pool.query(insertOrder, values);
  return result.insertId;
};

const GetRecipient = async (id) => {
  const getRecipient = `select * from recipients where id = ?`;
  const values = [id];
  const [result] = await pool.query(getRecipient, values);
  return result[0];
};

const updateOrder = async (id) => {
  const updateOrderStatus = `UPDATE orders SET status = 'paid' WHERE id = ?`;
  const values = [id];
  const [result] = await pool.query(updateOrderStatus, values);
  return result.affectedRows === 1;
};

const AddToItemList = async (orderId, itemId, qty) => {
  
}



module.exports = { AddOrder, GetRecipient, updateOrder };
