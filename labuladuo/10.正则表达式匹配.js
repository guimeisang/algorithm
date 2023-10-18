/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let m = s.length, n = p.length;
  // 备忘录
  let memo = new Array(m + 1);
  for (let i = 0; i < memo.length; i++) {
      memo[i] = new Array(n + 1).fill(-1);
  }

  return dp(0, 0);

  /* 计算 p[j..] 是否匹配 s[i..] */
  function dp(i, j) {
      // 查备忘录，防止重复计算
      if (memo[i][j] !== -1) {
          return memo[i][j];
      }
      let res = false;
      // base case
      if (j === n) {
          res = i === m;
      } else {
          let firstMatch = i < m && (p[j] === s[i] || p[j] === '.');
          if (j + 1 < n && p[j + 1] === '*') {
              res = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
          } else {
              res = firstMatch && dp(i + 1, j + 1);
          }
      }
      // 将当前结果记入备忘录
      memo[i][j] = res;
      return res;
  }
};
// @lc code=end

