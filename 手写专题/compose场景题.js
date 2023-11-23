/**
compose 就是实现一个像 koa 中间件执行顺序一样的函数
是一个场景题：
给你一数组，[{id: 1, name: 'bar', delay: 4}, {id2, name: 'bar2', delay: 1}]
然后给你一个序列，也是数组，例如 [1, 2]，里面都是上面的数组里存在的 id
需要实现一个函数，按上面的格式传入特定的序列，需要按 delay 间隔 console 出 name，
但是 name 需要累计，例如 console id 1，就是 bar，id2 就要变成 bar-bar2
 */

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function processSequence(data, sequence) {
  const idToNameMap = {};
  let accumulatedName = '';
  for (const item of data) {
    idToNameMap[item.id] = item.name;
  }

  async function processId(index) {
    // 退出递归条件
    if (index === sequence.length) {
      return;
    }

    // 处理的代码
    const id = sequence[index];
    const currentName = idToNameMap[id];
    accumulatedName += (accumulatedName === '' ? '' : '-') + currentName;
    console.log(accumulatedName);
    await delay(data.find((item) => item.id === id).delay);

    // 递进
    await processId(index + 1);
  }

  // 初始调用
  await processId(0);
}

const sequenceArray = [2, 3, 1];

const dataArray = [
  { id: 1, name: 'bar1', delay: 4000 },
  { id: 2, name: 'bar2', delay: 1000 },
  { id: 3, name: 'bar3', delay: 2000 },
]

processSequence(dataArray, sequenceArray);