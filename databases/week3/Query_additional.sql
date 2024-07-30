-- Additional queries

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal
WHERE meal.price < 20.00;

-- Get meals that still has available reservations
SELECT * FROM meal
WHERE (SELECT SUM(reservation.number_of_guests) FROM reservation WHERE reservation.meal_id = meal.id) < meal.max_reservations;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal
WHERE meal.title LIKE '%brød%';

-- Get meals that has been MAKED between two dates
SELECT * FROM meal
WHERE `when` BETWEEN '2024-08-12' AND '2024-08-21';

-- Get only specific number of meals fx return only 3 meals
SELECT * FROM meal
LIMIT 3;

-- Get the meals that have good reviews
SELECT meal.*, AVG(review.stars) AS average_stars
FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
HAVING average_stars >= 5;


-- Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation
WHERE meal_id = 1
ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews
SELECT meal.*, AVG(review.stars) AS average_stars
FROM meal
LEFT JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY average_stars DESC;