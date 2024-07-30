--Get all meals
SELECT * FROM meal;

--Add a new meal
INSERT INTO `meal` (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) VALUES
('Æbleskiver Breakfast', 'Enjoy traditional Danish pancake balls served with powdered sugar and jam.', '123 Danish St', '2024-08-25 10:00:00', 25, 15.00, CURRENT_TIMESTAMP);

--Get a meal with any id, fx 1
SELECT * FROM meal
WHERE id = 6;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET title = 'Æblekage Breakfast', 
   `when` = '2024-08-26 10:00:00', 
   max_reservations = 20
WHERE id = 6;

--Delete a meal with any id, fx 1
DELETE FROM meal 
WHERE id = 6;