const pool = require("../../utils/pool");

const ItemListCreate = async (orderId, list) => {
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

module.exports = { ItemListCreate };
