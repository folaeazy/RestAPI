 /** This code creates a database config for an Sqlite filesystem database */

const { Sequelize } = require("sequelize");

const  sequalize = new Sequelize({
    dialect : "sqlite",
    storage : "./database.sqlite"

});

module.exports = sequalize;