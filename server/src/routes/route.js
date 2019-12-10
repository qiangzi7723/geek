const Router = require('koa-router')
const mock = require('./mock/route')
const router = new Router()

router.use('/mock', mock.routes())
module.exports = router