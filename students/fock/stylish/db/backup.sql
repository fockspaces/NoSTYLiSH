-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: stylish
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'men'),(2,'women'),(3,'accessories');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `sub_category_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `main_image` varchar(255) DEFAULT NULL,
  `other_images` text,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `sub_category_id` (`sub_category_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,1,1,'ARLINGTON 內刷毛休閒連帽上衣 4色 1024','正面英文刻字印花\r\n柔軟舒適的棉料製成\r\n磨毛內裏增加保暖度\r\n微寬鬆落肩版型\r\n日常必備的基本休閒單品','uploads/main_image-1676362172582.jpg',''),(2,1,2,'厚實毛呢格子外套','高抗寒素材選用，保暖也時尚有型','uploads/main_image-1676362438518.jpg',''),(3,1,3,'韓版薄款冰絲西裝褲 / 3色-BD3962','全店，超商滿$999免運費\r\n\r\n全店，宅配滿$2000免運費','uploads/main_image-1676362531386.jpg',''),(4,3,4,'iPhone 9','An apple mobile which is nothing like apple','uploads/main_image-1676362954837.jpg',''),(5,2,5,'Casual Red Dress','SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...','uploads/main_image-1676363095350.jpg',''),(6,2,6,'Red Pant','a red pant','',''),(7,2,7,'Skinny Jeans','a Skinny Jeans','',''),(8,2,8,'Relaxed Fit Jeans','a Relaxed Fit Jeans','',''),(9,2,9,'Pumps','a Pumps','',''),(10,2,10,'rouser Short','a rouser Short','',''),(11,2,11,'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops','Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday','uploads/main_image-1676364557209.jpg',''),(12,2,12,'Mens Casual Premium Slim Fit T-Shirts ','Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.','uploads/main_image-1676364610796.jpg',''),(13,2,13,'BIYLACLESEN Women\'s 3-in-1 Snowboard Jacket Winter Coats','Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates','uploads/main_image-1676364640542.jpg',''),(14,2,14,'Rain Jacket Women Windbreaker Striped Climbing Raincoats','Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn\'t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.','uploads/main_image-1676364666005.jpg',''),(15,2,15,'MBJ Women\'s Solid Short Sleeve Boat Neck V','95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem','uploads/main_image-1676364719098.jpg',''),(16,2,16,'DANVOUY Womens T Shirt Casual Cotton Short','95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.','uploads/main_image-1676364751262.jpg',''),(17,3,17,'John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet','From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean\'s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.','uploads/main_image-1676364887479.jpg',''),(18,2,18,'Brown Perfume','Royal_Mirage Sport Brown Perfume for Men & Women - 120ml','uploads/main_image-1676364979636.jpg',''),(19,2,19,'cotton pullover embroidery sweatshirt women','breast-button-belt-sur-collar-winter-coat-women','uploads/main_image-1676365347699.jpg',''),(20,2,20,'Ultraboost Running Shoe','With its ultra-light, uber-responsive magic foam and a carbon fiber plate that feels like it’s propelling you forward, the Running Shoe is ready to push you to victories both large and small','uploads/main_image-1676365368469.jpg',''),(21,2,21,'Freerun Running Shoe','The Freerun Men\'s Running Shoe is built for record-breaking speed. The Flyknit upper delivers ultra-lightweight support that fits like a glove.','uploads/main_image-1676365397967.jpg',''),(22,2,22,'Pureboost Running Shoe','\r\nDescription\r\nBuilt to handle curbs, corners and uneven sidewalks, these natural running shoes have an expanded landing zone and a heel plate for added stability. A lightweight and stretchy knit upper supports your native stride.','uploads/main_image-1676365424496.jpg','');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_item`
--

DROP TABLE IF EXISTS `product_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `SKU` varchar(255) DEFAULT NULL,
  `stock_qty` int NOT NULL DEFAULT '0',
  `price` decimal(10,0) NOT NULL,
  `color` varchar(20) NOT NULL,
  `size` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_item_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_item`
--

LOCK TABLES `product_item` WRITE;
/*!40000 ALTER TABLE `product_item` DISABLE KEYS */;
INSERT INTO `product_item` VALUES (1,1,'#FFFF00-M',3,600,'#FFFF00','M'),(2,1,'#FF0000-S',23,499,'#FF0000','S'),(3,1,'#FF0000-L',33,299,'#FF0000','L'),(4,2,'#008000-M',23,1039,'#008000','M'),(5,2,'#0000FF-XL',44,1200,'#0000FF','XL'),(6,3,'#0000FF-M',44,900,'#0000FF','M'),(7,3,'#0000FF-M',41,300,'#0000FF','M'),(8,4,'#800080-M',31,339,'#800080','M'),(9,4,'#FFA500-M',32,399,'#FFA500','M'),(10,5,'#FFFF00-M',10,33,'#FFFF00','M'),(11,5,'#008000-S',11,900,'#008000','S'),(12,6,'#FFFF00-M',13,229,'#FFFF00','M'),(13,6,'#FFFF00-M',11,390,'#FFFF00','M'),(14,7,'#FFFF00-L',13,330,'#FFFF00','L'),(15,10,'#FFFF00-S',13,330,'#FFFF00','S'),(16,8,'#FFFF00-M',30,1000,'#FFFF00','M'),(17,7,'#FFFF00-M',300,1230,'#FFFF00','M'),(18,9,'#FF0000-M',13,300,'#FF0000','M'),(19,8,'#FFFF00-M',13,779,'#FFFF00','M'),(20,9,'#0000FF-L',31,480,'#0000FF','L'),(21,9,'#800080-L',33,480,'#800080','L'),(22,10,'#FFFF00-L',30,479,'#FFFF00','L'),(23,10,'#800080-M',30,479,'#800080','M'),(24,11,'#FFFF00-L',33,490,'#FFFF00','L'),(25,11,'#008000-XL',33,490,'#008000','XL'),(26,12,'#0000FF-M',14,940,'#0000FF','M'),(27,12,'#008000-S',14,940,'#008000','S'),(28,13,'#FFFF00-M',13,900,'#FFFF00','M'),(29,13,'#800080-M',13,900,'#800080','M'),(30,13,'#FFA500-M',13,900,'#FFA500','M'),(31,14,'#0000FF-M',33,940,'#0000FF','M'),(32,14,'#800080-M',33,940,'#800080','M'),(33,14,'#FFA500-M',33,940,'#FFA500','M'),(34,15,'#800080-M',4,490,'#800080','M'),(35,15,'#008000-M',4,490,'#008000','M'),(36,15,'#008000-S',4,490,'#008000','S'),(37,16,'#FF0000-M',44,590,'#FF0000','M'),(38,16,'#0000FF-M',44,590,'#0000FF','M'),(39,16,'#FFA500-M',44,590,'#FFA500','M'),(40,16,'#000000-M',44,590,'#000000','M'),(41,18,'#0000FF-M',4,490,'#0000FF','M'),(42,18,'#800080-M',4,490,'#800080','M'),(43,18,'#800080-XL',4,490,'#800080','XL'),(44,19,'#0000FF-L',14,330,'#0000FF','L'),(45,19,'#FF0000-L',14,330,'#FF0000','L'),(46,19,'#FF0000-XL',14,330,'#FF0000','XL'),(47,20,'#0000FF-XL',44,1200,'#0000FF','XL'),(48,20,'#000000-XL',44,1200,'#000000','XL'),(49,20,'#000000-S',44,1200,'#000000','S'),(50,20,'#000000-M',44,1200,'#000000','M'),(51,21,'#FFFF00-M',49,200,'#FFFF00','M'),(52,21,'#FF0000-M',49,200,'#FF0000','M'),(53,21,'#FF0000-XL',49,200,'#FF0000','XL'),(54,22,'#FFFF00-M',33,499,'#FFFF00','M'),(55,22,'#0000FF-M',33,499,'#0000FF','M'),(56,22,'#0000FF-XL',33,499,'#0000FF','XL');
/*!40000 ALTER TABLE `product_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_category`
--

DROP TABLE IF EXISTS `sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `texture` varchar(255) NOT NULL,
  `wash` varchar(255) NOT NULL,
  `place` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL,
  `story` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_category`
--

LOCK TABLES `sub_category` WRITE;
/*!40000 ALTER TABLE `sub_category` DISABLE KEYS */;
INSERT INTO `sub_category` VALUES (1,'棉料','可水洗','韓國','全店，超商滿$999免運費  全店，宅配滿$2000免運費',' 小編實穿報告：175/65穿XL(合身)\r\n▶︎ 寬鬆挑大一號， 更合身挑小一號\r\n▶︎此款褲頭為鬆緊\r\n▶︎ 如何挑選尺寸、測量長度看這邊\r\n▶︎ 此為預購商品，需約7個工作天出貨'),(2,'棉、聚脂纖維\"','可水洗','中國','實品顏色以單品照為主','你絕對不能錯過的超值商品'),(3,'冰絲','可水洗','韓國','正品','超值優惠'),(4,'metal','no','china','cool','cool'),(5,'','','','',''),(6,'','','','',''),(7,'','','','',''),(8,'','','','',''),(9,'','','','',''),(10,'','','','',''),(11,'','','','',''),(12,'','','','',''),(13,'','','','',''),(14,'','','','',''),(15,'','','','',''),(16,'','','','',''),(17,'','','','',''),(18,'','','','',''),(19,'','','','',''),(20,'','','','',''),(21,'','','','',''),(22,'','','','','');
/*!40000 ALTER TABLE `sub_category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-14 17:19:19
