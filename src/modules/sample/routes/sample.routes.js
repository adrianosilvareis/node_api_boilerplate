import Router from 'koa-router'

import SampleController from '../controller/sample.controller'
import SampleModels from '../models/sample.models'

const sample = new SampleController(SampleModels)

const router = new Router({
  prefix: '/sample'
})

router
  .get('/list', (ctx, next) => sample.list(ctx, next))
  .get('/:id', (ctx, next) => sample.get(ctx, next))
  .post('/', (ctx, next) => sample.create(ctx, next))
  .put('/:id', (ctx, next) => sample.update(ctx, next))
  .delete('/:id', (ctx, next) => sample.delete(ctx, next))

// this is the only file that needs to be in esm (module.exports), why index should require this module
module.exports = app => {
  app.use(router.routes()).use(router.allowedMethods())
}
