const driverRouter = require('express').Router();
const driverController = require('../controllers/driverController');
const driverViewController = require('../controllers/driverViewController');

const driverdb = require('../models/driver');

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

function updated(req, res, next) {
  req.body.driver_id = req.params.id;
  quoteDb.updateOne(req.body)
 .then(data => {
   console.log(data);
   res.locals.driver = data;
   next();
 })
 .catch(err => {
   next(err)
 })
}

driverRouter.route('/')
  .get(driverController.getAllDrivers, driverViewController.sendDriver, sendError)
  .post(driverController.createOne, driverViewController.redirectCreateDriver)

driverRouter.route('/new', driverViewController.sendNewDriver)

driverRouter.route('/:id')
  .get(driverController.getOneDriver, driverViewController.sendOneDriver)
  .put(driverController.updateOne, driverViewController.sendUpdateDriver)
  .delete(driverController.destroyOne, driverViewController.sendDeleteDriver)

  module.exports = driverRouter;
