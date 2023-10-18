/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isPos = true 
  let y = x
  // 处理负值
  if(x < 0) {
    y = Math.abs(x)
    isPos = false
  }
  // 核心计算，我不会位运算
  let numRes = Number(y.toString().split('').reverse().join(''))
  // 数字大小限制
  let res = isPos === false ?  -1 * numRes : numRes
  if(res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
  return res
};
// @lc code=end

