// exporting the postgres port and database chosen

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
 const config = {
    host: 'localhost',
    port: 5432,
    database: 'formula_test_db'
  }
 } else if (process.env.NODE_ENV === 'production') {
  const config = process.env.DATABASE_URL
}



module.exports = config;

// module.exports = {
//   host: 'localhost',
//   port: 5432,
//   database: 'formula_test_db' || 'DATABASE'
// }
