/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * f[j] = Math.min(f[j], f[j-w] + 1)
 * 背包系列问题
 */
 var coinChange = function(coins, amount) {
    let n = coins.length
    let f = new Array(amount + 1).fill(Infinity)
    f[0] = 0
    for(let i = 0; i < n; i++) {
      for(let j = coins[i]; j<= amount; j++) {
        f[j] = Math.min[f[j], f[j - coins[i]] + 1]
      }
    }
    return f[amount] === Infinity ? -1 : f[amount]
};


// 讲解不错的资料
// https://alchemist-al.com/?access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTE0LCJleHAiOiIyMDIxLTA4LTA2VDEwOjI2OjIyLjY1NloifQ.QXaNZij114bzZwHtJvdfF74up699-RwqZtowsB94Z0Q#
// https://leetcode-cn.com/problems/coin-change/solution/shi-pin-tu-jie-dong-tai-gui-hua-zui-shao-zhao-ling/