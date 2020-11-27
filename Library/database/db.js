const { Sequelize } = require('sequelize');
const { database } = require('../config')
// config mysql database
const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password,{
        host: database.host,
        dialect: "mysql"
    }
);

module.exports = sequelize