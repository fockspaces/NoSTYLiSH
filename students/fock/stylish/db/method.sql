-- 修改指定位置的值 (ref by table)
UPDATE product_item
JOIN color ON REPLACE(product_item.color, '#', '') = color.color_code
SET product_item.color = color.id
WHERE product_item.id > 0;

-- INNTER JOIN
SELECT 
  product.id, 
  category_name,
  title,
  description,
  AVG(product_item.price) as price,
  texture,
  wash,
  place,
  note,
  story, 
  JSON_ARRAYAGG(
    JSON_OBJECT(
      'color_code', color.color_code,
      'size', product_item.size,
      'stock', product_item.stock_qty,
      'price', product_item.price
    )
  ) as vairation ,
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
  other_images
  
FROM product
INNER JOIN product_item ON product.id = product_item.product_id
INNER JOIN category ON category.id = product.category_id
INNER JOIN sub_category ON sub_category.id = product.sub_category_id
INNER JOIN color ON product_item.color = color.id
GROUP BY product.id;