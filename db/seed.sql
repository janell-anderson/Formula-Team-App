-- TEST DATABASE
\c formula_test_db

-- drops the table if it already exists which also gives
-- you back the original data before you added new ones
DROP TABLE IF EXISTS nationality CASCADE;
DROP TABLE IF EXISTS driver CASCADE;

-- took out images for the mean time

CREATE TABLE nationality (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE driver (
  id SERIAL PRIMARY KEY,
  carnum INTEGER,
  name TEXT ,
  nationality TEXT,
  nation_id INTEGER REFERENCES nationality(id)
    -- img_url VARCHAR(400),
);


INSERT INTO nationality (name)
VALUES
('Australia'),
('Belgium'),
('Britian'),
('Canada'),
('Denmark'),
('Finland'),
('France'),
('Germany'),
('Mexico'),
('Monaco'),
('Netherlands'),
('New Zealand'),
('Russia'),
('Spain'),
('Sweden');



INSERT INTO driver (carnum, name, nationality, nation_id)
VALUES
(44,'Lewis Hamilton','Britian', 2),
(77, 'Valtteri Bottas','Finland', 6),
(5, 'Sebastian Vettel', 'Germany', 8),
(7, 'Kimi Raikkonen', 'Finland', 6),
(3,'Daniel Ricciardo', 'Australia', 1),
(33,'Max Verstappen', 'Netherlands', 11),
(14,'Fernando Alonso', 'Spain', 14),
(2,'Stoffel Vandoorne', 'Belgium', 2),
(27, 'Nico Hulkenburg', 'Germany', 8),
(55, 'Carlos Sainz', 'Spain', 14),
(10, 'Pierre Gasly', 'France', 7),
(28, 'Brendon Hartley', 'New Zealand', 12),
(8, 'Romain Grosjean', 'France', 7),
(20, 'Kevin Magnussen', 'Denmark', 5),
(9, 'Marcus Ericsson', 'Sweden', 15),
(16, 'Charles Leclerc', 'Monaco', 10),
(11, 'Sergio Perez', 'Mexico', 9),
(31, 'Esteban Ocon', 'France', 7),
(18, 'Lance Stroll', 'Canada', 4),
(35, 'Sergey Sirotkin', 'Russia', 13);
