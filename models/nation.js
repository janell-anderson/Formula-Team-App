const db = require('../config/connection');

// REMEMBER: some function names will have 's'

// calling all teams
function getAllNations() {
  const nationPromise = db.manyOrNone(`
    SELECT *
    FROM nationality
    `);
  return nationPromise;
}

// calling each Nation by personal id
function getOneNation(id) {
  const nationPromise = db.one(`
    SELECT *
    FROM nationality
    WHERE id = $1
    `, id);
  return nationPromise;
}

function getDriverNation(id) {
  const nationPromise = db.any(`
    SELECT * FROM driver
    JOIN nationality ON nationality.id = driver.nationality_id
    WHERE driver.nationality_id = $1
    `, id);
  return nationPromise;
}

module.exports = {
  getAllNations,
  getOneNation,
  getDriverNation
}
