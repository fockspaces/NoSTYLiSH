const mysql = require("mysql2/promise");

require("dotenv").config();
// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

if (!pool) {
  console.error("Error connecting to database");
} else {
  console.log("Database connection established");
}

const insertProduct = async (data) => {
  // Insert data into the sub_category table
  const insertSubCategory =
    "INSERT INTO sub_category (texture, wash, place, note, story) VALUES (?, ?, ?, ?, ?)";
  const subCategoryValues = [
    "fake_texture",
    "fake_wash",
    "fake_place",
    "fake_note",
    "fake_story",
  ];
  const result = await pool.query(insertSubCategory, subCategoryValues);
  const { insertId } = result[0];

  // insert product
  const insertProduct =
    "INSERT INTO product (category_id, sub_category_id, title, description, main_image, other_images) VALUES (?, ?, ?, ?, ?, ?)";
  const productValues = [
    1,
    insertId,
    "fake_title",
    "fake_description",
    undefined,
    undefined,
  ];
  await pool.query(insertProduct, productValues);

  // insert items if any
  const items = [1, 2, 3, 4];
  if (items) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      const insertItem =
        "INSERT INTO product_item (product_id, SKU, stock_qty, price, color, size) VALUES (?, ?, ?, ?, ?, ?)";
      // const itemValues = [
      //   insertId,
      //   item.SKU,
      //   item.stock_qty,
      //   item.price,
      //   item.color,
      //   item.size,
      // ];
      const itemValues = [
        insertId,
        "fake_SKU",
        2,
        2,
        "fake_color",
        "fake_size",
      ];
      await pool.query(insertItem, itemValues);
    }
  }

  console.log("Data inserted successfully");
  return;
};

insertProduct();

module.exports = {
  insertProduct,
};
