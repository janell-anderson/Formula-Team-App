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

function createdDriver(req, res) {
  res.render('driver/show', {
    driver: res.locals.driver
  })
}

// new create a driver
// function sendCreateDriver(req, res) {
//   driver = res.locals.driver
//   res.redirect(`driver/${driver.id}`);
// }

// function sendNation(req, res) {
//   res.render('driver/new', {
//         driver: res.locals.driver
//   })
// }

function sendUpdateDriver(req, res) {
  console.log('successfully updated')
  res.json({
    status: 'updated',
    driver: res.locals.driver
  })
}

function sendDeleteDriver(req, res) {
  console.log('It has been deleted')
  res.json({
    status: 'deleted',
    driver: res.locals.driver
  })
}


module.exports = {
  sendDriver: sendDriver,
  sendOneDriver: sendOneDriver,
  createdDriver: createdDriver,
  sendUpdateDriver: sendUpdateDriver,
  sendDeleteDriver: sendDeleteDriver
}
