-- -- Database: Bootcamp

-- -- DROP DATABASE IF EXISTS "Bootcamp";

-- CREATE DATABASE "Bootcamp"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE students (
-- 	student_id SERIAL PRIMARY KEY ,
-- 	last_name VARCHAR (25),
-- 	first_name VARCHAR (25),
-- 	birth_date DATE
-- )

-- INSERT INTO students (first_name,	last_name,	birth_date)
-- VALUES
-- ('Marc',	'Benichou',	DATE '1988-11-02'),
-- ('Yoan',	'Cohen'	,  DATE '2010-12-03'),
-- ('Lea'	,'Benichou'	, DATE '1987-07-27'),
-- ('Amelia'	,'Dux'	, DATE '1996-04-07'),
-- ('David',	'Grez',	DATE '2003-06-14'),
-- ('Omer',	'Simpson',	DATE '1980-10-03');

-- INSERT INTO students (first_name,	last_name,	birth_date)
-- VALUES 
-- ('Anatoly', 'Zykov', DATE '1988-04-06')

-- SELECT * FROM students
-- SELECT first_name,	last_name FROM students
-- SELECT first_name,	last_name FROM students WHERE student_id = 2
-- SELECT first_name,	last_name FROM students WHERE first_name = 'Marc' AND last_name= 'Benichou'
-- SELECT first_name,	last_name FROM students WHERE first_name = 'Marc' OR last_name= 'Benichou'
-- SELECT first_name,	last_name FROM students WHERE first_name ILIKE '%a%'
-- SELECT first_name,	last_name FROM students WHERE first_name ILIKE 'a%'
-- SELECT first_name,	last_name FROM students WHERE first_name ILIKE '%a'
-- SELECT first_name,	last_name FROM students WHERE first_name ILIKE '%a_'
-- SELECT first_name,	last_name FROM students WHERE student_id = 2 OR student_id = 3

SELECT * FROM students WHERE birth_date >= Date '2000-01-01'