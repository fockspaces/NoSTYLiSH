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

const FetchItemID = async (id, color, size) => {
  const fetchItem =
    "SELECT id FROM product_item WHERE product_id = ? AND color = ? AND size = ?";
  const values = [id, color, size];

  const [result] = await pool.query(fetchItem, values);
  // return ID or false
  return result[0] ? result[0].id : false;
};

const GetColorIDByCode = async (code) => {
  const getColorID = "SELECT id FROM color WHERE color_code = ?";
  const values = [code];
  const [result] = await pool.query(getColorID, values);
  return result[0] ? result[0].id : false;
};

module.exports = { ItemListCreate, FetchItemID, GetColorIDByCode };
