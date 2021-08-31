/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var str = [], maxLength = 0
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if(str.indexOf(ele) != -1) str.splice(0, str.indexOf(ele) + 1)
    str.push(ele)
    maxLength = Math.max(maxLength, str.length)
  }
  return maxLength
};