const express = require('express')
const next = require('next')
const config = require('./config')
const dev = process.env.NODE_ENV !== config.mode
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on ${config.path}:${config.port}`)
  })
})
