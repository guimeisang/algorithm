// 给定有一个Add函数，要支持以下形式的调用
// Add(1)(2)(3).sumOf(); // 6
// Add(1,2)(3)(4).sumOf(); // 输出 10  
// 涉及到的知识面有：闭包、递归、作用域、函数与对象
function Add() {
  // 只处理参数
  if(!Add.arr) Add.arr = []
  console.log('看看参数：', ...arguments)
  Add.arr.push(...arguments)
  return Add
}

Add.sumOf = function() {
  return this.arr.reduce((a, b) => a + b)
}


















// function Add() {
//   if(!Add.nums) Add.nums = []
//   Add.nums.push(...arguments)
//   return Add
// }

// Add.sumOf = () => {
//   return Add.nums.reduce((a, b) => a + b)
// }

console.log(Add(1,2)(3)(4).sumOf())

