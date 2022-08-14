const Sequelize = require ('sequelize')

module.exports = new Sequelize (
  process.env.DB_NAME, // Database Name
  process.env.DB_USER, // Database UserName
  process.env.DB_PASSWORD,// PasswordForCreatedDatabase
    {
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT
    } 
)
