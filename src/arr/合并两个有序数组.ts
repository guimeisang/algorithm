// 输入:nums1 = [1,3], nums2 = [4,5,7]
// 输出: [1,3,4,5,7]

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