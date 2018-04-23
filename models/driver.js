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

function createDriver(driver) {
  const driverPromise = db.one(`
    INSERT INTO driver
    (carnum, name, team, nationality)
    VALUES ($/carnum/, $/name/, $/team/, $/nationality/)
    RETURNING *
    `, driver);
  return driverPromise;
}

function updateDriver(driver) {
  const driverPromise = db.one(`
    UPDATE driver
    SET carnum = $/carnum/, name = $/name/, team = $/team/, nationality = $/nationality/
    WHERE id = $/id/
    RETURNING *
    `, driver);
  return driverPromise;
}

function deleteDriver(id) {
  const driverPromise = db.none(`
    DELETE FROM driver
    WHERE id = $1
    `, id);
  return driverPromise;
}

module.exports = {
  getAllDrivers,
  getOneDriver,
  createDriver,
  updateDriver,
  deleteDriver
}
