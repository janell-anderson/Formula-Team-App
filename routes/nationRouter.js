// importing express and controllers
const nationRouter = require('express').Router();
const nationController = require('../controllers/nationController');
const nationViewController = require('../controllers/nationViewController');

// importing models
const nationdb = require('../models/nation');

// Error
function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

nationRouter.route('/')
  .get(nationController.getAllNations, nationViewController.sendNations, sendError)

nationRouter.route('/:id')
  .get(nationController.getNation, nationController.getDriverNation, nationViewController.sendDriverNation)


module.exports = nationRouter;
