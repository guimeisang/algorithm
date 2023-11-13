/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [], length = s.length
  if(length % 2) return false
  for (const item of s) {
    switch (item) {
      case '{':
      case '[':
      case '(':
        stack.push(item)
        break;
      case '}':
        if(stack.pop() !== '{') return false
        break;
      case ']':
        if(stack.pop() !== '[') return false
        break;
      case ')':
        if(stack.pop() !== '(') return false
        break;
      default:
        break;
    }
  }
  return !stack.length
};
// @lc code=end

