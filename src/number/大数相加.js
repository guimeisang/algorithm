// 也是小米的一面面试题
// JS在存放整数的时候有一个安全范围的，一旦数字超过这个范围便会损失精度
let a = "9007199254740991"
let b = "1234567899999999999"

function add(a, b) {
  let maxLength = Math.max(a.length, b.length)
  a = a.padStart(maxLength, '0')
  b = b.padStart(maxLength, '0')
  let t = 0, f = 0, sum = ""
  for(let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f
    f = Math.floor(t/10)
    sum = t % 10 + sum
  }
  if(f == 1) sum = '1' + sum
  return sum
}

console.log(add(a, b)) // 1243575099254740990