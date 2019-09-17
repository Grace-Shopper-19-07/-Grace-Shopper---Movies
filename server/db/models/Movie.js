const Sequelize = require('sequelize')
const db = require('../db')

const Movie = db.define('movie', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 0.00
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    inventory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})

module.exports = Movie