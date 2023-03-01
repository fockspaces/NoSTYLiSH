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
-- Table structure for table `campaign`
--

DROP TABLE IF EXISTS `campaign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campaign` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `picture` text NOT NULL,
  `story` text NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campaign`
--

LOCK TABLES `campaign` WRITE;
/*!40000 ALTER TABLE `campaign` DISABLE KEYS */;
INSERT INTO `campaign` VALUES (1,1,'picture-f618e58b-6be1-4464-85db-8c1d2b14c3d8.jpg','haha\r\n','2023-02-01','2023-03-31'),(2,2,'picture-b76aaac5-9a3b-4580-8257-de343f3a84f6.jpg','haha\r\n','2023-02-01','2023-04-30'),(4,3,'picture-91f81b16-d19a-4253-b1b2-3a1432cfb7f6.jpg','haha\r\n','2023-02-01','2023-05-31'),(5,1,'picture1.jpg','Campaign 1','2021-01-01','2021-01-31'),(6,2,'picture2.jpg','Campaign 2','2021-02-01','2021-02-28'),(7,3,'picture3.jpg','Campaign 3','2021-03-01','2021-03-31'),(8,2,'picture-308c6520-d19d-4deb-8a61-cf7bb4bcc16c.jpg','haha','2023-02-20','2023-03-10');
/*!40000 ALTER TABLE `campaign` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `color` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color_code` varchar(20) NOT NULL,
  `color_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'B30000','Dark_red'),(2,'CCB300','Yellow'),(3,'003399','Blue'),(4,'006600','Green'),(5,'660066','Purple'),(6,'FF8C00','Orange'),(7,'333333','Black');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_lists`
--

DROP TABLE IF EXISTS `item_lists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_lists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_item_id` int NOT NULL,
  `qty` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_lists`
--

LOCK TABLES `item_lists` WRITE;
/*!40000 ALTER TABLE `item_lists` DISABLE KEYS */;
INSERT INTO `item_lists` VALUES (1,1,1,1),(2,1,5,5),(3,2,1,1),(4,2,59,5),(5,3,1,1),(6,3,59,5),(7,4,1,1),(8,4,59,5),(9,5,1,1),(10,5,59,5),(11,7,1,1),(12,7,59,5),(13,10,77,1),(14,10,78,5),(15,11,77,1),(16,11,78,5),(17,12,77,1),(18,12,78,5),(19,13,77,1),(20,13,78,5),(21,14,77,1),(22,14,78,5),(23,15,77,1),(24,15,78,5),(25,16,77,1),(26,16,78,5),(27,17,77,1),(28,17,78,5),(29,18,77,3),(30,18,78,4),(31,19,77,3),(32,19,78,4),(33,20,77,3),(34,20,78,4),(35,24,79,1),(36,25,79,1),(37,25,82,2),(38,25,81,1),(39,26,87,1),(40,26,89,1),(41,26,87,1),(42,27,87,1),(43,27,89,1),(44,27,87,1);
/*!40000 ALTER TABLE `item_lists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shipping` varchar(255) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  `freight` decimal(10,2) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `recipient_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT (now()),
  `payment` varchar(255) NOT NULL,
  `status` enum('paid','unpaid') NOT NULL DEFAULT 'unpaid',
  PRIMARY KEY (`id`),
  KEY `recipient_id` (`recipient_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`recipient_id`) REFERENCES `recipients` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'delivery',1234.00,14.00,1300.00,1,'2023-02-21 08:51:26','credit_card','paid'),(2,'delivery',1234.00,14.00,1300.00,2,'2023-02-21 10:22:02','credit_card','paid'),(3,'delivery',1234.00,14.00,1300.00,3,'2023-02-21 10:23:03','credit_card','paid'),(4,'delivery',1234.00,14.00,1300.00,4,'2023-02-21 10:25:59','credit_card','paid'),(5,'delivery',1234.00,14.00,1300.00,5,'2023-02-21 11:30:25','credit_card','paid'),(6,'delivery',1234.00,14.00,1300.00,6,'2023-02-21 12:07:44','credit_card','unpaid'),(7,'delivery',1234.00,14.00,1300.00,7,'2023-02-21 12:08:02','credit_card','paid'),(8,'delivery',1234.00,14.00,1300.00,8,'2023-02-23 01:21:09','credit_card','unpaid'),(9,'delivery',1234.00,14.00,1300.00,9,'2023-02-23 07:04:51','credit_card','unpaid'),(10,'delivery',1234.00,14.00,1300.00,10,'2023-02-23 07:06:41','credit_card','unpaid'),(11,'delivery',1234.00,14.00,1300.00,11,'2023-02-23 07:07:16','credit_card','paid'),(12,'delivery',1234.00,14.00,1300.00,12,'2023-02-23 07:07:45','credit_card','unpaid'),(13,'delivery',1234.00,14.00,1300.00,13,'2023-02-23 07:08:08','credit_card','paid'),(14,'delivery',1234.00,14.00,1300.00,14,'2023-02-23 07:30:36','credit_card','paid'),(15,'delivery',1234.00,14.00,1300.00,15,'2023-02-23 07:31:03','credit_card','paid'),(16,'delivery',1234.00,14.00,1300.00,16,'2023-02-23 07:31:11','credit_card','paid'),(17,'delivery',1234.00,14.00,1300.00,17,'2023-02-23 07:31:15','credit_card','paid'),(18,'delivery',905.00,5.00,910.00,18,'2023-02-27 05:06:34','credit_card','paid'),(19,'delivery',905.00,5.00,910.00,19,'2023-02-27 05:07:10','credit_card','paid'),(20,'delivery',905.00,5.00,910.00,20,'2023-02-27 05:19:22','credit_card','paid'),(21,'delivery',-5.00,5.00,0.00,21,'2023-02-27 05:20:37','credit_card','unpaid'),(22,'delivery',-5.00,5.00,0.00,22,'2023-02-27 05:20:40','credit_card','unpaid'),(23,'delivery',-5.00,5.00,0.00,23,'2023-02-27 05:20:44','credit_card','unpaid'),(24,'delivery',145.00,5.00,150.00,24,'2023-02-27 05:23:52','credit_card','paid'),(25,'delivery',595.00,5.00,600.00,25,'2023-02-27 06:02:30','credit_card','paid'),(26,'delivery',695.00,5.00,700.00,26,'2023-02-27 08:47:54','credit_card','paid'),(27,'delivery',695.00,5.00,700.00,27,'2023-02-27 08:47:54','credit_card','paid');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,1,1,'ARLINGTON 內刷毛休閒連帽上衣 4色 1024','正面英文刻字印花\r\n柔軟舒適的棉料製成\r\n磨毛內裏增加保暖度\r\n微寬鬆落肩版型\r\n日常必備的基本休閒單品','main_image-1676362172582.jpg','[\"1_1.jpeg\", \"1_2.jpeg\"]'),(2,1,2,'厚實毛呢格子外套','高抗寒素材選用，保暖也時尚有型','main_image-1676362438518.jpg','[\"2_1.webp\", \"2_2.webp\"]'),(3,1,3,'韓版薄款冰絲西裝褲 / 3色-BD3962','全店，超商滿$999免運費\r\n\r\n全店，宅配滿$2000免運費','main_image-1676362531386.jpg','[\"3_1.webp\", \"3_2.webp\"]'),(4,3,4,'iPhone 9','An apple mobile which is nothing like apple','main_image-1676362954837.jpg','[\"4_1.jpg\", \"4_2.jpeg\"]'),(11,2,11,'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops','Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday','main_image-1676364557209.jpg','[\"11_1.jpg\", \"11_2.jpg\"]'),(12,2,12,'Mens Casual Premium Slim Fit T-Shirts ','Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.','main_image-1676364610796.jpg','[\"12_1.jpg\", \"12_2.jpg\"]'),(13,2,13,'BIYLACLESEN Women\'s 3-in-1 Snowboard Jacket Winter Coats','Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates','main_image-1676364640542.jpg','[\"13_1.jpg\", \"13_2.jpg\"]'),(14,2,14,'Rain Jacket Women Windbreaker Striped Climbing Raincoats','Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn\'t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.','main_image-1676364666005.jpg','[\"14_1.jpg\", \"14_2.jpg\"]'),(15,2,15,'MBJ Women\'s Solid Short Sleeve Boat Neck V','95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem','main_image-1676364719098.jpg','[\"15_1.jpg\", \"15_2.jpg\"]'),(16,2,16,'DANVOUY Womens T Shirt Casual Cotton Short','95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.','main_image-1676364751262.jpg','[\"16_1.jpg\", \"16_2.jpg\"]'),(17,3,17,'John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet','From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean\'s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.','main_image-1676364887479.jpg','[\"17_1.webp\", \"17_2.webp\"]'),(18,2,18,'Brown Perfume','Royal_Mirage Sport Brown Perfume for Men & Women - 120ml','main_image-1676364979636.jpg','[\"18_1.jpg\", \"18_2.jpg\"]'),(20,2,20,'Ultraboost Running Shoe','With its ultra-light, uber-responsive magic foam and a carbon fiber plate that feels like it’s propelling you forward, the Running Shoe is ready to push you to victories both large and small','main_image-1676365368469.jpg','[\"20_1.jpg\", \"20_2.jpg\"]'),(21,2,21,'Freerun Running Shoe','The Freerun Men\'s Running Shoe is built for record-breaking speed. The Flyknit upper delivers ultra-lightweight support that fits like a glove.','main_image-1676365397967.jpg','[\"21_1.jpg\", \"21_2.jpg\"]'),(22,2,22,'Pureboost Running Shoe','\r\nDescription\r\nBuilt to handle curbs, corners and uneven sidewalks, these natural running shoes have an expanded landing zone and a heel plate for added stability. A lightweight and stretchy knit upper supports your native stride.','main_image-1676365424496.jpg','[\"22_1.webp\", \"22_2.webp\"]'),(45,2,45,'niko and女運動風腰部緊身設計寬袖長袖上衣-三色-188774','from niko and...','main_image-3e17184d-2d72-45cb-bc4b-82366c30b595.jfif','[\"45_1.webp\", \"45_2.webp\"]'),(46,2,46,'niko and女復古英文印花七分袖T恤上衣-四色-189071','niko and女復古英文印花七分袖T恤上衣-四色-189071\r\n','main_image-1260a608-8261-468d-b00c-94fe8775fc32.jfif','[\"46_1.webp\", \"46_2.jpg\"]'),(47,2,47,'niko and女素色條紋下擺綁繩七分袖襯衫上衣-四色-173470','niko and女素色條紋下擺綁繩七分袖襯衫上衣-四色-173470\r\n','main_image-193be850-d830-40b3-ab03-add4133c1657.jfif','[\"47_1.jpg\", \"47_2.jpg\"]'),(48,1,48,'niko and男古著感刺繡半領壓扣長袖上衣-四色-176984','niko and男古著感刺繡半領壓扣長袖上衣-四色-176984\r\n','main_image-3dac762c-ab45-4d0f-aa97-a3593f720b5f.jfif','[\"48_1.jpg\", \"48_2.jpg\"]'),(49,1,49,'niko and男立領半拉鍊學院風拼色長袖上衣-二色-180032','niko and男立領半拉鍊學院風拼色長袖上衣-二色-180032\r\n','main_image-34058e97-d4f7-4b06-9b5d-e508811abcff.jfif','[\"49_1.jpg\", \"49_2.jpg\"]'),(50,2,50,'niko and女個性花紋嫘縈不易皺寬鬆長袖襯衫上衣-三色-188717','niko and女個性花紋嫘縈不易皺寬鬆長袖襯衫上衣-三色-188717\r\n','main_image-c667d872-10ea-4e31-a0b9-1c4021aaaeae.jfif','[\"50_1.jpg\", \"50_2.jpg\"]'),(51,2,51,'niko and女古著感緹花織紋可機洗針織罩衫長袖上衣-二色-190827','niko and女古著感緹花織紋可機洗針織罩衫長袖上衣-二色-190827','main_image-52e0baff-1aa3-4c0b-b569-ed9eee605a75.jfif','[\"51_1.jpg\", \"51_2.jpg\"]'),(52,1,52,'niko and男品牌NMR系列簡約休閒長袖上衣-二色-178032','niko and男品牌NMR系列簡約休閒長袖上衣-二色-178032\r\n','main_image-3ab99a5a-4409-4790-a114-ecbcfc74c825.jfif','[\"52_1.jpg\", \"52_2.jpg\"]'),(53,1,53,'niko and男品牌NMR系列復古印花長袖上衣-三色-178014','niko and男品牌NMR系列復古印花長袖上衣-三色-178014\r\n','main_image-c035fdc5-757e-4e13-9785-38431f20ab2c.jfif','[\"53_1.jpg\", \"53_2.jpg\"]'),(54,2,54,'【南風北巷】〔3色〕秋冬女裝新款韓版INS韓系格子短版毛衣','風吹北巷南街傷，花落南國北亭涼，故事很多未來能有多長。一物淺遇，便會深藏；一旦試穿，就會心動；一處精緻，足以動人。\r\n\r\n高品質，不是那種垃圾材料，因為我們知道沒有什麼比您的健康更重要。','main_image-61b854a6-c6ae-4794-93bb-ef7587f1b9da.jfif','[\"other_images-1d8061f1-39c8-4633-9b3a-7f1d1c34a8b8.jfif\",\"other_images-ef5fa78a-f081-416e-a15b-c023814e6960.png\"]');
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
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_item`
--

LOCK TABLES `product_item` WRITE;
/*!40000 ALTER TABLE `product_item` DISABLE KEYS */;
INSERT INTO `product_item` VALUES (77,1,'1-M',32,130,'1','M'),(78,1,'2-L',32,130,'2','L'),(79,2,'1-M',32,150,'1','M'),(80,2,'4-L',32,150,'4','L'),(81,3,'2-S',132,150,'2','S'),(82,3,'4-XL',132,150,'4','XL'),(83,4,'4-S',41,200,'4','S'),(84,4,'5-L',41,200,'5','L'),(85,11,'1-L',114,500,'1','L'),(86,11,'4-S',114,500,'4','S'),(87,12,'2-M',14,250,'2','M'),(88,12,'5-L',14,250,'5','L'),(89,13,'2-L',14,200,'2','L'),(90,13,'5-S',14,200,'5','S'),(91,14,'5-S',14,124,'5','S'),(92,14,'7-S',14,124,'7','S'),(93,17,'3-M',14,14,'3','M'),(94,15,'2-M',123,400,'2','M'),(95,15,'1-M',23,400,'1','M'),(96,18,'2-M',241,500,'2','M'),(97,18,'2-L',241,500,'2','L'),(98,20,'3-M',124,112,'3','M'),(99,20,'5-M',124,112,'5','M'),(100,21,'2-M',13,400,'2','M'),(101,21,'5-M',13,400,'5','M'),(102,21,'7-M',13,400,'7','M'),(103,22,'6-L',13,233,'6','L'),(104,22,'3-L',13,233,'3','L'),(105,45,'4-L',23,411,'4','L'),(106,45,'2-L',23,411,'2','L'),(107,46,'4-M',14,244,'4','M'),(108,46,'2-M',14,244,'2','M'),(109,47,'4-M',124,1440,'4','M'),(110,47,'6-M',124,1440,'6','M'),(111,48,'2-L',14,400,'2','L'),(112,48,'6-L',14,400,'6','L'),(113,49,'3-M',124,214,'3','M'),(114,49,'6-M',124,214,'6','M'),(115,50,'3-L',214,40,'3','L'),(116,50,'2-L',214,40,'2','L'),(117,51,'2-XL',41,440,'2','XL'),(118,51,'4-XL',41,440,'4','XL'),(119,52,'5-M',412,400,'5','M'),(120,52,'3-M',412,400,'3','M'),(121,53,'2-M',52,400,'2','M'),(122,53,'7-S',52,400,'7','S'),(124,54,'1-S',23,500,'1','S'),(125,54,'5-S',23,500,'5','S'),(126,54,'1-XL',23,500,'1','XL');
/*!40000 ALTER TABLE `product_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipients`
--

DROP TABLE IF EXISTS `recipients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `delivery_time` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipients`
--

LOCK TABLES `recipients` WRITE;
/*!40000 ALTER TABLE `recipients` DISABLE KEYS */;
INSERT INTO `recipients` VALUES (1,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(2,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(3,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(4,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(5,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(6,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(7,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(8,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(9,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(10,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(11,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(12,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(13,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(14,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(15,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(16,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(17,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(18,'002','','002@gmail.com','',''),(19,'002','','002@gmail.com','',''),(20,'002','','002@gmail.com','',''),(21,'002','','002@gmail.com','',''),(22,'002','','002@gmail.com','',''),(23,'002','','002@gmail.com','',''),(24,'002','','002@gmail.com','',''),(25,'002','','002@gmail.com','',''),(26,'002','','002@gmail.com','',''),(27,'002','','002@gmail.com','','');
/*!40000 ALTER TABLE `recipients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_category`
--

LOCK TABLES `sub_category` WRITE;
/*!40000 ALTER TABLE `sub_category` DISABLE KEYS */;
INSERT INTO `sub_category` VALUES (1,'棉料','可水洗','韓國','全店，超商滿$999免運費  全店，宅配滿$2000免運費',' 小編實穿報告：175/65穿XL(合身)\r\n▶︎ 寬鬆挑大一號， 更合身挑小一號\r\n▶︎此款褲頭為鬆緊\r\n▶︎ 如何挑選尺寸、測量長度看這邊\r\n▶︎ 此為預購商品，需約7個工作天出貨'),(2,'棉、聚脂纖維\"','可水洗','中國','實品顏色以單品照為主','你絕對不能錯過的超值商品'),(3,'冰絲','可水洗','韓國','正品','超值優惠'),(4,'metal','no','china','cool','cool'),(5,'','','','',''),(6,'','','','',''),(7,'','','','',''),(8,'','','','',''),(9,'','','','',''),(10,'','','','',''),(11,'','','','',''),(12,'','','','',''),(13,'','','','',''),(14,'','','','',''),(15,'','','','',''),(16,'','','','',''),(17,'','','','',''),(18,'','','','',''),(19,'','','','',''),(20,'','','','',''),(21,'','','','',''),(22,'','','','',''),(23,'metal','no','china','no','no'),(24,'ewq','qwewq','ewq','qwe','ew'),(25,'ads','asd','asd','asd','asd'),(26,'das','asd','asd','asd','asd'),(27,'213','123','213','23','231'),(28,'','','','',''),(29,'r','','','',''),(30,'231','','','',''),(31,'123','213213','','',''),(32,'','','','',''),(33,'','','','',''),(34,'','','','',''),(35,'','','','',''),(36,'123','','','',''),(37,'','','','',''),(38,'','','','',''),(39,'','','','',''),(40,'','','','',''),(41,'','','','',''),(42,'','','','',''),(43,'','','','',''),(44,'','','','',''),(45,'','','','',''),(46,'','','','',''),(47,'','','','',''),(48,'','','','',''),(49,'','','','',''),(50,'','','','',''),(51,'','','','',''),(52,'','','','',''),(53,'','','','',''),(54,'針織','方格/格子','中國','一般商品／聯名款／其他','均碼   衣長38   胸圍114   肩寬62   袖長57\r\n\r\n溫馨提示‘版型特殊 尺寸純手工測量，存在一定誤差是正常的’\r\n');
/*!40000 ALTER TABLE `sub_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `provider` varchar(255) NOT NULL,
  `picture` text,
  `role_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'admin','admin@gmail.com','$2b$10$d2ebDaDA8nHvEQAfOW29qe6Wmj60mNEtjrFmk8q/LS3ANxiu8xwni','native','',1),(4,'user','user@gmail.com','$2b$10$/G.pZQ6BUYaaRQhAUaGACeX7PA5GyLgVkiex.XYp33ZaK2N7BJnWK','native','',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-01 11:15:39
