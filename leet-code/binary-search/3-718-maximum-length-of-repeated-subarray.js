/**
 * 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

const findLength = (A, B) => {
  const m = A.length
  const n = B.length
  const dp = new Array(n + 1).fill(0)
  let res = 0
  for (let i = 1; i <= m; i++) {
    for (let j = n; j >= 1; j--) {
      if (A[i - 1] == B[j - 1]) {
        dp[j] = dp[j - 1] + 1
      } else {
        dp[j] = 0
      }
      res = Math.max(dp[i][j], res)
    }
  }
  return res
}