import fs from 'fs'
import path from 'path'

export default app => {
  fs.readdirSync(path.resolve(__dirname, 'routes'))
    .filter(file => /routes.js$/.test(file))
    .forEach(route => require(path.resolve(__dirname, 'routes', route))(app))
}
