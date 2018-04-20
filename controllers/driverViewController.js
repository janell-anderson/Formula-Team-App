function sendDriver(req, res) {
  res.render('driver/index', {
    driver: res.locals.driver
  })
}

function sendOneDriver(req, res) {
  res.render('driver/show');
}


module.exports = {
  sendDriver: sendDriver,
  sendOneDriver: sendOneDriver
}
