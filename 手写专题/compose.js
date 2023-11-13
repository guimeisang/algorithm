/**
 * Compose middleware return
 * 
 * @param {Array} middleware 
 * @returns {Function}
 */

function compose(middleware) {
  if(!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array')
  for (const fn of middleware) {
      if(typeof fn != 'function') throw new TypeError('Middleware must be composed of functions!')
  }

  return function (context, next) {
    let index = -1
    return dispatch(0)
    function dispatch(i) {
      if(i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if(i === middleware.length) fn = next
      if(!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
      } catch (error) {
        return Promise.reject(error)
      } 
    }
  }
}

// 另外一种实现方式
const middlewares = []
async function run() {
  const middleware = middlewares.shift()
  await (middleware && middleware({}, run))
}
run()


/**
compose 就是实现一个像 koa 中间件执行顺序一样的函数
是一个场景题：
给你一数组，里面有一堆 id + name 这样的组合，
例如 [{id: 1, name: bar, delay: 4}, {id2, name: bar2, delay: 1}]
然后给你一个序列，也是数组，例如 [1, 2]，里面都是上面的数组里存在的 id
需要实现一个函数，按上面的格式传入特定的序列，需要按 delay 间隔 console 出 name，
但是 name 需要累计，例如 console id 1，就是 bar，id2 就要变成 bar-bar2

 */