/**
 * Created by zj on 2017/8/31.
 */
var koa = require('koa');
var app = new koa();
var router = require('koa-router')();
var koaBody = require('koa-body')();
// 首页 —— 广告（超值特惠）
var homeAdData = require('./topList/top_list.js')
router.get('/api/toplist', function *(next) {
  this.body = homeAdData
});
app.use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
