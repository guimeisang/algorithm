/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows == 1) return s

  const len = Math.min(s.length, numRows)
  const rows = new Array(len).fill('')
  let loc = 0, down = false
  // 记得那个动画就好，上下轮动，其他的都是为这个做准备
  for (const c of s) {
    rows[loc] += c
    if(loc == 0 || loc == numRows - 1) {
      down = !down
    }
    loc += down ? 1 : -1
  }
  return rows.join('')
};
// @lc code=end

