const sequelize = require('../db');
const {Model, DataTypes } = require('sequelize');

class User extends Model {
    
}

User.init({
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    streetAddress: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
        sequelize, 
        modelName: 'User'
  });

  module.exports = User;