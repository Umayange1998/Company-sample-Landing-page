require('dotenv').config();
console.log("username =",process.env.DB_USER)
module.exports ={
  "development": {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    "database": "companydb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
