const Sequelize = require('sequelize')
const db = require('../db')

const ProductOrder = db.define('ProductOrder', {
  // remove unused comments
  // pid: {
  //     type: Sequelize.UUID,
  //     allowNull: false,
  //     references: {
  //         model: 'movies',
  //         key: 'id'
  //     }
  // },
  // oid: {
  //     type: Sequelize.UUID,
  //     allowNull: false,
  //     references: {
  //         model: 'orders',
  //         key: 'id'
  //     }
  // },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

module.exports = ProductOrder
