// 实现一个功能
// root文件夹中 有image css js 以及 index.html 找出root中所有的文件夹 以及文件 塞到一个数组里面

const fs = require('fs')
const path = './root'
const dirArr = []

// 错误的写法
// 注意fs 里的方法是异步方法
/**
fs.readdir(path, (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  data.forEach(ele => {
    fs.stat(path + '/' + ele, {}, (err, datas) => {
      if (datas.isDirectory()) {
        dirArr.push(ele)
      }
    })
  })
  console.log(dirArr)
})
console.log(dirArr)
 * 
 */


// 1.改造for 循环 ，用递归方法
fs.readdir(path, (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  // data.forEach(ele => {
  // fs.stat(path + '/' + ele, {}, (err, datas) => {
  //   if (datas.isDirectory()) {
  //     dirArr.push(ele)
  //   }
  // })
  // })

  (function getDir(i) {
    console.log(i)
    if (i == data.length) {
      console.log(dirArr)
      return
    }
    fs.stat(path + '/' + data[i], {}, (err, datas) => {
      if (err) {
        console.log(err)
        return
      }
      if (datas.isDirectory()) {
        dirArr.push(data[i])
      }
      getDir(++i)
    })
  })(0)

  // console.log(dirArr)
})


function fn() {
  console.log("holle world")
}



var mycars = [
    '123appkeyNISbusinessCode',
    c.getPatientid(),
    'plaBranchCode41956645regIdnullsourceType2timestamp',
    'user_id999123'
  ],
  mycars1 = [c.getPatientid()],
  mycars3 = (new Date()).getTime(),
  a = '{md5}',
  b = com.xinglintech.nis.z.deploy.standard.EncryptionUtil.MD532Low('', mycars);

b = b.toUpperCase() // b转大写
url = url.replace(a, b).replace('{patientid}', mycars1).replace('{rx}', mycars3);
return url;