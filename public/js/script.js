const driverRouter = require('../../routes/driverRouter');

function deleteDriver(url) {
  return fetch(url, {
    method:'delete'
  }).then(res => {
    res.send('Deleted successfully')
  })
}
