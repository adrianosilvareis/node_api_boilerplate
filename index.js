import dotenv from 'dotenv'

import app from './src/config/koa'

dotenv.config() // load .env file, verify .env.sample

const { HOST = 'localhost', PORT = 3000 } = process.env

app.listen(PORT, () => console.info(`server listen on: http://${HOST}:${PORT}`))
