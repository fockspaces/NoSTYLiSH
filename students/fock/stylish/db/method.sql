-- 修改指定位置的值 (ref by table)
UPDATE product_item
JOIN color ON REPLACE(product_item.color, '#', '') = color.color_code
SET product_item.color = color.id
WHERE product_item.id > 0;

-- INNTER JOIN
SELECT 
  product.id, 
  category_name,
  description, 
  title,
  texture,
  wash,
  place,
  note,
  story, 
  main_image, 
  other_images, 
  JSON_ARRAYAGG(
    JSON_OBJECT(
      'SKU', product_item.SKU,
      'stock_qty', product_item.stock_qty,
      'price', product_item.price,
      'color_code', product_item.color,
      'color_name'
      'size', product_item.size
    )
  ) as vairation
FROM product
INNER JOIN product_item ON product.id = product_item.product_id
INNER JOIN category ON category.id = product.category_id
INNER JOIN sub_category ON sub_category.id = product.sub_category_id
GROUP BY product.id;