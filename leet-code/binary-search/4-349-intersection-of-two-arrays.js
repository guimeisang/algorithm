// 两个数组的交集

/**
示例
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
 */

var intersection = function (nums1, nums2) {
  // 先排序
  nums1.sort((a, b) => {
    return a - b;
  });
  nums2.sort((a, b) => {
    return a - b;
  });

  let r = []
  for (var i = 0; i < nums1.length; i++) {
    if (bs(nums2, nums1[i]) > -1) {
      if (bs(r, nums1[i]) === -1) r.push(nums1[i])
    }
  }

  return r
}

function bs (nums, target) {
  let l = 0, r = nums.length - 1
  while (l <= r) {
    let mid = ~~((l + r) / 2)
    if (nums[mid] > target) {
      r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      return mid
    }
  }
  return -1
}
