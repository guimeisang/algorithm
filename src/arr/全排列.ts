// 给定一个不含重复数字的数组nums，返回其所有可能的全排列。你可以按照任何顺序返回答案
// 输入：nums = [1, 2, 3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 思路：从脑海里要有树的概念，一层层树都是递归去完成，然后通过已经重复来剪去一些小树枝
function permute(nums) {
  const res = []
  backtrack([])
  return res
  function backtrack(path) {
    if(path.length === nums.length) {
      res.push(path)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if(path.includes(nums[i])) { continue; } 
      backtrack(path.concat(nums[i]))
    }
  }
};

console.log(permute([1,2,3]))














// 正确答案
/**
const res = []
backtrack([])
return res
function backtrack(path) {
  if(path.length === nums.length) {
    res.push(path)
    return
  }
  for (let i = 0; i < nums.length; i++) {
    if(path.includes(nums[i])) { continue; }
    backtrack(path.concat(nums[i]))
  }
}
 */