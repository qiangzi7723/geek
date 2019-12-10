const Router = require('koa-router')
const router = new Router()

router.get('/ping', async function(ctx, next) {
    ctx.body = {
        data:'pong'
    }
})

module.exports = router