CREATE TABLE `meal` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `title` varchar(255) NOT NULL,
   `description` TEXT,
   `location` varchar(255) NOT NULL,
   `when` DATETIME NOT NULL,
   `max_reservations` int(10) unsigned NOT NULL,
   `price` DECIMAL(10, 2) NOT NULL, 
   `created_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `number_of_guests` int(10) unsigned,
   `meal_id` int(10) unsigned,
   `created_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `contact_phonenumber` varchar(255) NOT NULL,
   `contact_name` varchar(255) NOT NULL,
   `contact_email` varchar(255) NOT NULL,
   PRIMARY KEY (`id`),
   CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `title` varchar(255) NOT NULL,
   `description` TEXT,
   `meal_id` int(10) unsigned,
   `stars` int(10) unsigned,
   `created_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`),
   CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Meals
INSERT INTO `meal` (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) VALUES
('Borscht Night', 'Enjoy a traditional Ukrainian beet soup served with sour cream and fresh bread.', '789 Ukrainian Blvd', '2024-08-10 19:00:00', 20, 20.00, CURRENT_TIMESTAMP),
('Varenyky Feast', 'Delicious Ukrainian dumplings filled with various ingredients like potatoes, cheese, or meat.', '789 Ukrainian Blvd', '2024-08-12 18:00:00', 25, 22.00, CURRENT_TIMESTAMP),
('Holubtsi Dinner', 'Stuffed cabbage rolls with a savory meat and rice filling.', '789 Ukrainian Blvd', '2024-08-15 17:00:00', 20, 24.00, CURRENT_TIMESTAMP),
('Smørrebrød Lunch', 'Traditional Danish open-faced sandwiches with various toppings such as herring, roast beef, and pickled vegetables.', '123 Danish St', '2024-08-20 12:00:00', 30, 18.00, CURRENT_TIMESTAMP),
('Frikadeller Evening', 'Classic Danish meatballs served with potatoes and gravy.', '123 Danish St', '2024-08-22 19:00:00', 20, 25.00, CURRENT_TIMESTAMP);


-- Reservations
INSERT INTO `reservation` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES
(2, 1, CURRENT_TIMESTAMP, '111-222-3333', 'Ivan Petrov', 'ivanpetrov@example.com'),
(4, 2, CURRENT_TIMESTAMP, '222-333-4444', 'Olga Ivanova', 'olgivanova@example.com'),
(3, 3, CURRENT_TIMESTAMP, '333-444-5555', 'Serhiy Shevchenko', 'serhiy.shevchenko@example.com'),
(2, 4, CURRENT_TIMESTAMP, '444-555-6666', 'Klaus Hansen', 'klaus.hansen@example.com'),
(5, 5, CURRENT_TIMESTAMP, '555-666-7777', 'Anna Sørensen', 'anna.sorensen@example.com');

-- Reviews
INSERT INTO `review` (`title`, `description`, `meal_id`, `stars`, `created_date`) VALUES
('Delicious Borscht', 'The borscht was perfect, just like my grandmother used to make!', 1, 5, CURRENT_TIMESTAMP),
('Great Varenyky', 'The varenyky were delightful and the fillings were flavorful.', 2, 4, CURRENT_TIMESTAMP),
('Satisfying Holubtsi', 'The holubtsi were hearty and comforting. A great traditional dish.', 3, 5, CURRENT_TIMESTAMP),
('Perfect Smørrebrød', 'The smørrebrød was authentic and delicious. Loved the variety of toppings!', 4, 5, CURRENT_TIMESTAMP),
('Tasty Frikadeller', 'The frikadeller were well-seasoned and the gravy was excellent.', 5, 4, CURRENT_TIMESTAMP);