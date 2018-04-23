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
  team TEXT,
  nationality TEXT,
  nation_id INTEGER REFERENCES nationality(id),
  img_url VARCHAR(400)
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



INSERT INTO driver (carnum, name, team, nationality, nation_id, img_url)
VALUES
(44,'Lewis Hamilton','Britian', 'Mercedes', 3, 'https://www.formula1.com/content/fom-website/en/championship/drivers/lewis-hamilton/_jcr_content/image.img.1024.medium.jpg/1521204312905.jpg'),
(77, 'Valtteri Bottas','Finland', 'Mercedes', 6, 'https://www.formula1.com/content/fom-website/en/championship/drivers/valtteri-bottas/_jcr_content/image.img.1024.medium.jpg/1521204355212.jpg'),
(5, 'Sebastian Vettel', 'Germany', 'Ferrari', 8, 'https://www.formula1.com/content/fom-website/en/championship/drivers/sebastian-vettel/_jcr_content/image.img.1024.medium.jpg/1521204232238.jpg'),
(7, 'Kimi Raikkonen', 'Finland', 'Ferrari', 6,  'https://www.formula1.com/content/fom-website/en/championship/drivers/kimi-raikkonen/_jcr_content/image.img.640.medium.jpg/1521204007378.jpg'),
(3,'Daniel Ricciardo', 'Australia', 'Red Bull Racing', 1, 'https://www.formula1.com/content/fom-website/en/championship/drivers/daniel-ricciardo/_jcr_content/image.img.640.medium.jpg/1521203915633.jpg'),
(33,'Max Verstappen', 'Netherlands', 'Red Bull Racing', 11, 'https://www.formula1.com/content/fom-website/en/championship/drivers/max-verstappen/_jcr_content/image.img.640.medium.jpg/1521204147986.jpg'),
(14,'Fernando Alonso', 'Spain', 'McClaren', 14, 'https://www.formula1.com/content/fom-website/en/championship/drivers/fernando-alonso/_jcr_content/image.img.640.medium.jpg/1521203948853.jpg'),
(2,'Stoffel Vandoorne', 'Belgium', 'McClaren', 2, 'https://www.formula1.com/content/fom-website/en/championship/drivers/stoffel-vandoorne/_jcr_content/image.img.640.medium.jpg/1521204292370.jpg'),
(27, 'Nico Hulkenburg', 'Germany', 'Renault', 8, 'https://www.formula1.com/content/fom-website/en/championship/drivers/nico-hulkenberg/_jcr_content/image.img.640.medium.jpg/1521204189320.jpg'),
(55, 'Carlos Sainz', 'Spain', 'Renault', 14, 'https://www.formula1.com/content/fom-website/en/championship/drivers/carlos-sainz/_jcr_content/image.img.640.medium.jpg/1521203891442.jpg'),
(10, 'Pierre Gasly', 'France', 'Toro Rosso', 7, 'https://www.formula1.com/content/fom-website/en/championship/drivers/pierre-gasly/_jcr_content/image.img.640.medium.jpg/1521204450886.jpg'),
(28, 'Brendon Hartley', 'New Zealand', 'Toro Rosso', 12, 'https://www.formula1.com/content/fom-website/en/championship/drivers/brendon-hartley/_jcr_content/image.img.640.medium.jpg/1521204477209.jpg'),
(8, 'Romain Grosjean', 'France', 'Haas', 7, 'https://www.formula1.com/content/fom-website/en/championship/drivers/romain-grosjean/_jcr_content/image.img.640.medium.jpg/1521204214711.jpg'),
(20, 'Kevin Magnussen', 'Denmark', 'Haas', 5, 'https://www.formula1.com/content/fom-website/en/championship/drivers/kevin-magnussen/_jcr_content/image.img.640.medium.jpg/1521204087103.jpg'),
(9, 'Marcus Ericsson', 'Sweden', 'Sauber', 15, 'https://www.formula1.com/content/fom-website/en/championship/drivers/marcus-ericsson/_jcr_content/image.img.640.medium.jpg/1521204126614.jpg'),
(16, 'Charles Leclerc', 'Monaco', 'Sauber', 10, 'https://www.formula1.com/content/fom-website/en/championship/drivers/charles-leclerc/_jcr_content/image.img.640.medium.jpg/1521204500196.jpg'),
(11, 'Sergio Perez', 'Mexico', 'Force India', 9, 'https://www.formula1.com/content/fom-website/en/championship/drivers/sergio-perez/_jcr_content/image.img.640.medium.jpg/1521204251316.jpg'),
(31, 'Esteban Ocon', 'France', 'Force India', 7, 'https://www.formula1.com/content/fom-website/en/championship/drivers/esteban-ocon/_jcr_content/image.img.640.medium.jpg/1521204410342.jpg'),
(18, 'Lance Stroll', 'Canada', 'Williams', 4, 'https://www.formula1.com/content/fom-website/en/championship/drivers/lance-stroll/_jcr_content/image.img.640.medium.jpg/1521204430791.jpg'),
(35, 'Sergey Sirotkin', 'Russia', 'Williams', 13, 'https://www.formula1.com/content/fom-website/en/championship/drivers/sergey-sirotkin/_jcr_content/image.img.640.medium.jpg/1521204523871.jpg');
