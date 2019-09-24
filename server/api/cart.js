const router = require('express').Router()
const {ProductOrder, User, Order, Movie} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const [order, wasCreated] = await Order.findOrCreate({
      where: {userId: req.user.id, status: 'PENDING'},
      include: {model: Movie}
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body)
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
    const data = await Order.create({email: email, status: 'COMPLETE'})
    res.status(201).json(data)
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

router.delete('/', async (req, res, next) => {
  try {
    console.log('router.delete')
    await ProductOrder.destroy({
      where: {orderId: req.body.orderId, movieId: req.body.movieId}
    })
    res.status(202).end()
  } catch (err) {
    next(err)
  }
})

router.put('/checkout', async (req, res, next) => {
  console.log('CHECKOUT', req.body)
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

    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

module.exports = router
