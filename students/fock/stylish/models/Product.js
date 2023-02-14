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
  const { category, title, description } = data.product;
  const { texture, wash, place, note, story } = data.category;
  const { main_image, other_images } = data;
  const imagesPaths = JSON.stringify(other_images.map((image) => image.path));
  const imagePath = main_image[0].path;

  // Insert data into the sub_category table
  const insertSubCategory =
    "INSERT INTO sub_category (texture, wash, place, note, story) VALUES (?, ?, ?, ?, ?)";

  const subCategoryValues = [texture, wash, place, note, story];
  const result = await pool.query(insertSubCategory, subCategoryValues);
  const { insertId } = result[0];

  // insert product
  const insertProduct =
    "INSERT INTO product (category_id, sub_category_id, title, description, main_image, other_images) VALUES (?, ?, ?, ?, ?, ?)";
  const productValues = [
    category,
    insertId,
    title,
    description,
    imagePath,
    imagesPaths,
  ];
  await pool.query(insertProduct, productValues);

  console.log("Data inserted successfully");
};

const insertItems = async (items) => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    const insertItem =
      "INSERT INTO product_item (product_id, SKU, stock_qty, price, color, size) VALUES (?, ?, ?, ?, ?, ?)";

    const itemValues = [
      insertId,
      item.SKU,
      item.stock_qty,
      item.price,
      item.color,
      item.size,
    ];
    await pool.query(insertItem, itemValues);
  }
};

module.exports = {
  insertProduct,
};
