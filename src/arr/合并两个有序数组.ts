// 输入:nums1 = [1,3], nums2 = [4,5,7]
// 输出: [1,3,4,5,7]
function merge(nums1, m, nums2, n){
  let nums = []
  for (let i = m - 1, j = n - 1, k = m + n - 1; k >= 0; --k) {
    console.log(i, j, k, nums)
    if(nums1[i] === undefined) {
      nums[k] = nums2[j--]
    }else if(nums2[j] === undefined) {
      nums[k] = nums1[i--]
    }else {
      nums[k] = nums1[i] > nums2[j]? nums1[i--] : nums2[j--];
    }
  }
  return nums
}

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0))











// 参考答案
/*
function merge(left, right) {
  let result = []
  let i = 0, j = 0
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++])
  }

  while (i < left.length) {
    result.push(left[i++])
  }

  while (j < right.length) {
    result.push(right[j++])
  }

  return result
}
*/