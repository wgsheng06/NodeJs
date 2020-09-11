/**
 *
 * 1.fs.stat  判断是文件还是目录 文件data.isFile 目录data.isDirectory
 * 2. fs.mkdir 创建目录
 * 3. fs.writeFile 创建及写入文件 不存在就创建+写入；已存在就写入内容
 * 4. fs.appendFile 创建及写入文件 不存在就创建+写入；已存在就‘追加’内容
 * 5. fs.readFile 读取文件
 * 6. fs.readDir
 * 7. fs.rename 重命名 或者 移动文件
 * 8. fs.rmdir  删除目录
 * 9. fs.unlink  删除文件
 */

const fs = require('fs')
/**
 * 
fs.stat('./html', {}, (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`html是文件：${data.isFile()}`)
  console.log(`html是目录：${data.isDirectory()}`)
})


 */

/**
fs.mkdir('./css', {}, (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('创建成功')
})

 * 
 */
/**
fs.writeFile('./html/index.html', '哈哈哈', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('创建成功')
})
 * 
 */
/**
fs.appendFile('./css/base.css', 'body{color:res}123', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('创建成功')
})

 * 
 */

/**
fs.readFile('./html/index.html', (err, data) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(data.toString()) // 转成string类型
})
 *
 */

/**
fs.readdir('./html', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(data) // 转成string类型
})
  * 
  */


// fs.rename('./css/aaa.css', './css/index.css', (err) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('重命名成功')
// })

// fs.rename('./html/lala.css', './css/index.css', (err) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('重命名成功')
// })




fs.unlink("./aaaa/index.html", (err) => {

  if (err) {
    console.log(err)
    return
  }
  console.log('删除文件成功')
})

fs.rmdir("./aaaa", (err) => {

  if (err) {
    console.log(err)
    return
  }
  console.log('删除目录成功')
})