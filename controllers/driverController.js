const driverdb = require('../models/driver');
const nationdb = require('../models/nation');

// get all drivers from table
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

// get one driver
function getOneDriver(req, res, next) {
  console.log('yay');
  driverdb.getOneDriver(req.params.id)
  .then(data => {
    console.log(data);
    res.locals.driver = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

// get nations from nation router
function getNation(req, res, next) {
  nationdb.getNation()
  .then(data => {
    res.locals.nation = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

// create a driver
function createOne(req, res, next) {
  console.log(req.body);
  driverdb.createDriver(req.body)
  .then(data => {
    console.log(data);
    res.locals.newDriver = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

// update a driver
function updateOne(req, res, next) {
  req.body.id = req.params.id;
  driverdb.updateDriver(req.body)
  .then(data => {
    console.log(data);
    res.locals.driver = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

// delete a driver
function destroyOne(req, res, next) {
  driverdb.deleteDriver(req.params.id)
  .then(data => {
    console.log(data);
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports ={
  getAllDrivers: getAllDrivers,
  getOneDriver: getOneDriver,
  getNation: getNation,
  createOne: createOne,
  updateOne: updateOne,
  destroyOne: destroyOne
}
