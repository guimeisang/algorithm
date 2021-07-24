/**
 * @param {string} s
 * @return {string}
 * f(i) > f(i-1) ? f(i) : f(i-1)
 * f(i) = s[m--] == s[] 
 */
var longestPalindrome = function(s) {
  if(s.length < 2) return s
  let result = ''
  
  for (let i = 0; i < s.length; i++) {
    getResult(i, i)
    getResult(i, i+1)
  }

  function getResult(m, n) {
    while(m >= 0 && n < s.length && s[m] == s[n]) {
      m--
      n++
    }
    if(n - m - 1 > result.length) result = s.slice(m + 1, n)
  }

  return result
};

console.log(longestPalindrome('babad'))