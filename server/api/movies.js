const router = require('express').Router()
const {Movie} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const movie = await Movie.findAll()
    res.json(movie)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id)
    res.json(movie)
  } catch (err) {
    next(err)
  }
})

module.exports = router
