/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 这个就是接雨水的套路
  let left = 0, right = height.length - 1
  let res = 0
  while(left < right) {
    // 和接雨水差不多，接雨水是需要对比左边heigh和右边height
    res = Math.max(res, Math.min(height[left], height[right]) * (right - left))
    if(height[left] < height[right]) {
      left++
    }else {
      right--
    }
  }
  return res
};
// @lc code=end

