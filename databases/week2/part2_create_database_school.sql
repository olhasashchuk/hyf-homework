CREATE TABLE `class` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `name` varchar(255) NOT NULL,
   `begins` DATETIME,
   `ends` DATETIME,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `student` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `name` varchar(255) NOT NULL,
   `email` varchar(255) NOT NULL,
   `phone` varchar(255) NULL,
   `class_id` int(10) unsigned,
   PRIMARY KEY (`id`),
   CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create an index on the name column of the student table.
CREATE INDEX idx_name ON student (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

CREATE TABLE `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Statuses
insert into status (id, name) values (1, 'not-started');
insert into status (id, name) values (2, 'ongoing');
insert into status (id, name) values (3, 'finished');

ALTER TABLE class
ADD `status_id` int(10) unsigned;

ALTER TABLE class
ADD CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE;
