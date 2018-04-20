// getting all drivers
function sendDriver(req, res) {
  res.render('driver/index', {
    driver: res.locals.driver
  })
}

// requesting one driver
function sendOneDriver(req, res) {
  res.render('driver/show', {
    driver: res.locals.driver
  })
}

// create a driver
function sendCreateDriver(req, res) {
  console.log('created successfully')
  res.json({
    status: 'created',
    driver: res.locals.driver
  })
}


module.exports = {
  sendDriver: sendDriver,
  sendOneDriver: sendOneDriver,
  sendCreateDriver: sendCreateDriver
}
