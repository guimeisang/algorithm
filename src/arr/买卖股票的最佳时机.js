function maxProfit(prices) {
  const len = prices.length;
  // 创建dp数组
  const dp = new Array(len).fill([0, 0]);
  // dp数组初始化
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < len; i++) {
    // 更新dp[i]
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
    ];
  }
  return dp[len - 1][1];
}

console.log(maxProfit([7,1,5,3,6,4])) // 5 



















// 解法一：贪心
// let res = 0, low = Infinity
// for (let i = 0; i < prices.length; i++) {
//   low = Math.min(low, prices[i])
//   res = Math.max(res, prices[i] - low)
// }
// return res


// 解法二：动态规划