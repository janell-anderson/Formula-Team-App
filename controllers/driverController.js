const driverdb = require('../models/driver');

function getAllDrivers(req, res, next) {
  console.log('gotcha');
  driverdb.getAllDrivers()
  .then(data => {
    console.log(data);
    res.locals.driver = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getOneDriver(req, res, next) {
  console.log('yay');
  driverdb.getOneDriver()
  .then(data => {
    console.log(data);
    res.locals.driver = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}
module.exports ={
  getAllDrivers: getAllDrivers,
  getOneDriver: getOneDriver
}
