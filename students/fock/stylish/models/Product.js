const pool = require("./pool");

const insertProduct = async (data) => {
  const { category, title, description } = data.product;
  const { texture, wash, place, note, story } = data.category;
  const { main_image, other_images } = data;
  const imagesPaths = other_images
    ? JSON.stringify(other_images.map((image) => image.path))
    : "";
  const imagePath = main_image ? main_image[0].path : "";

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
  const limit = 6;
  const offset = paging * limit;
  let whereClause = '';
  if (category !== 'all') {
    whereClause = `WHERE category_name = ?`;
  }
  const getInfo = `SELECT 
  product.id, 
  category_name as category,
  title,
  description,
  AVG(product_item.price) as price,
  texture,
  wash,
  place,
  note,
  story, 
  GROUP_CONCAT(
    DISTINCT JSON_OBJECT(
      'code', color.color_code,
      'name', color.color_name
    )
  ) as colors,
  GROUP_CONCAT(
    DISTINCT (
     product_item.size
    )
  ) as sizes, 
  main_image, 
  other_images as images,
  JSON_ARRAYAGG(
    JSON_OBJECT(
      'color_code', color.color_code,
      'size', product_item.size,
      'stock', product_item.stock_qty,
      'individual_price', product_item.price
    )
  ) as variants
FROM product 
INNER JOIN product_item ON product.id = product_item.product_id
INNER JOIN category ON category.id = product.category_id
INNER JOIN sub_category ON sub_category.id = product.sub_category_id
INNER JOIN color ON product_item.color = color.id
${whereClause}
GROUP BY product.id
LIMIT ? OFFSET ?`;
  const values = category === 'all' ? [limit, offset] : [category, limit, offset];
  const rawData = await pool.query(getInfo, values);
  const data = handleInfo(rawData);
  const hasMoreData = data.length === limit;
  return { data, hasMoreData };
};


const handleInfo = (rawData) => {
  const filterData = rawData[0].map((raw) => {
    const colors = JSON.parse(`[${raw.colors}]`);
    const sizes = raw.sizes.split(",");
    const images = raw.images ? JSON.parse(raw.images) : [];
    return { ...raw, colors, sizes, images };
  });
  return filterData;
};

module.exports = {
  insertProduct,
  insertItem,
  getAllProducts,
  getAllInfo,
};
