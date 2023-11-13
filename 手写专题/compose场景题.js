/*
compose 就是实现一个像 koa 中间件执行顺序一样的函数
是一个场景题：给你一数组，里面有一堆 id + name 这样的组合，
例如 [{id: 1, name: bar, delay: 4}, {id2, name: bar2, delay: 1}]
然后给你一个序列，也是数组，例如 [1, 2]，里面都是上面的数组里存在的 id
需要实现一个函数，按上面的格式传入特定的序列，需要按 delay 间隔 console 出 name，
但是 name 需要累计，例如 console id 1，就是 bar，id2 就要变成 bar-bar2
*/

function delays(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function processSequence(data, sequence) {
  let accumulatedNames = {}
  for (const id of sequence) {
    const item = data.find(entry => entry.id === id)

    if(item) {
      const {name, delay} = item

      // 计算
      accumulatedNames[id] = (accumulatedNames[id] || []).concat([name]).join('-')
      console.log(accumulatedNames[id])

      // delay
      await delays(delay)
    }
  }
}

const dataArray = [
  { id: 1, name: 'bar', delay: 400 },
  { id: 2, name: 'bar2', delay: 100 },
]

const sequenceArray = [1, 2];

processSequence(dataArray, sequenceArray);