-- TEST DATABASE
\c formula_test_db

-- drops the table if it already exists which also gives
-- you back the original data before you added new ones
DROP TABLE IF EXISTS team CASCADE;
DROP TABLE IF EXISTS driver CASCADE;

-- took out images for the mean time

CREATE TABLE team (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  base VARCHAR(255) NOT NULL
  -- image VARCHAR(400)
);

CREATE TABLE driver (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  num INT,
  team VARCHAR(255) NOT NULL,
  -- img_url VARCHAR(400),
  team_id INT REFERENCES team(id)
);

INSERT INTO team (name, base)

VALUES
('Mercedes AMG Petronas Motorsport', 'Brackley, United Kingdom'),
('Scuderia Ferrai','Maranello, Italy'),
('Aston Martin Red Bull Racing','Milton Keynes, United Kingdom'),
('McLaren F1 Team','Woking, United Kingdom'),
('Renault Sport Formula One Team','Enstone, United Kingdom'),
('Red Bull Toro Rosso Honda','Faenza, Italy'),
('Haas F1 Team','N/A'),
('Alfa Romeo Sauber F1 Team','Hinwil, Switzerland'),
('Sahara Force India F1 Team','Silverstone, United Kingdom'),
('Williams Martini Racing','Grove, United Kingdom');


INSERT INTO driver (name, num, team, team_id)

VALUES
('Lewis Hamilton', '44', 'Mercedes', 1),
('Valtteri Bottas', '77', 'Mercedes', 1),
('Sebastian Vettel', '5', 'Ferrari', '2'),
('Kimi Raikkonen', '7', 'Ferrari', '2'),
('Daniel Ricciardo', '3', 'Red Bull Racing', '3'),
('Max Verstappen', '33', 'Red Bull Racing', '3'),
('Fernando Alonso', '14', 'McLaren', '4'),
('Stoffel Vandoorne', '2', 'McLaren', '4'),
('Nico Hulkenburg', '27', 'Renault', '5'),
('Carlos Sainz', '55', 'Renault', '5'),
('Pierre Gasly', '10', 'Toro Rosso', '6'),
('Brendon Hartley', '28', 'Toro Rosso', '6'),
('Romain Grosjean', '8', 'Haas', '7'),
('Kevin Magnussen', '20', 'Haas', '7'),
('Marcus Ericsson', '9', 'Sauber', '8'),
('Charles Leclerc', '16', 'Sauber', '8'),
('Sergio Perez', '11', 'Force India', '9'),
('Esteban Ocon', '31', 'Force India', '9'),
('Lance Stroll', '18', 'Williams', '10'),
('Sergey Sirotkin', '35', 'Williams', '10');

