// 标准的实现方式
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

const arr = [{id: 1, name: 'bar', delay: 4}, {id2: 2, name: 'bar2', delay: 2}, {id3: 3, name: 'bar3', delay: 1}]

console.log(compose(arr))

// 另外一种实现方式
// const middlewares = []
// async function run() {
//   const middleware = middlewares.shift()
//   await (middleware && middleware({}, run))
// }
// run()