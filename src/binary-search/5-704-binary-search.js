// 二分查找

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0, r = nums.length - 1
  while (l <= r) {
    let mid = (l + r) >> 1
    if (nums[mid] === target) return mid
    let isSmall = nums[mid] < target
    l = isSmall ? mid + 1 : l
    r = isSmall ? r : mid - 1
  }
  return -1
}