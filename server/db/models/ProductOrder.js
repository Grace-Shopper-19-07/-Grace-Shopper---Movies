const Sequelize = require('sequelize')
const db = require('../db')

const ProductOrder = db.define('productOrder', {
    pid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model: 'Movies',
            key: 'movieId'
        }
    },
    oid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model: 'Orders',
            key: 'orderId'
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})

module.exports = ProductOrder