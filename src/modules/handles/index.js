import fs from 'fs'
import path from 'path'

export default app => {
  fs.readdirSync(path.resolve(__dirname))
    .filter(file => /.handle.js$/.test(file))
    .forEach(route => require(path.resolve(__dirname, route))(app))
}
