/**
 * @param {number} num
 * @return {number}
 */
// 动态规划，自下而上解决问题，从已知的case出发，储存前面的状态，迭代出最后的结果。动态规划就是想办法不用递归，利用
// 递推关系用填表格的方式顺序计算。每个dp项的值其实等于一个递归子调用的结果
// 1 dp[i] = dp[i-1]; 2 dp[i] = dp[i-2] + dp[i-1]
var translateNum = function(num) {
  const str = num.toString()
  const n = str.length
  const dp = new Array(n + 1)
  dp[0] = 1
  dp[1] = 1
  for(let i = 2; i < n + 1; i++) {
    const temp = Number(str[i-2] + str[i-1])
    if(temp >= 10 && temp <= 25) {
      dp[i] = dp[i-1] + dp[i-2]
    }else {
      dp[i] = dp[i-1]
    }
  }
  return dp[n]
};


// 递归：自上而下解决问题，等到下面返回上来的结果
//  var translateNum = function(num) {
//     const str = num.toString()
//     const dfs = (str, pointer) => {
//       if(pointer > str.length - 1) return 1

//       const temp = Number(str[pointer] + str[pointer + 1])
//       if(temp >=10 && temp <= 25) {
//         return dfs(str, pointer + 1) + dfs(str, pointer + 2)
//       }else {
//         return dfs(str, pointer + 1)
//       }
//     }
//     return dfs(str, 0)
// };