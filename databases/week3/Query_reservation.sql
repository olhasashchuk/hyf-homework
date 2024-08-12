--Get all reservations
SELECT * FROM reservation;

--Add a new reservation
INSERT INTO `reservation` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES
(3, 3, CURRENT_TIMESTAMP, '999-000-1111', 'Olha Sashchuk', 'olhasashchuk@example.com');

--Get a reservation with any id, fx 1
SELECT * FROM reservation
WHERE id = 11;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET contact_name = 'Olga Sashchuk', 
   contact_phonenumber = '999-000-0011' 
WHERE id = 11;

--Delete a reservation with any id, fx 1
DELETE FROM reservation 
WHERE id = 11;