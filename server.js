const express = require('express')
const next = require('next')
const { parse } = require('url')
const config = require('./config')
const LRUCache = require('lru-cache')
const { createReadStream } = require('fs')
const dev = process.env.NODE_ENV !== config.mode
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 10000 * 60 * 60,
})

app.prepare()
.then(() => {
  const server = express()

  server.get('/', (req, res) => {
    renderAndCache(req, res, '/', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on ${config.path}:${config.port}`)
  })
})

function getCacheKey (req) {
  return `${req.url}`
}

function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  if (ssrCache.has(key)) {
    res.send(ssrCache.get(key))
    return
  }

  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      ssrCache.set(key, html)
      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}
