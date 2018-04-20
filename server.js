// caller developer dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

// importing express.js
const app = express();

// calling port 3000
// may change it to process.env.PORT to call it not only locally but on a hosted server which I believe will be Heroku
const PORT = 3000;

// will be calling the Router here
const nationRouter = require('./routes/nationRouter');
const driverRouter = require('./routes/driverRouteR');

// logger and body-parser will be imported here
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// calling ejs views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// rendering of views pages will be
// app.get('/', (req, res) => {
//   res.render('/index');
// });

app.get('/', (req, res) => {
  res.render('home/index');
});

// app.get('/nation', (req, res) => {
//   res.send('nation/index');
// });

// calling the use of routers with there specific path will be here
app.use('/nation', nationRouter);
app.use('/driver', driverRouter);

// the app will listen to port localhost 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


