// 实现一个功能
// 判断服务器中是否含有upload目录，没有的化创建目录，有的话不做操作


const fs = require('fs')
const path = './upload'


fs.stat(path, (err, data) => {
  if (err) {
    console.log(err)
    // 执行创建目录
    mkdir(path)
    return
  }
  if (!data.isDirectory()) {
    // 首先删除文件，再执行创建目录
    fs.unlink(path, (err) => {
      if (!err) {

        mkdir(path)
      } else {
        console.log('请检查传入数据是否正确')
      }
    })
  }

})

// 创建目录的方法
function mkdir(dir) {
  return fs.mkdir(dir, (err) => {
    if (err) {
      console.log(err)
      return
    }
  })
}