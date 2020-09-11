var http = require('http');
let {
  formatApi
} = require('./modules/tools');

let request = require('axios')
request.get()

let db = require('db'); // db 引入，在db文件夹输入 npm init --yes.生成package.json,配置main属性指向 db.js
db.find()




http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  var api = formatApi('api/focus')
  res.write(api)

  res.end();
}).listen(8081);