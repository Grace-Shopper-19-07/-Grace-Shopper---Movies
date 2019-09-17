const User = require('./user')
const Movie = require('./Movie')
const Order = require('./Order')
const ProductOrder = require('./ProductOrder')

// Address.belongsToMany(User)
// User.belongsToMany(Address)

User.hasOne(Order)
Order.belongsTo(User)

Movie.belongsToMany(Order, {through: 'ProductOrder'})
Order.belongsToMany(Movie, {through: 'ProductOrder'})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Movie,
  Order,
  ProductOrder
}
