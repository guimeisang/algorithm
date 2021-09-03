/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let left = 0
  let right = nums.length - 1
  while(left < right) {
    if(nums[left] & 1) {
      left++
      continue
    }
    [nums[right], nums[left]] = [nums[left], nums[right]]
    right--
  }
  return nums
};