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
    SELECT * FROM nationality
    JOIN driver
    ON driver.nation_id = nationality.id
    WHERE driver.nation_id = $1
    `, id);
  return nationPromise;
}

module.exports = {
  getAllNations,
  getOneNation,
  getDriverNation
}
