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

// take created driver back to driver index
function redirectCreateDriver(req, res) {
console.log('redirecting to /driver/' + res.locals.driver);
  res.redirect(`/driver/${res.locals.driver.id}`)
}

// function redirectDriverIndex(req, res) {
//   console.log('redirecting to /driver');
//   res.redirect('/driver')
// }

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

function sendEditDriver(req, res) {
  driver = res.locals.driver;
  res.render(`driver/update`, {
    driver: res.locals.driver
  })
}

function sendUpdateDriver(req, res) {
  driver: res.locals.driver
  res.redirect(`/driver/${res.locals.driver.id}`);
}

function sendDeleteDriver(req, res) {
  console.log('It has been deleted')
    res.redirect(`/driver/${res.locals.driver.id}`)
  // res.json({
  //   status: 'deleted',
  //   driver: res.locals.driver
  // })
}


// exporting all information towards the views
module.exports = {
  sendDriver: sendDriver,
  sendOneDriver: sendOneDriver,
  sendcreatedDriver: sendcreatedDriver,
  redirectCreateDriver:redirectCreateDriver,
  // redirectDriverIndex: redirectDriverIndex,
  sendNewDriver: sendNewDriver,
  sendEditDriver: sendEditDriver,
  sendUpdateDriver: sendUpdateDriver,
  sendDeleteDriver: sendDeleteDriver
}
