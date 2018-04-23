// calling promises and local host for Postgres
const pgp = require('pg-promise')();
const config = require('./dbConfig');



// const db = pgp(config);


  if (process.env.NODE_ENV === 'development' || !proecess.env.NODE_ENV) {
    const db = pgp(config);
  } else if (process.env.NODE_ENV === 'production') {
    const db = pgp(process.env.DATABASE_URL);
  }


module.exports = db;
