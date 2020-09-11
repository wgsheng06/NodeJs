// 实现一个功能
// 判断服务器中是否含有upload目录，没有的化创建目录，有的话不做操作

const mkdirp = require('mkdirp')

mkdirp('./upload')
mkdirp('./upload/aaa/xxx')
