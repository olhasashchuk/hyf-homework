--Get all the tasks assigned to Pavel;
select * from task
join user 
on user.id = task.user_id
where user.name LIKE '%Pavel%';

--Find how many tasks each user is responsible for;
SELECT 
   user.name,
   COUNT(task.id) AS task_count
FROM
   user
LEFT JOIN
   task ON task.user_id = user.id
GROUP BY 
   user.name;

--Find how many tasks with a status=Done each user is responsible for;
SELECT 
   user.name,
   task.status_id,
   COUNT(task.id) AS task_count
FROM
   user
LEFT JOIN
   task ON task.user_id = user.id
WHERE
   task.status_id = 3
GROUP BY 
   user.name;