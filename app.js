// 引入 http 模块
const http = require('http')
const url = require('url')
/**
 * request 获取url传来的信息
 * response 给浏览器响应信息
 */
http
  .createServer(function (req, res) {
    // 设置响应头
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8',
    })

    // console.log(req.url) // 获取浏览器访问的地址

    if (req.url !== '/favicon.ico') {
      let userInfo = url.parse(req.url, true).query
      // console.log(userInfo)
      console.log('姓名：' + userInfo.name + userInfo.age + '212岁')

      res.write('姓名：' + userInfo.name + userInfo.age + '212岁')
    }
    // 给页面输出一句话，并结束响应
    res.end()
  })
  .listen(8081) // 8081： 端口
