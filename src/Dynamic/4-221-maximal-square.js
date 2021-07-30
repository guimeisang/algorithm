/**
 * @param {character[][]} matrix
 * @return {number}
 * dp[i][j]=x 表示为x,j右上角的正方形边长
 * dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
 * 当为0，dp[i][j] = 0
 */
//
var maximalSquare = function(matrix) {
  let m = matrix.length, n = matrix[0].length
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  let max = 0 // 正方形的最大边长

  for (let i = 0; i < m; i++) {
     if(matrix[i][0] === '1') {
       dp[i][0] = 1
       max = Math.max(max, dp[i][0])
     }
  }

  for (let j = 0; j < n; j++) {
    if(matrix[0][j] === '1') {
      dp[0][j] = 1
      max = Math.max(max, dp[0][j])
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if(matrix[i][j] === '1') {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
        max = Math.max(max, dp[i][j])
      }
    }
  }

  return max * max
}
