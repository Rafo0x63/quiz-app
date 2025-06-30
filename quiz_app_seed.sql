/*
SQLyog Community v13.2.0 (64 bit)
MySQL - 5.7.41-log : Database - quiz_app
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`quiz_app` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `quiz_app`;

/*Table structure for table `_prisma_migrations` */

DROP TABLE IF EXISTS `_prisma_migrations`;

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `_prisma_migrations` */

insert  into `_prisma_migrations`(`id`,`checksum`,`finished_at`,`migration_name`,`logs`,`rolled_back_at`,`started_at`,`applied_steps_count`) values 
('6a9fda93-8469-4cbd-bd09-02df77124bed','6235fc4b6fb70c56ea89d6bb6bfc73d0ecded0d9b8bbbf9b01004d7765ded455','2025-06-30 18:43:42.763','20250627102219_init',NULL,NULL,'2025-06-30 18:43:42.606',1),
('d6b6a5cf-5e24-4e0a-bc1c-259176478672','0f37f2bebe97f6048fd09a1e0138b2af9a0d7ef33cb5a5624b482e346959f953','2025-06-30 18:43:42.830','20250627174502_init',NULL,NULL,'2025-06-30 18:43:42.764',1);

/*Table structure for table `category` */

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `category` */

insert  into `category`(`id`,`title`) values 
(1,'Math'),
(2,'History'),
(3,'Geography'),
(4,'Science');

/*Table structure for table `question` */

DROP TABLE IF EXISTS `question`;

CREATE TABLE `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `options` json DEFAULT NULL,
  `correct_answer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quiz_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `quiz_id` (`quiz_id`),
  CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `question` */

insert  into `question`(`id`,`question`,`options`,`correct_answer`,`quiz_id`) values 
(1,'What is x in 2x = 10?','[\"3\", \"5\", \"10\", \"2\"]','5',1),
(2,'Solve: 3x + 2 = 11','[\"3\", \"5\", \"2\", \"1\"]','3',1),
(3,'What is the value of x in x^2 = 16?','[\"2\", \"4\", \"6\", \"8\"]','4',1),
(4,'Which is a linear equation?','[\"x + 2 = 5\", \"x^2 + 3 = 4\", \"x^3 = 8\", \"x/2 = x\"]','x + 2 = 5',1),
(5,'Which one is a variable?','[\"3\", \"x\", \"=\", \"5\"]','x',1),
(6,'How many degrees are in a triangle?','[\"180\", \"90\", \"360\", \"45\"]','180',2),
(7,'What shape has four equal sides?','[\"Rectangle\", \"Square\", \"Triangle\", \"Pentagon\"]','Square',2),
(8,'What is the sum of interior angles in a quadrilateral?','[\"360\", \"180\", \"90\", \"720\"]','360',2),
(9,'Which has three sides?','[\"Triangle\", \"Square\", \"Circle\", \"Hexagon\"]','Triangle',2),
(10,'What is a right angle?','[\"90 degrees\", \"45 degrees\", \"180 degrees\", \"360 degrees\"]','90 degrees',2),
(11,'What is the derivative of x^2?','[\"2x\", \"x\", \"x^2\", \"1\"]','2x',3),
(12,'What does a derivative represent?','[\"Slope\", \"Area\", \"Volume\", \"Length\"]','Slope',3),
(13,'What is the integral of 1/x?','[\"ln|x|\", \"x\", \"1\", \"x^2\"]','ln|x|',3),
(14,'What is the limit of x→0 for sin(x)/x?','[\"1\", \"0\", \"Infinity\", \"Undefined\"]','1',3),
(15,'What is ∫x dx?','[\"(1/2)x^2 + C\", \"x^2\", \"2x\", \"ln(x)\"]','(1/2)x^2 + C',3),
(16,'When did WWI begin?','[\"1914\", \"1939\", \"1945\", \"1900\"]','1914',4),
(17,'What sparked WWI?','[\"Assassination of Archduke\", \"Pearl Harbor\", \"Treaty signing\", \"Nuclear attack\"]','Assassination of Archduke',4),
(18,'Who was part of the Triple Entente?','[\"France, UK, Russia\", \"Germany, Austria, Italy\", \"USA, UK, France\", \"China, Japan, USA\"]','France, UK, Russia',4),
(19,'When did WWI end?','[\"1918\", \"1945\", \"1939\", \"1925\"]','1918',4),
(20,'What treaty ended WWI?','[\"Treaty of Versailles\", \"Treaty of Paris\", \"Treaty of Yalta\", \"Treaty of Rome\"]','Treaty of Versailles',4),
(21,'When did World War II begin?','[\"1939\", \"1940\", \"1914\", \"1945\"]','1939',5),
(22,'Which countries were part of the Axis Powers?','[\"Germany, Italy, Japan\", \"USA, UK, USSR\", \"France, Poland, UK\", \"Spain, Portugal, Turkey\"]','Germany, Italy, Japan',5),
(23,'What event led the USA to join WWII?','[\"Pearl Harbor\", \"D-Day\", \"Battle of the Bulge\", \"Berlin Blockade\"]','Pearl Harbor',5),
(24,'What was the Holocaust?','[\"Genocide of Jews\", \"Military operation\", \"Code name for invasion\", \"Economic crisis\"]','Genocide of Jews',5),
(25,'Which conference decided post-war Europe?','[\"Yalta\", \"Versailles\", \"Geneva\", \"NATO Summit\"]','Yalta',5),
(26,'Who were the main rivals in the Cold War?','[\"USA and USSR\", \"UK and Germany\", \"China and Japan\", \"France and Italy\"]','USA and USSR',6),
(27,'What symbolized the Cold War division?','[\"Berlin Wall\", \"White House\", \"Tower of London\", \"Pyramids\"]','Berlin Wall',6),
(28,'When did the Berlin Wall fall?','[\"1989\", \"1991\", \"1945\", \"1970\"]','1989',6),
(29,'What was the Cuban Missile Crisis?','[\"Nuclear standoff\", \"Trade deal\", \"Space race\", \"Spy scandal\"]','Nuclear standoff',6),
(30,'What does NATO stand for?','[\"North Atlantic Treaty Organization\", \"Nuclear Agreement Trade Office\", \"Neutral Atlantic Treaty Order\", \"National Army Treaty Operation\"]','North Atlantic Treaty Organization',6),
(31,'What is the capital of France?','[\"Paris\", \"London\", \"Rome\", \"Berlin\"]','Paris',7),
(32,'What is the capital of Japan?','[\"Tokyo\", \"Beijing\", \"Seoul\", \"Bangkok\"]','Tokyo',7),
(33,'What is the capital of Canada?','[\"Ottawa\", \"Toronto\", \"Vancouver\", \"Montreal\"]','Ottawa',7),
(34,'What is the capital of Australia?','[\"Canberra\", \"Sydney\", \"Melbourne\", \"Perth\"]','Canberra',7),
(35,'What is the capital of Brazil?','[\"Brasília\", \"Rio de Janeiro\", \"São Paulo\", \"Salvador\"]','Brasília',7),
(36,'How many continents are there?','[\"7\", \"6\", \"5\", \"8\"]','7',8),
(37,'Which is the largest ocean?','[\"Pacific\", \"Atlantic\", \"Indian\", \"Arctic\"]','Pacific',8),
(38,'Which continent is Egypt in?','[\"Africa\", \"Asia\", \"Europe\", \"Australia\"]','Africa',8),
(39,'What is the smallest continent?','[\"Australia\", \"Europe\", \"Antarctica\", \"South America\"]','Australia',8),
(40,'Which ocean is east of Africa?','[\"Indian\", \"Atlantic\", \"Pacific\", \"Southern\"]','Indian',8),
(41,'Which flag has a red circle on white?','[\"Japan\", \"Bangladesh\", \"South Korea\", \"China\"]','Japan',9),
(42,'Which country has a maple leaf on its flag?','[\"Canada\", \"USA\", \"UK\", \"Australia\"]','Canada',9),
(43,'Which country’s flag is red with five stars?','[\"China\", \"Vietnam\", \"North Korea\", \"Laos\"]','China',9),
(44,'Which flag is blue and yellow?','[\"Ukraine\", \"Sweden\", \"Brazil\", \"Greece\"]','Ukraine',9),
(45,'Which country has a tricolor of orange, white, and green?','[\"India\", \"Ireland\", \"Ivory Coast\", \"Italy\"]','India',9),
(46,'What is the unit of force?','[\"Newton\", \"Joule\", \"Watt\", \"Pascal\"]','Newton',10),
(47,'What is the speed of light?','[\"299,792,458 m/s\", \"3,000,000 m/s\", \"150,000 km/s\", \"1,000,000 m/s\"]','299,792,458 m/s',10),
(48,'What does E=mc^2 represent?','[\"Energy-mass equivalence\", \"Gravitational law\", \"Force equation\", \"Friction law\"]','Energy-mass equivalence',10),
(49,'Which law states that for every action, there is an equal reaction?','[]','Newton\'s Third Law',10),
(50,'What is measured in volts?','[\"Electric potential\", \"Current\", \"Resistance\", \"Power\"]','Electric potential',10),
(51,'What is the symbol for water?','[\"H2O\", \"O2\", \"CO2\", \"NaCl\"]','H2O',11),
(52,'What element has the symbol Na?','[\"Sodium\", \"Nitrogen\", \"Neon\", \"Nickel\"]','Sodium',11),
(53,'Which gas do plants absorb?','[\"CO2\", \"O2\", \"H2\", \"N2\"]','CO2',11),
(54,'What is the periodic table?','[\"Element chart\", \"Molecule map\", \"Acid chart\", \"Protein map\"]','Element chart',11),
(55,'What is the atomic number of carbon?','[\"6\", \"12\", \"14\", \"2\"]','6',11),
(56,'What is the basic unit of life?','[\"Cell\", \"Atom\", \"Organ\", \"Molecule\"]','Cell',12),
(57,'What part of the cell contains DNA?','[\"Nucleus\", \"Mitochondria\", \"Ribosome\", \"Cytoplasm\"]','Nucleus',12),
(58,'What is the powerhouse of the cell?','[\"Mitochondria\", \"Nucleus\", \"Golgi apparatus\", \"Chloroplast\"]','Mitochondria',12),
(59,'Which cells carry oxygen?','[\"Red blood cells\", \"White blood cells\", \"Neurons\", \"Platelets\"]','Red blood cells',12),
(60,'Which organelle makes proteins?','[\"Ribosome\", \"Nucleus\", \"Lysosome\", \"Chloroplast\"]','Ribosome',12);

/*Table structure for table `quiz` */

DROP TABLE IF EXISTS `quiz`;

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `quizzes_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `quiz` */

insert  into `quiz`(`id`,`title`,`description`,`category_id`) values 
(1,'Algebra Basics','Introduction to algebra',1),
(2,'Geometry Fundamentals','Shapes and theorems',1),
(3,'Calculus Introduction','Limits and derivatives',1),
(4,'World War I','Major events of WWI',2),
(5,'World War II','Major events of WWII',2),
(6,'Cold War','Tensions between the West and USSR',2),
(7,'World Capitals','Identify world capitals',3),
(8,'Continents and Oceans','Geographic features of Earth',3),
(9,'Flags of the World','Recognize country flags',3),
(10,'Physics Basics','Forces and motion',4),
(11,'Chemistry Elements','Periodic table and atoms',4),
(12,'Biology Cells','Structure and function of cells',4);

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `user` */

insert  into `user`(`id`,`first_name`,`last_name`,`email`,`password`,`is_admin`) values 
(1,'admin','admin','admin@admin.com','$2a$10$rx5OA5q69vQPSvLHwFAOguk6.6/EhWJTkAkPsPVpZJHJUCHx.zExC',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
