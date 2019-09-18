const Sequelize = require('sequelize')
const db = require('../db')

const ProductOrder = db.define('ProductOrder', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

module.exports = ProductOrder
