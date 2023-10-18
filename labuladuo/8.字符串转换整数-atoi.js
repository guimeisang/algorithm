/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(str) {
  const number = parseInt(str, 10);

  if(isNaN(number)) {
      return 0;
  } else if (number < -(2**31) || number > 2**31-1) {
      return number < -(2**31) ? -(2**31) : 2**31-1;
  } else {
      return number;
  }
};
// @lc code=end

// 另外的思路
/*
let res = str.trim().match(/^(\-|\+)?\d+/g)
  return res ? Math.max(Math.min(Number(res[0]),2**31-1),-(2**31)) : 0
*/

