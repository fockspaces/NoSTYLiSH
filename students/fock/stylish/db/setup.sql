CREATE TABLE `product` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `category_id` INT NOT NULL,
  `sub_category_id` INT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `main_image` VARCHAR(255),
  `other_images` TEXT
);

CREATE TABLE `product_item` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `SKU` VARCHAR(255),
  `stock_qty` INT NOT NULL DEFAULT 0,
  `price` DECIMAL NOT NULL
);

CREATE TABLE `category` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `category_name` VARCHAR(255) NOT NULL
);

CREATE TABLE `sub_category` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `texture` VARCHAR(255) NOT NULL,
  `wash` VARCHAR(255) NOT NULL,
  `place` VARCHAR(255) NOT NULL,
  `note` VARCHAR(255) NOT NULL,
  `story` TEXT NOT NULL
);

CREATE TABLE `variation` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `category_id` INT NOT NULL,
  `variation_type` VARCHAR(255) NOT NULL
);

CREATE TABLE `variation_options` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `variation_id` INT NOT NULL,
  `variation_type` VARCHAR(255) NOT NULL
);

CREATE TABLE `item_configs` (
  `product_item_id` INT PRIMARY KEY AUTO_INCREMENT,
  `variation_option_id` INT NOT NULL
);

ALTER TABLE `product_item` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `category` ADD FOREIGN KEY (`id`) REFERENCES `product` (`category_id`);

ALTER TABLE `sub_category` ADD FOREIGN KEY (`id`) REFERENCES `product` (`sub_category_id`);

ALTER TABLE `sub_category` ADD FOREIGN KEY (`id`) REFERENCES `variation` (`category_id`);

ALTER TABLE `variation` ADD FOREIGN KEY (`id`) REFERENCES `variation_options` (`variation_id`);

ALTER TABLE `product_item` ADD FOREIGN KEY (`id`) REFERENCES `item_configs` (`product_item_id`);

ALTER TABLE `variation_options` ADD FOREIGN KEY (`id`) REFERENCES `item_configs` (`variation_option_id`);
