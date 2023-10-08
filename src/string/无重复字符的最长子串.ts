// 输入：abcabcbb
// 输出：3 // 也就是 abc

function lengthOfLongsSubstring(s) {
  let map = new Map()
  let l = 0, r = 0, maxL = 0
  while(r < s.length) {
    let w = s[r]
    if(map.has(w)) {
      let i = map.get(w) + 1
      l = l > i ? l : i
    }
    map.set(w, r)
    maxL = Math.max(maxL, r - l + 1)
    r++
  }

  return maxL
}

console.log(lengthOfLongsSubstring('abcabcbb')) // 'abc' 3























/**
参考答案
let map = new Map()
let left = 0, right = 0, maxLen = 0
while(right < s.length) {
  let w = s[right]
  if(map.has(w)) {
    let i = map.get(w) + 1
    left = left > i ? left : i
  }
  map.set(w, right)
  maxLen = Math.max(maxLen, right-left+1)
  right++
}
return maxLen

 */