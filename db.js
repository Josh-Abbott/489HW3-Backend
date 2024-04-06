const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/petitiondb1.sqlite'
})

module.exports = sequelize