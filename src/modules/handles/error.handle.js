module.exports = app => {
  app.on('error', (err, ctx) => {
    err.status = err.isBoom ? err.output.statusCode : err.status
    err.expose = true
  })
}
