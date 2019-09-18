const Sequelize = require('sequelize')
const db = require('../db');

const Movie = db.define('movie', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    director: {
        type: Sequelize.STRING,
        allowNull: false
    },

    genre: {
        type: Sequelize.STRING,
        allowNull: false
    },

    yearReleased: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, 
    price: {
        type: Sequelize.NUMBER,
        allowNull: false
    }, 
    image: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    rating: {
        type: Sequelize.NUMBER,
        validate: {
            max: 100,
            min: 0
        }
    },

    reviews: {
        type: Sequelize.TEXT,
        defaultValue: null
    },

    actors: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    duration: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
})

module.exports = {Movie}