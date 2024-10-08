/**
 * This code creates an ORM mapping for user database (User Model)
 */

const sequelize  = require("../config/db");
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  // Model attributes
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Validate that it is a proper email
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
  instagram : {
    type : DataTypes.STRING,
    allowNull : true,
  },

  facebook : {
    type : DataTypes.STRING,
    allowNull : true,
  },
  image_url : {
    type : DataTypes.STRING,
    allowNull : true,
  }

});

module.exports = User;

