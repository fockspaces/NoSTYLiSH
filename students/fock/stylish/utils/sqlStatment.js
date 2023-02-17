const selectProduct = ` SELECT 
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
INNER JOIN color ON product_item.color = color.id `;

module.exports = { selectProduct };
