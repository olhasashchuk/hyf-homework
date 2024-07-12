
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Buy bread', 'Title says it all.', '2024-07-07 11:08:16', '2024-07-08 09:10:00', '2024-07-10 12:00:00', 1, 12);

--Change the title of a task
UPDATE task
set Title = 'Buy white bread'
where id = 36;

--Change a task due date
UPDATE task
set due_date = '2024-07-11 12:00:00'
where id = 36;

--Change a task status
UPDATE task
set status_id = 2
where id = 36;

--Mark a task as complete
UPDATE task
set status_id = 3
where id = 36;

--Delete a task
DELETE FROM task 
WHERE id = 36;

select * from task