CREATE TABLE `user` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `name` varchar(255) NOT NULL,
   `email` varchar(255) NOT NULL,
   `password` varchar(255) NOT NULL,
   `registration_date` DATETIME NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `post` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `title` varchar(255) NOT NULL,
   `content` TEXT,
   `created_date` DATETIME NOT NULL,
   `updated_date` DATETIME NOT NULL,
   `user_id` int(10) unsigned NOT NULL,
   PRIMARY KEY (`id`),
   CONSTRAINT `fk_user_post` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `comment` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `title` varchar(255) NOT NULL,
   `content` TEXT,
   `created_date` DATETIME NOT NULL,
   `updated_date` DATETIME NOT NULL,
   `user_id` int(10) unsigned NOT NULL,
   `post_id` int(10) unsigned NOT NULL,
   `parent_comment_id` int(10) unsigned, 
   PRIMARY KEY (`id`),
   CONSTRAINT `fk_user_comment` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
   CONSTRAINT `fk_post_comment` FOREIGN KEY (`post_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
   CONSTRAINT `fk_parent_comment` FOREIGN KEY (`parent_comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reaction` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `comment_id` int(10) unsigned NOT NULL,
   `user_id` int(10) unsigned NOT NULL,
   `reaction_type` ENUM('like', 'highfive', 'laugh', 'cry') NOT NULL,
   `created_date` DATETIME NOT NULL,
   PRIMARY KEY (`id`),
   CONSTRAINT `unique_user_reaction` UNIQUE (`comment_id`, `user_id`, `reaction_type`),
   CONSTRAINT `fk_comment_reaction` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE,
   CONSTRAINT `fk_user_reaction` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `friendship` (
   `user_id1` int(10) unsigned NOT NULL,
   `user_id2` int(10) unsigned NOT NULL,
   `created_date` DATETIME NOT NULL,
   PRIMARY KEY (`user_id1`, `user_id2`),
   CONSTRAINT `fk_user1_friendship` FOREIGN KEY (`user_id1`) REFERENCES `user` (`id`) ON DELETE CASCADE,
   CONSTRAINT `fk_user2_friendship` FOREIGN KEY (`user_id2`) REFERENCES `user` (`id`) ON DELETE CASCADE,
   CONSTRAINT `unique_friendship` UNIQUE (`user_id1`, `user_id2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `user_profile` (
   `user_id` int(10) unsigned NOT NULL,
   `summary` TEXT,
   `profile_picture` varchar(255),
   `location` varchar(255),
   PRIMARY KEY (`user_id`),
   CONSTRAINT `fk_user_profile` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `message` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `sender_id` int(10) unsigned NOT NULL,
   `receiver_id` int(10) unsigned NOT NULL,
   `content` TEXT NOT NULL,
   `sent_date` DATETIME NOT NULL,
   PRIMARY KEY (`id`),
   CONSTRAINT `fk_sender_message` FOREIGN KEY (`sender_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
   CONSTRAINT `fk_receiver_message` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `user` (`name`, `email`, `password`, `registration_date`) VALUES
('Alejandro Gispert Navarro', 'alejandro@example.com', 'password123', NOW()),
('Yuejiao Shi', 'yuejiao@example.com', 'password123', NOW()),
('Maribel Yazmin Preite', 'maribel@example.com', 'password123', NOW()),
('Alireza Hassanloo', 'alireza@example.com', 'password123', NOW());


INSERT INTO `post` (`title`, `content`, `created_date`, `updated_date`, `user_id`) VALUES
('First Post', 'This is the content of the first post.', NOW(), NOW(), 1),
('Second Post', 'This is the content of the second post.', NOW(), NOW(), 2),
('Third Post', 'This is the content of the third post.', NOW(), NOW(), 3),
('Fourth Post', 'This is the content of the fourth post.', NOW(), NOW(), 4);

INSERT INTO `comment` (`title`, `content`, `created_date`, `updated_date`, `user_id`, `post_id`, `parent_comment_id`) VALUES
('First Comment', 'This is the first comment.', NOW(), NOW(), 1, 1, NULL),
('Reply to First Comment', 'This is a reply to the first comment.', NOW(), NOW(), 2, 1, 1),
('Second Comment', 'This is the second comment.', NOW(), NOW(), 3, 2, NULL);

INSERT INTO `reaction` (`comment_id`, `user_id`, `reaction_type`, `created_date`) VALUES
(1, 1, 'like', NOW()),
(1, 2, 'laugh', NOW()),
(2, 3, 'highfive', NOW());

INSERT INTO `friendship` (`user_id1`, `user_id2`, `created_date`) VALUES
(1, 2, NOW()),
(2, 1, NOW()),
(1, 3, NOW()),
(3, 1, NOW()),
(2, 3, NOW()),
(3, 2, NOW());

INSERT INTO `user_profile` (`user_id`, `summary`, `profile_picture`, `location`) VALUES
(1, 'Summary for Alejandro', 'alejandro.jpg', 'Kuba'),
(2, 'Summary for Yuejiao', 'yuejiao.jpg', 'China'),
(3, 'Summary for Maribel', 'maribel.jpg', 'Mexico'),
(4, 'Summary for Alireza', 'alireza.jpg', 'Iran');

INSERT INTO `message` (`sender_id`, `receiver_id`, `content`, `sent_date`) VALUES
(1, 2, 'Hello Yuejiao!', NOW()),
(2, 1, 'Hi Alejandro!', NOW()),
(1, 3, 'Hello Maribel!', NOW()),
(3, 1, 'Hi Alejandro!', NOW());