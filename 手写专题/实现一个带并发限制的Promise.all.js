/**
 * 并发promise
 * 
 * @param {*} array 待执行的函数列表
 * @param {*} limit 并发限制
 */
// async function asyncPool(array, limit) {
//   // 存储Promise的执行结果
//   const res = []
//   // 正在执行的promise
//   const executing = []

//   for (const item of array) {
//     const p = item
//     res.push(p)
//     if(limit <= array.length) {
//       p.then(() => executing.splice(0, 1))
//       executing.push(p)
//       if(executing.length >= limit) await Promise.race(executing)
//     }
//   }

//   return Promise.all(res)
// }

function asyncPool(poolLimit, array, fn) {
  let i = 0
  // 存储Promise的执行结果
  const ret = []
  // 正在执行的promise
  const executing = []
  // 递归函数
  const dp = function() {
    // 边界处理
    if(array.length === i) return Promise.resolve()
    // 每次调用dp，初始化一个promise
    const item = array[i++]
    const p = Promise.resolve().then(() => fn(item, array))
    // 放入Promise数组内
    ret.push(p)
    const e = p.then(() => executing.splice(executing.indexOf(e), 1))
    executing.push(e)
    let r = Promise.resolve()
    // race 
    if (executing.length >= poolLimit) r = Promise.race(executing);
    return r.then(() => dp());
  }
  return dp().then(() => Promise.all(ret))
}

const timeout = (i) => new Promise(resolve => setTimeout(() => resolve(i), i))

const arr = [100, 200, 300, 400, 500, 600, 700, 800, 900]

asyncPool(5, arr, timeout).then(result => console.log(result))