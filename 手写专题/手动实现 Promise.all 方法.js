/**
promise.all的特点如下：
1、接收一个Promise实例的数组或具有Iterator接口的对象
2、如果元素不是Promise对象，则使用Promise.resolve转为Promise对象
3、如果全部成功，状态编委resolved，返回值将组成一个数组传回给回调
4、只要有一个失败，状态就变成rejected，返回值将直接传递回调all()的返回值也是新的Promise对象
 * */ 

_Promise.prototype.all = (promiseList) => {
}



















// 假设已经实现了_Promise
_Promise.prototype.all = (promiseList) => {
  return new _Promise((resolve, reject) => {
    if(!Array.isArray(promiseList)) {
      reject(new TypeError('参数错误！'))
    }
    let count = 0
    let valueList = new Array(promiseList.length)
    promiseList.forEach((promise, index) => {
      _Promise.resolve(promise).then(result => {
        count++
        // 每次将返回的结果收集起来
        valueList[index] = result
        if(count === promiseList.length) {
          resolve(valueList)
        }
      }, err => reject(err))
    });
  })
}