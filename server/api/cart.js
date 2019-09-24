const router = require('express').Router()
const {ProductOrder, User, Order, Movie} = require('../db/models')

router.get('/:userId', async (req, res, next) => {
  try {
    const [order, wasCreated] = await Order.findOrCreate({
      where: {userId: req.params.userId, status: 'PENDING'},
      include: {model: Movie}
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {movieId, orderId, quantity} = req.body
    const data = await ProductOrder.create({quantity, movieId, orderId})
    res.status(201).json(data)
  } catch (err) {
    next(err)
  }
})

router.post('/checkout', async (req, res, next) => {
  try {
    const {email} = req.body
    console.log(email)
    const data = await User.create({email})
    res.status(201).json(data)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    await ProductOrder.destroy({
      where: {orderId: req.body.orderId, movieId: req.body.movieId}
    })
    res.status(202).end()
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    await ProductOrder.update(
      {
        quantity: req.body.quantity
      },
      {
        where: {
          movieId: req.body.movieId,
          orderId: req.body.orderId
        }
      }
    )
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

router.put('/checkout', async (req, res, next) => {
  try {
    await Order.update(
      {
        status: 'COMPLETE'
      },
      {
        where: {
          userId: req.body.userId,
          status: 'PENDING'
        }
      }
    )
    await Order.create({
      status: 'PENDING',
      userId: req.body.userId
    })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

module.exports = router
