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
  driver = res.locals.driver
  res.redirect(`driver/${driver.id}`);
}

function sendNation(req, res) {
  res.render('driver/new', {
    driver: res.locals.newDriver
  })
}

// function sendUpdateDriver(req, res) {
//   console.log('successfully updated')
//   res.json({
//     status: 'updated',
//     driver: res.locals.driver
//   })
// }

// function deleteDriver(req, res)


module.exports = {
  sendDriver: sendDriver,
  sendOneDriver: sendOneDriver,
  sendCreateDriver: sendCreateDriver,
  // sendUpdateDriver: sendUpdateDriver
  sendNation: sendNation
}
