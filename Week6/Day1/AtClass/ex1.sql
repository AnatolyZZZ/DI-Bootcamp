-- city_info, with those columns : event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust

-- CREATE TABLE city_info (
-- event_datetime timestamp NOT NULL, 
-- city VARCHAR(50) NOT NULL, 
-- temperature decimal NOT NULL, 
-- light decimal NOT NULL, 
-- airquality_raw decimal NOT NULL, 
-- sound decimal NOT NULL, 
-- humidity decimal NOT NULL, 
-- dust decimal NOT NULL
-- )

-- COPY city_info (event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust
-- ) FROM  '/Users/AnatolyZ/Downloads/city_info.csv' DELIMITER ',' CSV HEADER;

-- select temperature FROM city_info WHERE city = 'Boston' AND event_datetime = '2015-03-01 11:00:00'
-- SELECT COUNT (*) from city_info
-- SELECT event_datetime, city, temperature FROM city_info WHERE city = 'San Francisco' AND temperature >=28 AND temperature <=30
-- SELECT city, DATE(event_datetime), sound FROM city_info ORDER BY sound ASC LIMIT 1
-- SELECT city, DATE(event_datetime), sound FROM city_info ORDER BY sound DESC LIMIT 1
-- SELECT dust, event_datetime FROM city_info WHERE city = 'San Francisco' AND DATE(event_datetime)='2015-03-26' AND EXTRACT(HOUR FROM event_datetime)>20
-- SELECT DATE(event_datetime), EXTRACT(HOUR FROM event_datetime) AS hour, humidity FROM city_info WHERE city='Geneva' AND humidity < 40 OR humidity > 60
-- SELECT city, TO_CHAR(event_datetime, 'DAY') AS day_of_week FROM city_info ORDER BY light DESC LIMIT 1
SELECT DISTINCT city FROM city_info WHERE city ILIKE 's%'
