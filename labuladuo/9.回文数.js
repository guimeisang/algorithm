/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false
  if(x < -(2**31) || x > 2**31) return false
  // 里面toString、reverse、join('')都是容易错的点 
  let _x = x.toString().split('').reverse().join('')
  console.log('----', _x)
  return _x == x
};
// @lc code=end

