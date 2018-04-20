const db = require('../config/connection');

function getAllDrivers() {
  const driverPromise = db.manyOrNone(`
    SELECT *
    FROM driver
    `)
  return driverPromise;
}

function getOneDriver(id) {
  const driverPromise = db.one(`
    SELECT *
    FROM driver
    WHERE id = $1
    `, id);
  return driverPromise;
}

module.exports = {
  getAllDrivers,
  getOneDriver
}
