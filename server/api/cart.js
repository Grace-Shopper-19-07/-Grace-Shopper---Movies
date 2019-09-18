const router = require('express').Router()
const {ProductOrder, User, Order, Movie} = require('../db/models')

// Two options for guest cart: cookies & sessions OR local storage. Look into both and pick one, but have a justifiable reason for the one you choose.
router.get('/:userId', async (req, res, next) => {
  try {
    const items = await Order.findOne({
      where: {userId: req.params.userId, status: 'PENDING'},
      include: {model: Movie}
    })
    res.json(items)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {movieId, orderId, quantity} = req.body
    res
      .status(201)
      .json(await ProductOrder.create({quantity, movieId, orderId})) // MY personal preference: store this into a variable instead of awaiting inside of your response
    // Also not sure if you'd catch the error the way you're using await in the .json
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  // Error: order.updateAttirbutes is not a function --- WHY!!??
  try {
    await ProductOrder.findOne({
      where: {movieId: req.body.movieId, orderId: req.body.orderId}
    })
      .then((
        order // I strongly suggest not mixing up .then & async/await. You're not error handling properly here
      ) =>
        order.updateAttributes({
          quantity: req.body.quantity
        })
      )
      .then(order => res.json(order))
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    await ProductOrder.destroy({
      where: {orderId: req.body.orderId, movieId: req.body.movieId}
    })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

module.exports = router
