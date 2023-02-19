-- SELECT * from actors
-- SELECT COUNT(actor_id) from actors
INSERT INTO actors (first_name, last_name)
VALUES 
('Nodate', 'Ofbirth')
-- ERROR:  null value in column "date_of_birth" of relation "actors" violates not-null constraint
-- DETAIL:  Failing row contains (7, Nodate, Ofbirth, null, 0).
-- SQL state: 23502
