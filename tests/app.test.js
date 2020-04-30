const app = require('../app')
const request = require('supertest')

describe('app.js', () => {
  it('GET / should return status 200, and endpoints as a string', async () => {
    const body = await request(app)
      .get('/')
      .expect(200)
    expect(body.text).toEqual(
    `
        ROUTES:
        1. GET: /add,
        2. POST: /todos,
        3. PATCH: /edit,
        4. DELETE: /delete
        `
    )
  })
})
