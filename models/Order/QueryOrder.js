const pool = require("../../utils/pool");
const GetTotal = async () => {
  const [rows] = await pool.query("SELECT SUM(total) as total FROM orders");
  return rows[0].total;
};

const GetPie = async () => {
  const [rows] = await pool.query(`
  SELECT color, SUM(order_items.qty) as quantity 
  FROM orders
  JOIN order_items ON orders.id = order_items.order_id
  GROUP BY color;
  `);
  return rows;
};

const GetHistogram = async () => {
  const [rows] = await pool.query(
    `SELECT COUNT(*) AS count, price FROM order_items GROUP BY price`
  );
  return rows;
};

const GetStacks = async () => {
  const [TOP_FIVE] = await pool.query(`SELECT product_id, SUM(qty) as total_qty 
  FROM order_items 
  GROUP BY product_id 
  ORDER BY total_qty DESC 
  LIMIT 5
`);
  const result = GetInSize(TOP_FIVE);

  return result;
};

const GetInSize = async (targets) => {
  let qty = [];
  for (t of targets) {
    const { product_id } = t;
    const [info] = await pool.query(
      `SELECT size, SUM(qty) as total_qty FROM order_items WHERE product_id = ? GROUP BY size`,
      [product_id]
    );
    qty.push({ product_id, info });
  }
  return qty;
};

module.exports = { GetTotal, GetPie, GetHistogram, GetStacks };
