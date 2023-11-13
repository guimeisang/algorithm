/**
 * 设定如下对应关系
     A: 1,
     B: 2,
     C: 3,
     ...
     Z: 26,
     AA: 27,
     AB: 28,
     AC: 29,
     ...
     AZ: 52,
     BA: 53,
     BB: 54,
     ...
     ZZ: 702
     AAA: 703
     AAB: 704
     ...
 * 写一个转换函数，根据上面规则把一个字符串转换为数字
 * str2Int('ABCDEFG') → 334123303
 */

function str2Int(str) {
  let length = str.length
  let sum = 0

  for (let i = 0; i < str.length; i++) {
    const temp = str.charCodeAt(i) - 'A'.charCodeAt(0);
    if(temp >= 26 || temp < 0) {
      console.log('error')
      return -1
    }
    sum = 26 * sum + temp + 1
  }
  return sum
}

console.log(str2Int('ABCDEFG'))