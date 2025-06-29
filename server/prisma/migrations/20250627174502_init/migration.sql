-- DropForeignKey
ALTER TABLE `question` DROP FOREIGN KEY `questions_ibfk_1`;

-- DropForeignKey
ALTER TABLE `quiz` DROP FOREIGN KEY `quizzes_ibfk_1`;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`quiz_id`) REFERENCES `quiz`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `quiz` ADD CONSTRAINT `quizzes_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;
