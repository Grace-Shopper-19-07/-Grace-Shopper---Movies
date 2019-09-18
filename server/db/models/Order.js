const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  // might be worth thinking about storing original price when it was bought
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'PENDING',
    validate: {
      // look into enum. Not the end of the world, but preferred
      isIn: [['PENDING', 'COMPLETE']]
    }
  }
})

module.exports = Order
