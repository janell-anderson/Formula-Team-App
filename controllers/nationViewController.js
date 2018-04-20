function sendNations(req, res) {
  console.log('successful');
  res.render('nation/index', {
    nation: res.locals.nation
  })
}

function sendDriverNation(req, res) {
  res.render('nation/show', {
    nation:res.locals.nation,
    driver:res.locals.driver
  })
}

function sendOneNation(req, res) {
  res.render('nation/show', {
    nation: res.locals.nation
  })
}


module.exports = {
  sendNations: sendNations,
  sendDriverNation: sendDriverNation,
  sendOneNation: sendOneNation
}
