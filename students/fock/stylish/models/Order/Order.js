const pool = require("../../utils/pool");

const { GetRecipient, CreateRecipient } = require("./Recipient");
const { ItemListCreate } = require("./ItemList");

const AddOrder = async (order) => {
  try {
    const { shipping, payment, subtotal, freight, total, recipient } = order;
    const insertOrder = `INSERT INTO orders (shipping, status, payment, subtotal, freight, total, recipient_id)
  VALUES (?, 'unpaid', ?, ?, ?, ?, ?)`;

    const values = [shipping, payment, subtotal, freight, total, recipient];

    const [result] = await pool.query(insertOrder, values);
    return result.insertId;
  } catch (e) {
    console.error(e);
    return false;
  }
};

const UpdateOrder = async (id) => {
  const updateOrderStatus = `UPDATE orders SET status = 'paid' WHERE id = ?`;
  const values = [id];
  const [result] = await pool.query(updateOrderStatus, values);
  return result.affectedRows === 1;
};

module.exports = {
  AddOrder,
  GetRecipient,
  UpdateOrder,
  ItemListCreate,
  CreateRecipient,
};
