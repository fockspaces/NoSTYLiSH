CREATE TABLE product (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL,
  sub_category_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  main_image TEXT,
  other_images TEXT
);

CREATE TABLE product_item (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  SKU VARCHAR(255),
  stock_qty INT NOT NULL DEFAULT 0,
  price DECIMAL NOT NULL,
  color VARCHAR(20) NOT NULL,
  size VARCHAR(10) NOT NULL
);

CREATE TABLE category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(255) NOT NULL
);


CREATE TABLE sub_category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  texture VARCHAR(255) NOT NULL,
  wash VARCHAR(255) NOT NULL,
  place VARCHAR(255) NOT NULL,
  note VARCHAR(255) NOT NULL,
  story TEXT NOT NULL
);

ALTER TABLE product_item
  ADD FOREIGN KEY (product_id) REFERENCES product (id);

ALTER TABLE product
  ADD FOREIGN KEY (category_id) REFERENCES  category(id);

ALTER TABLE product
  ADD FOREIGN KEY (sub_category_id) REFERENCES sub_category (id);


-- default category
INSERT INTO category (category_name)
VALUES ('men'), ('women'), ('accessories');
