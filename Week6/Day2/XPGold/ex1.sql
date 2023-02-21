SELECT COUNT (*), rating FROM film GROUP BY rating
SELECT * FROM film 
-- Get a list of all the movies that have a rating of G or PG-13.
-- Filter this list further: look for only movies that are under 2 hours long,
-- and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
SELECT * FROM film WHERE rating = 'G' OR rating = 'PG-13' 
AND length < 120 AND rental_rate < 3 ORDER BY title 

SELECT * FROM customer
UPDATE customer SET first_name = 'Anatoly',  last_name ='Zykov' WHERE customer_id = 1 RETURNING *

SELECT * FROM address
UPDATE address SET address = 'Moscow'
WHERE  address_id = (SELECT customer.address_id FROM customer WHERE customer_id = 1) RETURNING *
SELECT * FROM customer INNER JOIN address ON customer.address_id=address.address_id WHERE customer_id = 1