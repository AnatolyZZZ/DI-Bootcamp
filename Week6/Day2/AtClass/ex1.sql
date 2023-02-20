SELECT * from city_info
-- 1. What is the average dust index in the city of Boston between 01/03/2015 and 05/03/2015?
SELECT AVG(dust) FROM city_info  WHERE city='Boston' AND DATE(event_datetime) BETWEEN '2015-03-01' AND '2015-03-05'
-- 2. How many rows does the table have about the city "San Francisco" ?
SELECT COUNT(*) FROM city_info WHERE city='San Francisco'
-- 3. How many rows per city does the table have ?
SELECT COUNT(*), city FROM city_info GROUP BY city
-- 4. Where and when (only hour) it's the noisiest in the world?
SELECT city, event_datetime::time AS hour, sound FROM city_info WHERE sound = (SELECT MAX(sound) FROM city_info)