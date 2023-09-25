// 给定[0,1,0,2,1,0,1,3,2,1,2,1] 

function rain(height) {
  let res = 0;
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  while(left < right) {
    if(height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left])
      res += leftMax - height[left]
      ++left
    }else {
      rightMax = Math.max(rightMax, height[right])
      res += rightMax - height[right]
      --right
    }
  }
  return res
}

console.log(rain([0,1,0,2,1,0,1,3,2,1,2,1]))