import { notFound } from 'boom'

export default class SampleController {
  constructor(SampleModel) {
    this.SampleModel = SampleModel
  }

  list(ctx, next) {
    try {
      ctx.body = 'list exemple'
    } catch (error) {
      ctx.throw(error)
    }
  }

  get(ctx, next) {
    try {
      const { id } = ctx.params
      ctx.body = `get exemple: ${id}`
    } catch (error) {
      ctx.throw(error)
    }
  }

  create(ctx, next) {
    try {
      const body = ctx.request.body
      ctx.body = `create new register ${JSON.stringify(body)}`
    } catch (error) {
      ctx.throw(error)
    }
  }

  update(ctx, next) {
    try {
      const { id } = ctx.params
      const body = ctx.request.body
      ctx.body = `update register of ID: ${id}, ${JSON.stringify(body)}`
    } catch (error) {
      ctx.throw(error)
    }
  }

  delete(ctx, next) {
    try {
      const { id } = ctx.params
      if (id !== '1') throw notFound('register not found')
      ctx.body = `delete ${id} register`
    } catch (error) {
      ctx.throw(error)
    }
  }
}
