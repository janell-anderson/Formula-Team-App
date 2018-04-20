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

driverRouter.route('/')
  .get(driverController.getAllDrivers, driverViewController.sendDriver, sendError)
  .post(driverController.createOne, driverViewController.createdDriver)

// driverRouter.route('/new')

driverRouter.route('/:id')
  .get(driverController.getOneDriver, driverViewController.sendOneDriver)
  .put(driverController.updateOne, driverViewController.sendUpdateDriver)
  .delete(driverController.destroyOne, driverViewController.sendDeleteDriver)




  module.exports = driverRouter;
