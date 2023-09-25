// 给定[0,1,0,2,1,0,1,3,2,1,2,1] 

function rain(height) {
  let left = 0, right = height.length - 1
  let res = 0, leftMax = 0, rightMax = 0
  while(left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if(height[left] < height[right]) {
      res += leftMax - height[left]
      left++
    }else {
      res += rightMax - height[right]
      right--
    }
  }
  return res
}

























// function rain(height) {
//   let leftIndex = 0, rightIndex = height.length - 1;
//   let leftMax = 0, rightMax = 0;
//   let res = 0
//   while(leftIndex < rightIndex) {
//     leftMax = Math.max(leftMax, height[leftIndex])
//     rightMax = Math.max(rightMax, height[rightIndex])
//     if(height[leftIndex] < height[rightIndex]) {
//       res += leftMax - height[leftIndex]
//       leftIndex++
//     }else {
//       res += rightMax - height[rightIndex]
//       rightIndex--
//     }
//   }
//   return res
// }

console.log(rain([0,1,0,2,1,0,1,3,2,1,2,1]))