-- Part 3: More queries

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT * FROM task
WHERE title LIKE '%SQL%' OR description LIKE '%SQL%';

SELECT 
   task.title, status.name AS status 
FROM task
JOIN status
ON status.id = task.status_id

SELECT * FROM task
JOIN user 
on user.id = task.user_id
WHERE user.email LIKE '%@spotify.com' 

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT * FROM task
JOIN user 
on user.id = task.user_id
WHERE user.name = 'Donald Duck' AND task.status_id = 1;

SELECT * FROM task

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT * FROM task
JOIN user 
on user.id = task.user_id
WHERE user.name = 'Maryrose Meadows' AND MONTH(task.created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT
    MONTH(task.created) AS month,
    COUNT(task.id) AS task_count
FROM
    task
GROUP BY
    MONTH(task.created)
ORDER BY
    MONTH(task.created);