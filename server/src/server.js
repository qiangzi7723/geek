const Koa = require('koa')
const koaLogger = require('koa-logger')
const koaBody = require('koa-body')
const route = require('./routes/route')
const resMiddleware = require('./middlewares/res')
const cors = require('@koa/cors')
const app = new Koa()
const port = 3000
require('koa-qs')(app, 'first')
let corsConfig = {
  origin: '*',
  credentials: true // 支持跨域cookie
}
app.use(cors(corsConfig)) // 根据前端具体情况，设定指定的域名
app.use(koaLogger())
app.use(koaBody())
app.use(resMiddleware())
app.use(route.allowedMethods())
app.use(route.routes())

module.exports = app.listen(port, () => console.log(`Listen on ${port}...`))
