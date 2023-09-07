// 题目说明
// 输入：nums = [0,1,2,2,3,0,4,2], val = 2
// 输出：5, nums = [0,1,4,0,3]

function removeElement(nums: number[], val: number): number {
  let ans = 0
  for(const i of nums) {
    if(i != val) {
      nums[ans++] = i
    }
  }
  return ans
};