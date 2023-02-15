const pool = require("../../utils/pool");
const { handleInfo } = require("../../utils/infofilter");
const { selectProduct } = require("../../utils/sqlStatment");

const limit = 6;
const insertProduct = async (data) => {
  const { category, title, description } = data.product;
  const { texture, wash, place, note, story } = data.category;
  const { main_path, other_paths } = data;

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
    main_path,
    other_paths,
  ];
  await pool.query(insertProduct, productValues);

  console.log("Data inserted successfully");
};

const insertItem = async (item) => {
  const { product_id, stock_qty, price, color, size } = item;
  const SKU = color + "-" + size;
  const insertItem =
    "INSERT INTO product_item (product_id, SKU, stock_qty, price, color, size) VALUES (?, ?, ?, ?, ?, ?)";

  const itemValues = [product_id, SKU, stock_qty, price, color, size];
  await pool.query(insertItem, itemValues);
};

const getAllProducts = async () => {
  const selectAllProducts = `SELECT * from product`;
  const data = await pool.query(selectAllProducts);
  return data[0];
};

const getAllInfo = async (category, paging) => {
  const offset = paging * limit;
  let whereClause = "";
  if (category !== "all") {
    whereClause = ` WHERE category_name = ? `;
  }
  const groupBy = ` GROUP BY product.id `;
  const limitBy = ` LIMIT ? OFFSET ? `;
  const getInfo = selectProduct + whereClause + groupBy + limitBy;

  const values =
    category === "all" ? [limit, offset] : [category, limit, offset];
  const rawData = await pool.query(getInfo, values);
  const data = handleInfo(rawData);
  const hasMoreData = data.length === limit;
  return { data, hasMoreData };
};

const productSearch = async (term, paging) => {
  const offset = paging * limit;
  const groupBy = ` GROUP BY product.id `;
  const whereClause = ` WHERE LOWER(title) LIKE ? `;
  const limitBy = ` LIMIT ? OFFSET ? `;

  const getInfo = selectProduct + whereClause + groupBy + limitBy;
  const values = [`%${term}%`, limit, offset];
  const rawData = await pool.query(getInfo, values);
  const data = handleInfo(rawData);
  const hasMoreData = data.length === limit;
  return { data, hasMoreData };
};

const productDetails = async (id, paging) => {
  const offset = paging * limit;
  const groupBy = ` GROUP BY product.id `;
  const whereClause = ` WHERE product.id = ? `;
  const limitBy = ` LIMIT ? OFFSET ? `;

  const getInfo = selectProduct + whereClause + groupBy + limitBy;
  const values = [id, limit, offset];
  const rawData = await pool.query(getInfo, values);
  const data = handleInfo(rawData);
  const hasMoreData = data.length === limit;
  return { data, hasMoreData };
};

module.exports = {
  insertProduct,
  insertItem,
  getAllProducts,
  getAllInfo,
  productSearch,
  productDetails,
};
