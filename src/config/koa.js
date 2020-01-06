import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import helmet from 'koa-helmet'

import modules from '../modules'

const app = new Koa()

app.use(bodyParser())
app.use(helmet())

modules(app)

export default app
