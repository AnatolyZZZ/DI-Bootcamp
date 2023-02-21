-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
SELECT * FROM language
UPDATE film SET language_id=(SELECT language_id FROM language WHERE name='Italian') WHERE film_id = 1;
UPDATE film SET language_id=(SELECT language_id FROM language WHERE name='Japanese') WHERE film_id = 2 RETURNING *;
-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
--One forein key to customer_address We have to first insert in customer_address and then use it's key to insert in customer

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- SELECT * FROM customer_review
DROP TABLE customer_review
-- EASY because it is child table and not a parent for any other

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(*) - COUNT(return_date) from rental -- 183
SELECT COUNT(*) FROM rental WHERE return_date IS NULL -- 183
-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT * FROM rental  
LEFT JOIN inventory ON rental.inventory_id=inventory.inventory_id
LEFT JOIN film ON film.film_id=inventory.film_id
WHERE return_date IS NULL
ORDER BY replacement_cost DESC LIMIT 30
-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT * from film_actor
INNER JOIN film ON film_actor.film_id=film.film_id
INNER JOIN actor ON film_actor.actor_id=actor.actor_id
WHERE description ILIKE '%sumo%' AND first_name = 'Penelope' AND last_name='Monroe'
-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT * from film_category
INNER JOIN film ON film_category.film_id = film.film_id
INNER JOIN category ON film_category.category_id = category.category_id
WHERE rating = 'R' AND category.name ='Documentary' AND length<60
-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT title FROM rental
INNER JOIN customer ON rental.customer_id = customer.customer_id
INNER JOIN payment ON payment.rental_id = rental.rental_id
INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
INNER JOIN film ON film.film_id = inventory.film_id
WHERE first_name = 'Matthew' 
AND DATE(return_date) > '2005-07-28' 
AND DATE(return_date) < '2005-08-01'
AND payment.amount>4

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT title FROM rental
INNER JOIN customer ON rental.customer_id = customer.customer_id
INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
INNER JOIN film ON film.film_id = inventory.film_id
WHERE ((title ILIKE '%boat%') OR (description ILIKE '%boat%'))
AND first_name = 'Matthew'
ORDER BY replacement_cost DESC LIMIT 1