// 剑指 Offer 04. 二维数组中的查找
var findNumberIn2DArray = function(matrix, target) {
  if(!matrix.length) return false
  let x = matrix.length - 1, y = 0
  while(x >= 0 && y < matrix[0].length - 1) {
    if(matrix[x][y] === target) {
      return true
    }else if(matrix[x][y] > target) {
      x--
    }else {
      y++
    }
  }
  return false
}