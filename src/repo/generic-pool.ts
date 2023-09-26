// 队列方法
export maxNum = 1

interface Queue {
  Fn: Function
  sign?: string | number
}

const { maxNum } = require("./configs")
const queueList: any = [] // 任务队列
let curNum = 0 // 当前执行的任务数

// 队列处理器，将超过允许并并行数的任务抛进队列中等待执行
function queueRun(business: Function, ...arg: any) {
  return new Promise(async (resolve) => {
    const Fn = async => resolve(await business(...arg))
    const sign = { ...arg }[2] // 标记任务的参数，后面会用到
    if(curNum >= maxNum) {
      queueList.push({sign, Fn})
    } else {
      await run(Fn)
    }
  })
}

// 任务执行器，将队列中等待的任务取出执行
function run(Fn: Function) {
  curNum++
  Fn().then((res: any) => {
    curNum--
    // 如果还存在任务，继续取出执行
    if(queueList.length > 0) {
      const Task: Queue = queueList.shift()
      run(Task.Fn)
    }
    return res
  })
}

module.exports = { queueRun, queueList }

// 下面是应用
