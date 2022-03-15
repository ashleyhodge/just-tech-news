// import the sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to or database, pass in your mysql information
const sequelize = new Sequelize('just_tech_news_db', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;