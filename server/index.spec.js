// const request = require('supertest')
// const app = require('./index')
// const {expect} = require('chai')
// const db = require('.db')
// const seedFile = require('../seed.js')

// describe('GET /movies', () => {
//   before(async () => {
//     await db.sync({force: true})
//   })

//   it('should return list of users', async () => {
//     const res = await request(app).get('/api/movies')
//     expect(res.status).to.equal(200)
//     expect(res.body.length).to.equal(seedFile.movies.length)
//   })
// })
