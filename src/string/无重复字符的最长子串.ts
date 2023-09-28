function lengthOfLongsSubstring(s) {
  let myMap = new Map()
  let l = 0, r = 0, maxL = 0
  while(r < s.length) {
    if(myMap.has(s[r])) {
      l = l > myMap.get(s[r]) + 1 ? l : myMap.get(s[r]) + 1
    }
    myMap.set(s[r], r)
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