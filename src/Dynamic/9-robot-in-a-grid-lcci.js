/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 * 描述下题目：迷路的机器人
 * DP方程：dp[i][j] = dp[i-1][j] || dp[i][j-1]
 * dp[0][0] = [[0, 0]]
 */
var pathWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  if(n === 0 || m === 0 || obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) return []
  const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
  dp[1][1] = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      if(i === 1 && j === 1) continue
      if(obstacleGrid[i-1][j-1] === 1) continue
      dp[i][j] = dp[i-1][j] || dp[i][j-1]
    }
  }
  if(dp[m][n] !== 1) return []

  const ans = []
  let row = m
  let col = n
  while(row !== 1 || col !== 1) {
    ans.push([row - 1, col - 1 ])
    if (dp[row-1][col] === 1 && row > 1) {
      row--
    }else {
      col--
    }
  }
  ans.push([0, 0])
  return ans.reverse()
};