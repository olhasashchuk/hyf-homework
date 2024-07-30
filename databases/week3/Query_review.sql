-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO `review` (`title`, `description`, `meal_id`, `stars`, `created_date`) VALUES
('Hearty and Flavorful Borscht', 'The borscht was rich and full of flavor, a true comfort food.', 1, 5, CURRENT_TIMESTAMP);

-- Get a review with any id, fx 1
SELECT * FROM review
WHERE id = 6;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = 'Flavorful Borscht', 
   stars = '4' 
WHERE id = 6;

-- Delete a review with any id, fx 1
DELETE FROM review 
WHERE id = 6;
