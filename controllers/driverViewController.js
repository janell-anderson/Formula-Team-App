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

// creating a driver
function sendcreatedDriver(req, res) {
  res.json({
    status: 'ok',
    driver: res.locals.new
  });
}

// new create a driver
function redirectCreateDriver(req, res) {
console.log('redirecting to /driver/' + res.locals.driver.driver_id);
  res.redirect(`/driver/${res.locals.driver.driver_id}`)
}

// function sendNation(req, res) {
//   res.render('driver/new', {
//         driver: res.locals.driver
//   })
// }

function sendNewDriver(req, res) {
  res.render('driver/new', {
    driver: res.locals.driver
  })
}

function sendUpdateDriver(req, res) {
  res.render('driver/update', {
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
  sendcreatedDriver: sendcreatedDriver,
  redirectCreateDriver:redirectCreateDriver,
  sendNewDriver: sendNewDriver,
  sendUpdateDriver: sendUpdateDriver,
  sendDeleteDriver: sendDeleteDriver
}
