/**
 * @param {number[]} nums
 * @return {number}
 * dp方程
 * 偷n间的情况：前面共n-2间屋子能抢到的最大金额加上第n间屋子的现金
 * 不偷n间的情况：前面n-1间屋子能抢到的最大金额
 * 取该两种情况的最大值
 * f[n] = MAX(f[n-1], f[n-2]+num)
 * 压缩空间复杂度
 * 每次我只需要保留：前面n-2间房间的算出来的金额 和 前面n-1间房间算出来的金额
 */
var rob = function(nums) {
  const len = nums.length;
  if(len === 0) return 0;
  if(len === 1) return nums[0];
  let sum1 = nums[0]; // 偷
  let sum2 = nums[1]; // 不偷
  for(let i = 2; i < len; i++) {
    let temp = sum1
    if(sum2 > sum1) sum1 = sum2
    sum2 = temp + nums[i]
  }
  return Math.max(sum1, sum2);
};

// 感觉如果去除掉空间复杂度n，就有点不理解这个逻辑了