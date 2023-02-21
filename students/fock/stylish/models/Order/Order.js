const pool = require("../../utils/pool");

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

const itemListCreate = async (orderId, list) => {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    for (const { product_item_id, qty } of list) {
      const addItemList =
        "INSERT INTO item_lists (order_id, product_item_id, qty) VALUES (?,?,?)";
      const values = [orderId, product_item_id, qty];
      await pool.query(addItemList, values);
    }
    await connection.commit();
    return true;
  } catch (e) {
    await connection.rollback();
    console.error("Error executing transaction", e);
    return false;
  } finally {
    connection.release();
  }
};

module.exports = { AddOrder, GetRecipient, updateOrder, itemListCreate };
