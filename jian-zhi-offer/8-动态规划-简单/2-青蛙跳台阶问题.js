/**
 * @param {number} n
 * @return {number}
 dp: dp[i] = dp[i-1] + dp[i-2]
 dp[i] i 台阶的跳法
 dp[1] = 1, dp[2] = 1
 */
 var numWays = function(n) {
  let dp = [1, 1]
  for(let i = 2; i <= n; i++) {
      dp[i] = (dp[i-1] + dp[i-2]) % 1000000007
  }
  return dp[n]
};