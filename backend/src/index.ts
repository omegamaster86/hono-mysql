import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import connection from './db.js'

const app = new Hono()

app.get('/', (c) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM t_users', (err, results) => {
      if (err) {
        console.error('クエリエラー:', err)
        return reject(c.text('エラーが発生しました', 500))
      }
      resolve(c.json(results))
    })
  })
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
