/**
 * 如果左括号小于右括号，就提前退出：这就是剪枝
 * 回溯的条件：
 * 左括号数目等于右括号数目
 * 左括号数目 + 右括号数目 = 2 * n
 * 
*/
// res = []
// def dfs(l, r, s):
//   if l > n or r > n: return 
//   if (l == r == n): res.append(s)
//   // 剪枝，提高算法效率
//   if l < r: return
//   // 递进代码
//   dfs(l + 1, r, s + '(')
//   dfs(l, r + 1, s + ')')
// dfs(0, 0, '')
// return res

/**
 * @param {number} n
 * @return {string[]}
 * @param l 左括号已经⽤了⼏个
 * @param r 右括号已经⽤了⼏个
 * @param str 当前递归得到的拼接字符串结果
 * @param res 结果集
 */
const generateParenthesis = function (n) {
  const res = []
  function dfs(l, r, str) {
    if(l > n || r > n) return
    if(l === r === n) { 
      res.push(str)
    }
    // 剪枝
    if(l < r) return
    // 递进
    if(l < n) {
      dfs(l + 1, r, str + '(')
    }
    if(r < l) {
      dfs(l, r + 1, str + ')')
    }
  }

  dfs(0, 0, '')
  return res
}