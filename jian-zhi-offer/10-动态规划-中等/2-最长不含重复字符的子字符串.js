/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s == null || s.length == 0) return 0
  let map = new Map()
  let res = 1, temp = 0
  for(let j = 0; j < s.length; j++) {
    if(!map.has(s[j]) || j - map.get(s[j]) > temp) {
      temp += 1
    }else {
      temp = j - map.get(s[j])
    }
    map.set(s[j], j)
    res = Math.max(res, temp)
  }
  return res
};