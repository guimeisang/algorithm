//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
function isValid(s) {
  let stack = [], length = s.length
  if(length % 2) return false
  for (const item of s) {
    switch (item) {
      case "(":
      case "[":
      case "{":
        stack.push(item)
        break;
      case "}":
        if(stack.pop() !== "{") return false
        break;
      case "]":
        if(stack.pop() !== "[") return false
        break;
      case ")":
        if(stack.pop() !== "(") return false
        break;
    }
  }
}
