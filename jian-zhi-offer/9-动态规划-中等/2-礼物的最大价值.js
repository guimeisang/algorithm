/**
 * @param {number[][]} grid
 * @return {number}
 * dp： f(i,j) = max[f(i, j - 1), f(i - 1, j)] + grid(i, j)
 */
var maxValue = function(grid) {
    let m = grid.length, n = grid[0].length
    for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
        if(i == 0 && j == 0) continue
        else if(i == 0) grid[i][j] += grid[i][j-1]
        else if(j == 0) grid[i][j] += grid[i-1][j]
        else grid[i][j] +=Math.max(grid[i-1][j], grid[i][j-1])
      }
    }
    return grid[m-1][n-1]
};