-- Get a list of all film languages.
select * FROM language
-- this is all languages can be used 
select DISTINCT name FROM film INNER JOIN language ON language.language_id=film.language_id 
--this is languages actually used

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
SELECT title, description, name AS language FROM film 
LEFT JOIN language ON language.language_id=film.language_id
-- Get all films, even if they don’t have languages.
-- Get all languages, even if there are no films in those languages.
SELECT title, description, name AS language FROM film 
RIGHT JOIN language ON language.language_id=film.language_id ORDER BY language.language_id DESC

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR(25) NOT NULL
)

INSERT INTO new_film (name)
VALUES 
('New1'),
('NewFilm2'),
('Supernew'),
('New2')
-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review (
	review_id SERIAL NOT NULL PRIMARY KEY,
	film_id INTEGER REFERENCES new_film (id) ON DELETE CASCADE,
	language_id SMALLINT REFERENCES language (language_id),
	title VARCHAR(100) NOT NULL,
	score SMALLINT CHECK (score>0 AND score<11),
	reviw_text TEXT NOT NULL,
	last_update TIMESTAMP NOT NULL 
)
ALTER TABLE customer_review RENAME COLUMN reviw_text TO review_text

SELECT * FROM customer_review
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES 
(
	(SELECT id FROM new_film WHERE name = 'New1'),
	(SELECT language_id FROM language WHERE name = 'Italian'),
	'Fantastic',
	10,
	'Some review',
	(SELECT NOW())
)

INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES 
(
	(SELECT id FROM new_film WHERE name = 'New2'),
	(SELECT language_id FROM language WHERE name = 'English'),
	'Not bad',
	5,
	'Some review2',
	(SELECT NOW())
),
(
	(SELECT id FROM new_film WHERE name = 'Supernew'),
	(SELECT language_id FROM language WHERE name = 'English'),
	'Not bad',
	7,
	'Some review3',
	(SELECT NOW())
)

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE name = 'New2'
-- review of New2 also have been deleted
