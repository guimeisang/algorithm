/**
 * @param {number[]} nums
 * @return {number}
 * DP: f(i) = max{ f(i-1) + nums[i], nums[i] } 
 */
var maxSubArray = function(nums) {
  let pre = 0, sum = nums[0]
  for(let i = 0; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i])
    sum = Math.max(pre, sum)
  }
  return sum
};

// 测试用例
var nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))