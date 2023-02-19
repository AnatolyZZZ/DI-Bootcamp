-- -- Database: public

-- -- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


-- CREATE TABLE items (
-- 	item_id SERIAL PRIMARY KEY,
-- 	iten_name VARCHAR (25),
-- 	price SMALLINT NOT NULL
-- ) 

-- CREATE TABLE customers (
-- 	customer_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (25),
-- 	second_name VARCHAR (25)
-- )

-- ALTER TABLE items
-- RENAME COLUMN iten_name TO item_name;

-- INSERT INTO items(item_name, price)
-- VALUES 
-- ('Small Desk',100),
-- ('Large desk' ,300),
-- ('Fan',80)
-- INSERT INTO customers (first_name, second_name)
-- VALUES
-- ('Greg', 'Jones'),
-- ('Sandra','Jones'),
-- ('Scott' ,'Scott'),
-- ('Trevor' ,'Green'),
-- ('Melanie','Johnson')

-- SELECT * FROM items
-- SELECT * FROM items WHERE price > 80
-- SELECT * FROM items WHERE price <= 300
-- SELECT * FROM customers WHERE second_name = 'Smith'
-- SELECT * FROM customers WHERE second_name = 'Jones'
SELECT * FROM customers WHERE first_name != 'Scott'
