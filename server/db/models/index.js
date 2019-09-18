const User = require('./user')
const Movie = require('./Movie')
const Order = require('./Order')
const ProductOrder = require('./ProductOrder')

User.hasMany(Order)
Order.belongsTo(User)

Movie.belongsToMany(Order, {through: 'ProductOrder'})
Order.belongsToMany(Movie, {through: 'ProductOrder'})

module.exports = {
  User,
  Movie,
  Order,
  ProductOrder
}
