-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)
CREATE TABLE customer (
	id SERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(25) NOT NULL,
	last_name VARCHAR(25) NOT NULL
)

CREATE TABLE profile (
	id SERIAL NOT NULL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT false,
	customer_id INTEGER UNIQUE REFERENCES customer (id) ON DELETE CASCADE ON UPDATE CASCADE
)
INSERT INTO customer (first_name, last_name)
VALUES 
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive')
-- John is loggedIn
-- Jerome is not logged in
INSERT INTO profile (isLoggedIn, customer_id)
VALUES
('true', (SELECT id FROM customer WHERE first_name = 'John')),
(default, (SELECT id FROM customer WHERE first_name = 'Jerome'))
-- The first_name of the LoggedIn customers
SELECT first_name FROM customer 
RIGHT JOIN profile ON profile.customer_id=customer.id
WHERE isLoggedIn='true'
-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT first_name, isLoggedIn FROM customer
LEFT JOIN profile ON customer.id = profile.customer_id
-- The number of customers that are not LoggedIn
SELECT COUNT(*) FROM customer
LEFT JOIN profile ON customer.id = profile.customer_id
WHERE isloggedin = 'false' OR isloggedin IS NULL

-- PART II
-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE TABLE Book (
	book_id SERIAL PRIMARY KEY,
	title VARCHAR(25) NOT NULL,
	author VARCHAR(25) NOT NULL
)
-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

INSERT INTO Book (title, author) 
VALUES 
	('Alice In Wonderland', 'Lewis Carroll'),
	('Harry Potter', 'J.K Rowling'),
	('To kill a mockingbird', 'Harper Lee')
-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE Student (
	student_id SERIAL PRIMARY KEY,
	name VARCHAR(25) NOT NULL UNIQUE,
	age SMALLINT CHECK (age<16)
)
-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14
INSERT INTO Student (name, age)
VALUES
	('John', 12),
	('Lera', 11),
	('Patrick', 10),
	('Bob', 14)

-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table
CREATE TABLE Library (
	book_fk INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_fk INTEGER REFERENCES Student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	borrowed_date DATE,
	PRIMARY KEY (book_fk, student_fk) 
)
-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
INSERT INTO LIBRARY (student_fk, book_fk, borrowed_date)
VALUES
((SELECT student_id FROM Student WHERE name = 'John'), (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), '2022-02-15'),
((SELECT student_id FROM Student WHERE name = 'Bob'), (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), '2021-03-03'),
((SELECT student_id FROM Student WHERE name = 'Lera'), (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), '2021-05-23'),
((SELECT student_id FROM Student WHERE name = 'Bob'), (SELECT book_id FROM Book WHERE title = 'Harry Potter'), '2021-08-12')
-- Display the data
-- Select all the columns from the junction table
SELECT * FROM Library
-- Select the name of the student and the title of the borrowed books
SELECT name, title FROM Library 
INNER JOIN Student ON Student.student_id = Library.student_fk
INNER JOIN Book ON Book.book_id = Library.book_fk
-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT ROUND(AVG(age), 1) AS avg_age FROM Library 
INNER JOIN Student ON Student.student_id = Library.student_fk
INNER JOIN Book ON Book.book_id = Library.book_fk
WHERE title = 'Alice In Wonderland'
-- Delete a student from the Student table, what happened in the junction table ?
DELETE FROM STUDENT WHERE name='Lera'
SELECT * FROM Library --row with student_fk of Lera also deleted because ON DELETE CASCADE