CREATE TABLE `author` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `name` varchar(255) NOT NULL,
   `createdDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `tag` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `name` varchar(255) NOT NULL,
   `createdDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` TEXT,
  `createdDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `article_authors` (
    `article_id` int(10) unsigned NOT NULL,
    `author_id` int(10) unsigned NOT NULL,
    PRIMARY KEY (`article_id`, `author_id`),
    CONSTRAINT `fk_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE,
    CONSTRAINT `fk_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `article_tags` (
    `article_id` int(10) unsigned NOT NULL,
    `tag_id` int(10) unsigned NOT NULL,
    PRIMARY KEY (`article_id`, `tag_id`),
    CONSTRAINT `fk_article_tag` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE,
    CONSTRAINT `fk_tag` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Authors
insert into author (id, name, `createdDate`) values (1, 'James Smith', '2023-09-26 03:06:46');
insert into author (id, name, `createdDate`) values (2, 'Jane Jones', '2023-08-20 09:06:46');
insert into author (id, name, `createdDate`) values (3, 'Aliya Awad', '2023-07-12 11:06:00');
insert into author (id, name, `createdDate`) values (4, 'Igor Vladimir', '2022-08-02 10:07:46');
insert into author (id, name, `createdDate`) values (5, 'Kim Jensen', '2023-06-24 11:07:00');

select * from author

--tags
insert into tag (id, name, `createdDate`) values (1, 'science', '2023-06-21 11:06:46');
insert into tag (id, name, `createdDate`) values (2, 'breaking', '2023-10-05 12:06:46');
insert into tag (id, name, `createdDate`) values (3, 'weather', '2023-09-26 03:06:46');
insert into tag (id, name, `createdDate`) values (4, 'winter', '2022-12-10 05:12:00');
insert into tag (id, name, `createdDate`) values (5, 'clickbait', '2022-11-15 04:10:40');

select * from tag

insert into article (id, title, content, createdDate) values (1, 'BREAKING NEWS: Water is wet!', 'Scientists have discovered that water is wet, it\'s amazing what.... ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', '2022-11-15 04:10:40');

insert into article (id, title, content, createdDate) values (2, 'Heavy Snowfall Expected this Weekend', 'Lots of snow is expected... Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2022-09-15 04:10:40');

insert into article (id, title, content, createdDate) values (3, 'BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!', 'Haha, you clicked! Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.', '2023-12-15 12:10:40');

INSERT INTO article_authors (article_id, author_id) VALUES 
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 2),
(3, 5);

INSERT INTO article_tags (article_id, tag_id) VALUES 
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 5),
(3, 2);