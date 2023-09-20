// 给定两个字符串s1和s2，计算出将s1转换成s2所使用的最少操作数
// 一般有三种操作：插入一个、删除一个、替换一个
/**
if s1[i] == s2[j]:
  直接skip
  i，j同时向前移动
else:
  三选一：
    插入（insert）
    删除（delete）
    替换（replace）
*/

function minDistance(s1, s2) {
  const len1 = s1.length
  const len2 = s2.length
  let matrix = []
  for (let i = 0; i <= len1; i++) {
      // 构造二维数组
      matrix[i] = new Array()
      for (let j = 0; j <= len2; j++) {
          // 初始化
          if (i == 0) {
              matrix[i][j] = j
          } else if (j == 0) {
              matrix[i][j] = i
          } else {
              // 进行最小值分析
              let cost = 0
              if (s1[i - 1] != s2[j - 1]) { // 相同为0，不同置1
                  cost = 1
              }
              const temp = matrix[i - 1][j - 1] + cost
              matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, temp)
          }
      }
  }
  return matrix[len1][len2]
}
console.log(minDistance('jary', 'jerry'))