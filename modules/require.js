var obj = {
  get() {
    console.log("获取数据")
  },
  post() {
    console.log("提交数据")
  }
}

// exports.obj = obj
module.exports = obj