/**
 * 并发promise
 * 
 * @param {*} array 待执行的函数列表
 * @param {*} limit 并发限制
 */
async function asyncPool(array, limit) {
  // 存储Promise的执行结果
  const res = []
  // 正在执行的promise
  const executing = []

  for (const item of array) {
    const p = item
    res.push(p)
    if(limit <= array.length) {
      p.then(() => executing.splice(0, 1))
      executing.push(p)
      if(executing.length >= limit) await Promise.race(executing)
    }
  }

  return Promise.all(res)
}

const timeout = (order, time) => new Promise(resolve => setTimeout(resolve(console.log(order)), time))

const arr = [
  timeout(1, 100),
  timeout(2, 200),
  timeout(3, 300),
  timeout(4, 400),
  timeout(5, 500),
  timeout(6, 500),
  timeout(7, 400),
  timeout(8, 300),
  timeout(9, 200),
  timeout(10, 100),
]
asyncPool(arr, 10).then(result => console.log(result))