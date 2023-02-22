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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campaign`
--

LOCK TABLES `campaign` WRITE;
/*!40000 ALTER TABLE `campaign` DISABLE KEYS */;
INSERT INTO `campaign` VALUES (1,1,'picture-f618e58b-6be1-4464-85db-8c1d2b14c3d8.jpg','haha\r\n'),(2,2,'picture-b76aaac5-9a3b-4580-8257-de343f3a84f6.jpg','haha\r\n'),(4,3,'picture-91f81b16-d19a-4253-b1b2-3a1432cfb7f6.jpg','haha\r\n');
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_lists`
--

LOCK TABLES `item_lists` WRITE;
/*!40000 ALTER TABLE `item_lists` DISABLE KEYS */;
INSERT INTO `item_lists` VALUES (1,1,1,1),(2,1,5,5),(3,2,1,1),(4,2,59,5),(5,3,1,1),(6,3,59,5),(7,4,1,1),(8,4,59,5),(9,5,1,1),(10,5,59,5),(11,7,1,1),(12,7,59,5);
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'delivery',1234.00,14.00,1300.00,1,'2023-02-21 08:51:26','credit_card','paid'),(2,'delivery',1234.00,14.00,1300.00,2,'2023-02-21 10:22:02','credit_card','paid'),(3,'delivery',1234.00,14.00,1300.00,3,'2023-02-21 10:23:03','credit_card','paid'),(4,'delivery',1234.00,14.00,1300.00,4,'2023-02-21 10:25:59','credit_card','paid'),(5,'delivery',1234.00,14.00,1300.00,5,'2023-02-21 11:30:25','credit_card','paid'),(6,'delivery',1234.00,14.00,1300.00,6,'2023-02-21 12:07:44','credit_card','unpaid'),(7,'delivery',1234.00,14.00,1300.00,7,'2023-02-21 12:08:02','credit_card','paid');
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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,1,1,'ARLINGTON 內刷毛休閒連帽上衣 4色 1024','正面英文刻字印花\r\n柔軟舒適的棉料製成\r\n磨毛內裏增加保暖度\r\n微寬鬆落肩版型\r\n日常必備的基本休閒單品','main_image-1676362172582.jpg',''),(2,1,2,'厚實毛呢格子外套','高抗寒素材選用，保暖也時尚有型','main_image-1676362438518.jpg',''),(3,1,3,'韓版薄款冰絲西裝褲 / 3色-BD3962','全店，超商滿$999免運費\r\n\r\n全店，宅配滿$2000免運費','main_image-1676362531386.jpg',''),(4,3,4,'iPhone 9','An apple mobile which is nothing like apple','main_image-1676362954837.jpg',''),(5,2,5,'Casual Red Dress','SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...','main_image-1676363095350.jpg',''),(6,2,6,'Red Pant','a red pant','main_image-1676363095350.jpg',''),(7,2,7,'Skinny Jeans','a Skinny Jeans','main_image-1676363095350.jpg',''),(8,2,8,'Relaxed Fit Jeans','a Relaxed Fit Jeans','main_image-1676363095350.jpg',''),(9,2,9,'Pumps','a Pumps','main_image-1676363095350.jpg',''),(10,2,10,'rouser Short','a rouser Short','main_image-1676363095350.jpg',''),(11,2,11,'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops','Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday','main_image-1676364557209.jpg',''),(12,2,12,'Mens Casual Premium Slim Fit T-Shirts ','Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.','main_image-1676364610796.jpg',''),(13,2,13,'BIYLACLESEN Women\'s 3-in-1 Snowboard Jacket Winter Coats','Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates','main_image-1676364640542.jpg',''),(14,2,14,'Rain Jacket Women Windbreaker Striped Climbing Raincoats','Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn\'t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.','main_image-1676364666005.jpg',''),(15,2,15,'MBJ Women\'s Solid Short Sleeve Boat Neck V','95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem','main_image-1676364719098.jpg',''),(16,2,16,'DANVOUY Womens T Shirt Casual Cotton Short','95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.','main_image-1676364751262.jpg',''),(17,3,17,'John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet','From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean\'s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.','main_image-1676364887479.jpg',''),(18,2,18,'Brown Perfume','Royal_Mirage Sport Brown Perfume for Men & Women - 120ml','main_image-1676364979636.jpg',''),(19,2,19,'cotton pullover embroidery sweatshirt women','breast-button-belt-sur-collar-winter-coat-women','main_image-1676365347699.jpg',''),(20,2,20,'Ultraboost Running Shoe','With its ultra-light, uber-responsive magic foam and a carbon fiber plate that feels like it’s propelling you forward, the Running Shoe is ready to push you to victories both large and small','main_image-1676365368469.jpg',''),(21,2,21,'Freerun Running Shoe','The Freerun Men\'s Running Shoe is built for record-breaking speed. The Flyknit upper delivers ultra-lightweight support that fits like a glove.','main_image-1676365397967.jpg',''),(22,2,22,'Pureboost Running Shoe','\r\nDescription\r\nBuilt to handle curbs, corners and uneven sidewalks, these natural running shoes have an expanded landing zone and a heel plate for added stability. A lightweight and stretchy knit upper supports your native stride.','main_image-1676365424496.jpg',''),(23,3,23,'筆記型電腦MacBook','使用macOS運行，可以與iOS相容','main_image-1676377207193.jpg','[\"uploads/other_images-1676377207194.jpg\",\"uploads/other_images-1676377207194.jpg\",\"uploads/other_images-1676377207194.jpg\"]'),(24,3,24,'筆記型電腦MacBook','maxlength=\"3\"','main_image-1676377607271.jpg','[\"uploads/other_images-1676377607272.jpg\",\"uploads/other_images-1676377607274.jpg\",\"uploads/other_images-1676377607274.jpg\"]'),(25,3,25,'test','test','main_image-1676378130833.jpg','[\"uploads/other_images-1676378130836.jpg\"]'),(26,2,26,'test','rrs','main_image-1676457059076.jpg','[\"uploads/other_images-1676457059077.jpg\",\"uploads/other_images-1676457059077.jpg\",\"uploads/other_images-1676457059078.jpg\",\"uploads/other_images-1676457059082.jpg\",\"uploads/other_images-1676457059084.jpg\",\"uploads/other_images-1676457059084.jpg\"]'),(27,2,27,'123','213','main_image-1676457059076.jpg',''),(28,1,28,'213','23','main_image-1676457526707.jpg','[\"uploads/other_images-1676457526708.jpg\",\"uploads/other_images-1676457526708.jpg\",\"uploads/other_images-1676457526708.jpg\",\"uploads/other_images-1676457526713.jpg\",\"uploads/other_images-1676457526715.jpg\",\"uploads/other_images-1676457526718.jpg\",\"uploads/other_images-1676457526719.jpg\",\"uploads/other_images-1676457526729.jpg\"]'),(29,2,29,'test','test','main_image-1676463755100.jpg','[\"uploads/other_images-1676463755101.jpg\",\"uploads/other_images-1676463755101.jpg\",\"uploads/other_images-1676463755102.jpg\",\"uploads/other_images-1676463755105.jpg\",\"uploads/other_images-1676463755107.jpg\"]'),(30,1,30,'eqw','231','main_image-1676463878852.jpg','[\"uploads/other_images-1676463878852.jpg\",\"uploads/other_images-1676463878853.jpg\",\"uploads/other_images-1676463878855.jpg\",\"uploads/other_images-1676463878857.jpg\"]'),(31,1,31,'123','312','main_image-1676467634686.jpg','[\"uploads/other_images-1676467634687.jpg\",\"uploads/other_images-1676467634690.jpg\",\"uploads/other_images-1676467634690.jpg\",\"uploads/other_images-1676467634690.jpg\",\"uploads/other_images-1676467634697.jpg\",\"uploads/other_images-1676467634698.jpg\"]'),(32,1,32,'21','3213','main_image-1676468108834.jpg','[\"http://localhost/images/other_images-1676468108835.jpg\",\"http://localhost/images/other_images-1676468108836.jpg\",\"http://localhost/images/other_images-1676468108836.jpg\"]'),(33,1,33,'wqe','qwe','main_image-a6b07026-ad1d-4e7b-a749-abbd84edfb7a.png.jpg','[\"http://localhost/images/other_images-807a1c81-f826-4ad1-8041-aa4d51571116.png.jpg\",\"http://localhost/images/other_images-e372916a-42da-4121-8da1-a207a2ba08d7.jpg.jpg\",\"http://localhost/images/other_images-b98d7c6d-530a-4039-b80f-e8b111a94c9a.jpg.jpg\",\"http://localhost/images/other_images-1139dc0f-1f14-47b2-8baa-126636f71331.jpg.jpg\",\"http://localhost/images/other_images-cd31163b-1abc-47de-a7f1-8fbb34abb876.jpg.jpg\"]'),(34,2,34,'qwe','wqe','main_image-bbafb407-4c16-4c76-b20a-faee684f834c.jpg','[\"http://localhost/images/other_images-fba0d3c0-8877-4a7b-8f24-a22a9a913909.jpg\",\"http://localhost/images/other_images-6e30ded9-1e79-44c8-9336-e7ec4aa2dd55.jpg\",\"http://localhost/images/other_images-932226ed-9dd7-4dc3-b73b-dd31244f2ed0.jpg\"]'),(35,2,35,'23','213','main_image-b96bd1b2-fedc-4f70-9c5e-119142e57f8c.jpg',''),(36,2,36,'123','213','main_image-267c1218-75a9-498c-a79a-a535f59f2c12.jfif','[\"http://localhost/images/other_images-ff6ec97b-30a1-49a6-aa46-202b6522a12d.jfif\",\"http://localhost/images/other_images-c6d1db3e-98f5-4169-9414-c6dc7b8439ac.png\",\"http://localhost/images/other_images-6f2a70e0-4913-40e4-9a85-a23d4e33f89f.jpg\",\"http://localhost/images/other_images-e3f646ee-1f78-48fa-9bed-6775b853fc6e.jpg\"]'),(37,1,37,'123','213','main_image-8ed5066b-5297-4aae-8eab-2edf44fa58c3.jpg','[\"http://localhost/images/other_images-ec01981e-c562-425e-ae6e-d0d28bca6b18.jpg\",\"http://localhost/images/other_images-68ac8956-118f-4143-a0e7-8f9e2787719f.jpg\"]'),(38,1,38,'213','123123','main_image-c09bcb25-ffad-45bb-86dd-0a2940909ab0.jfif','[\"http://localhost/images/other_images-6e979026-8697-4466-a788-fcee9237b1a0.jpg\",\"http://localhost/images/other_images-f4f29255-a1d1-4722-9205-d1719da5f94e.jpg\"]'),(39,2,39,'213','123213','main_image-ff281629-50da-4ccd-af3d-b9f3c11bf2a0.jfif','[\"http://localhost/images/other_images-25597b46-6660-4d1c-ac6d-a781ae5c7a91.jfif\",\"http://localhost/images/other_images-ce33d65c-6d7e-4e85-9e5e-8a4ce2ba64a8.png\",\"http://localhost/images/other_images-d0f2baae-9490-4c1b-9ee9-48aca1ace8fb.jpg\",\"http://localhost/images/other_images-24eb15be-7ec7-4a25-912f-0397ab8ebcf8.jpg\",\"http://localhost/images/other_images-f51d24f9-c97b-4afe-8dcb-348b3f54af2f.jpg\"]'),(40,2,40,'213','213','main_image-e248b317-55d8-48ab-8b54-b1875cd232b6.jfif','[\"http://localhost/images/other_images-38a8a2b3-1f47-4205-a5ba-5b990eb45ecb.png\"]'),(41,1,41,'123','123','main_image-02fc30cb-f265-4283-9563-493becf441c2.jfif','[\"http://localhost/images/other_images-b4fea49d-7408-4193-85fe-4f98eaaada64.png\",\"http://localhost/images/other_images-37483417-89ee-47e9-a520-e43d1596584e.jfif\",\"http://localhost/images/other_images-43389396-492b-460b-9163-3aed1ac4a591.png\",\"http://localhost/images/other_images-95b76600-8199-4863-bbbb-3ba1a3b499e0.jpg\"]'),(42,1,42,'asd','asd','main_image-c634a954-ceee-406f-879a-81c95af40510.png','[\"http://localhost/images/other_images-79fe29e0-4a1e-4473-b29d-0abaa2027cc8.png\",\"http://localhost/images/other_images-3e914c81-a1ea-4a81-b2c3-d433e15c6197.jpg\"]'),(43,1,43,'3333','3321','main_image-16464c63-c420-4ad9-a693-6f2bb07263b4.jfif','[\"other_images-a9a09aec-9bb3-4459-87b0-509ae86653b9.jpg\",\"other_images-dc0b121c-f2bb-4df6-89f4-2d4671e22fe5.jpg\"]'),(44,1,44,'333','333','main_image-9ea956ee-faf0-4bc3-86e4-5b7cf69984ae.jpg','[\"other_images-049ffa69-740d-432b-8f13-15af8fb9ab96.png\",\"other_images-5f1f36f7-5f87-4006-be70-ebf4a8e72dac.jpg\",\"other_images-e872ff33-099e-4d77-a8e7-a93b8ba175a2.jpg\"]');
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
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_item`
--

LOCK TABLES `product_item` WRITE;
/*!40000 ALTER TABLE `product_item` DISABLE KEYS */;
INSERT INTO `product_item` VALUES (1,1,'#FFFF00-M',3,600,'2','M'),(2,1,'#FF0000-S',23,499,'1','S'),(3,1,'#FF0000-L',33,299,'1','L'),(4,2,'#008000-M',23,1039,'4','M'),(5,2,'#0000FF-XL',44,1200,'3','XL'),(6,3,'#0000FF-M',44,900,'3','M'),(7,3,'#0000FF-M',41,300,'3','M'),(8,4,'#800080-M',31,339,'5','M'),(9,4,'#FFA500-M',32,399,'6','M'),(10,5,'#FFFF00-M',10,33,'2','M'),(11,5,'#008000-S',11,900,'4','S'),(12,6,'#FFFF00-M',13,229,'2','M'),(13,6,'#FFFF00-M',11,390,'2','M'),(14,7,'#FFFF00-L',13,330,'2','L'),(15,10,'#FFFF00-S',13,330,'2','S'),(16,8,'#FFFF00-M',30,1000,'2','M'),(17,7,'#FFFF00-M',300,1230,'2','M'),(18,9,'#FF0000-M',13,300,'1','M'),(19,8,'#FFFF00-M',13,779,'2','M'),(20,9,'#0000FF-L',31,480,'3','L'),(21,9,'#800080-L',33,480,'5','L'),(22,10,'#FFFF00-L',30,479,'2','L'),(23,10,'#800080-M',30,479,'5','M'),(24,11,'#FFFF00-L',33,490,'2','L'),(25,11,'#008000-XL',33,490,'4','XL'),(26,12,'#0000FF-M',14,940,'3','M'),(27,12,'#008000-S',14,940,'4','S'),(28,13,'#FFFF00-M',13,900,'2','M'),(29,13,'#800080-M',13,900,'5','M'),(30,13,'#FFA500-M',13,900,'6','M'),(31,14,'#0000FF-M',33,940,'3','M'),(32,14,'#800080-M',33,940,'5','M'),(33,14,'#FFA500-M',33,940,'6','M'),(34,15,'#800080-M',4,490,'5','M'),(35,15,'#008000-M',4,490,'4','M'),(36,15,'#008000-S',4,490,'4','S'),(37,16,'#FF0000-M',44,590,'1','M'),(38,16,'#0000FF-M',44,590,'3','M'),(39,16,'#FFA500-M',44,590,'6','M'),(40,16,'#000000-M',44,590,'7','M'),(41,18,'#0000FF-M',4,490,'3','M'),(42,18,'#800080-M',4,490,'5','M'),(43,18,'#800080-XL',4,490,'5','XL'),(44,19,'#0000FF-L',14,330,'3','L'),(45,19,'#FF0000-L',14,330,'1','L'),(46,19,'#FF0000-XL',14,330,'1','XL'),(47,20,'#0000FF-XL',44,1200,'3','XL'),(48,20,'#000000-XL',44,1200,'7','XL'),(49,20,'#000000-S',44,1200,'7','S'),(50,20,'#000000-M',44,1200,'7','M'),(51,21,'#FFFF00-M',49,200,'2','M'),(52,21,'#FF0000-M',49,200,'1','M'),(53,21,'#FF0000-XL',49,200,'1','XL'),(54,22,'#FFFF00-M',33,499,'2','M'),(55,22,'#0000FF-M',33,499,'3','M'),(56,22,'#0000FF-XL',33,499,'3','XL'),(57,23,'3-M',132,30000,'3','M'),(58,23,'4-S',132,30000,'4','S'),(59,25,'2-M',23,133,'2','M'),(60,26,'2-L',23,13,'2','L'),(61,27,'1-M',3,3,'1','M'),(62,23,'3-M',31,31,'3','M'),(63,29,'1-M',2,2,'1','M'),(64,30,'2-M',3,3,'2','M'),(65,32,'2-S',231,231,'2','S'),(66,33,'2-L',213,3,'2','L'),(67,34,'2-S',231,231,'2','S'),(68,35,'3-M',3213,213,'3','M'),(69,2,'1-M',123,123,'1','M'),(70,3,'3-M',312,213,'3','M'),(71,37,'3-S',213,213,'3','S'),(72,39,'1-M',213,213,'1','M'),(73,41,'3-M',123,123,'3','M'),(74,40,'2-S',132,32,'2','S'),(75,42,'1-M',132,123,'1','M'),(76,28,'3-L',35,6876,'3','L');
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipients`
--

LOCK TABLES `recipients` WRITE;
/*!40000 ALTER TABLE `recipients` DISABLE KEYS */;
INSERT INTO `recipients` VALUES (1,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(2,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(3,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(4,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(5,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(6,'Luke','0987654321','luke@gmail.com','市政府站','morning'),(7,'Luke','0987654321','luke@gmail.com','市政府站','morning');
/*!40000 ALTER TABLE `recipients` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_category`
--

LOCK TABLES `sub_category` WRITE;
/*!40000 ALTER TABLE `sub_category` DISABLE KEYS */;
INSERT INTO `sub_category` VALUES (1,'棉料','可水洗','韓國','全店，超商滿$999免運費  全店，宅配滿$2000免運費',' 小編實穿報告：175/65穿XL(合身)\r\n▶︎ 寬鬆挑大一號， 更合身挑小一號\r\n▶︎此款褲頭為鬆緊\r\n▶︎ 如何挑選尺寸、測量長度看這邊\r\n▶︎ 此為預購商品，需約7個工作天出貨'),(2,'棉、聚脂纖維\"','可水洗','中國','實品顏色以單品照為主','你絕對不能錯過的超值商品'),(3,'冰絲','可水洗','韓國','正品','超值優惠'),(4,'metal','no','china','cool','cool'),(5,'','','','',''),(6,'','','','',''),(7,'','','','',''),(8,'','','','',''),(9,'','','','',''),(10,'','','','',''),(11,'','','','',''),(12,'','','','',''),(13,'','','','',''),(14,'','','','',''),(15,'','','','',''),(16,'','','','',''),(17,'','','','',''),(18,'','','','',''),(19,'','','','',''),(20,'','','','',''),(21,'','','','',''),(22,'','','','',''),(23,'metal','no','china','no','no'),(24,'ewq','qwewq','ewq','qwe','ew'),(25,'ads','asd','asd','asd','asd'),(26,'das','asd','asd','asd','asd'),(27,'213','123','213','23','231'),(28,'','','','',''),(29,'r','','','',''),(30,'231','','','',''),(31,'123','213213','','',''),(32,'','','','',''),(33,'','','','',''),(34,'','','','',''),(35,'','','','',''),(36,'123','','','',''),(37,'','','','',''),(38,'','','','',''),(39,'','','','',''),(40,'','','','',''),(41,'','','','',''),(42,'','','','',''),(43,'','','','',''),(44,'','','','','');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'張峰銘','a86gj387@yahoo.com.tw','$2b$10$lC8idKk6dwAWl9eZz6Hoo.wJreHAb1s.rkXEDsx4r3yfGI6S29UXO','facebook','https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=5957823294307991&height=50&width=50&ext=1679215608&hash=AeRbaWAJPAOZJB6ZGrc'),(2,'323','123','$2b$10$w/yg4jPMnFv/9z4nG9cnlOnonGEWmEw6ikRkhgg86na3km6DKwSGq','native',''),(3,'323','1233213@gm.com','$2b$10$VoBxpL4WV9p4K/Vw3Mf.BOLNX5hk.Gc7Y7/ygqM1l6YmrrOZ0rjgm','native',''),(4,'asdasda','1233213a@gm.com','$2b$10$9NBC2pDfDsFmGHf826P8JutWTjucb2AZ5lOWxzC0jTX7NkHgi1qOG','native',''),(5,'321sad','1233213gm.com','$2b$10$nMg0VsZDmtqayWwzh9u15ePleNwDbHFy.qMFDNg62ZoomqQtwvHrK','native',''),(6,'321sad','1233213qwem','$2b$10$pSnpuq54krAgguIQO8I/duJT46P8X/6Ye5bCTRSjGUjI5lkiLoWWW','native',''),(7,'321sad','1233213@qwem.com','$2b$10$21VhsLaWPoclb0nwpRWzJe1hbdRPphIF/.cfhP/WTrDYMZSLA1WAy','native',''),(8,'3ddasd','1233@em.com','$2b$10$JvT96DHyxlH8gjme4ieuhuPAmVkx371vn6CRqyHh4ptg3skii0EoG','native','');
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

-- Dump completed on 2023-02-22 16:28:09
