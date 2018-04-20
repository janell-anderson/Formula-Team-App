const nationdb = require('../models/nation');


// REMEMBER: some function names will have 's'
function getAllNations(req, res, next) {
  console.log('queried db');
  nationdb.getAllNations()
  .then(data => {
    console.log(data);
    res.locals.nation = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getNation(req, res, next) {
  console.log('got one');
  nationdb.getOneNation(req.params.id)
  .then(data => {
    console.log(data);
    res.locals.nation = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getDriverNation(req, res, next) {
  console.log('got it');
  nationdb.getDriverNation(req.params.id)
  .then(data => {
    console.log(data);
    res.locals.driver = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getAllNations: getAllNations,
  getNation: getNation,
  getDriverNation: getDriverNation
}
