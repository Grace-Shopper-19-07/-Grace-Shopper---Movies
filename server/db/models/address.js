const Sequelize = require('sequelize')
const db = require('../db')

const Addresss = db.define('address', {
    address1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zip: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.ENUM('SHIPPING, BILLING'),
        allowNull: false
    }
})

module.exports = Address