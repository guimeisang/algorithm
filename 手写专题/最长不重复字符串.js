/**
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let myMap = new Map()
  let l = 0, r = 0, maxl = 0
  while(r < s.length) {
    if(myMap.has(s[r])) {
      let i = myMap.get(s[r]) + 1
      l = Math.max(l, i)
    }
    myMap.set(s[r], r)
    maxl = Math.max(maxl, r - l + 1)
    r++
  }
  return maxl
}

var s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))