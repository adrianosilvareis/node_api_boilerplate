import { expect } from 'chai'
import supertest from 'supertest'

import app from '@/config/koa'

require('dotenv').config()

describe('samples tests', () => {
  let request
  let server

  beforeAll(() => {
    server = app.listen()
    request = supertest(server)
  })

  afterAll(async () => {
    server.close()
  })

  it('should receive 200 when run get: /sample/list and list exemple', async () => {
    const response = await request.get('/sample/list')
    expect(response.text).to.be.equal('list exemple')
    expect(response.statusCode).to.be.equal(200)
  })

  it('should receive 200 when run get: /sample/:id and get exemple: 1', async () => {
    const response = await request.get('/sample/1')
    expect(response.text).to.be.equal('get exemple: 1')
    expect(response.statusCode).to.be.equal(200)
  })

  it('should receive 200 when run post: /sample and object provider', async () => {
    const object = { name: 'Adriano' }

    const response = await request.post('/sample').send(object)
    expect(response.text).to.be.equal('create new register {"name":"Adriano"}')
    expect(response.statusCode).to.be.equal(200)
  })

  it('should receive 200 when run put: /sample/:id and object provider', async () => {
    const object = { id: 1, name: 'Adriano' }

    const response = await request.put('/sample/1').send(object)
    expect(response.text).to.be.equal(
      'update register of ID: 1, {"id":1,"name":"Adriano"}'
    )
    expect(response.statusCode).to.be.equal(200)
  })

  it('should receive 200 when run delete: /sample/:id', async () => {
    const response = await request.delete('/sample/1')
    expect(response.text).to.be.equal('delete 1 register')
    expect(response.statusCode).to.be.equal(200)
  })

  it('should receive 404 when not found register', async () => {
    const response = await request.delete('/sample/40')
    expect(response.text).to.be.equal('register not found')
    expect(response.statusCode).to.be.equal(404)
  })
})
