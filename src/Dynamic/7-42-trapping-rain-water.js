/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let n=height.length;
  if(n===0) return 0;
  let res=0;

  let left_max=[] ,right_max=[];
  //记录左边数组的最大值
  left_max[0]=height[0];
  for(let i=1;i<n;i++){
    left_max[i]=Math.max(left_max[i-1],height[i]);
  }
  //记录右边数组的最大值
  right_max[n-1]=height[n-1];
  for(let i=n-2;i>=0;i--){
    right_max[i]=Math.max(right_max[i+1],height[i]);
  }
  //统计每一列的面积之和
  for(let i=0;i<n;i++){
    res+=Math.min(left_max[i],right_max[i])-height[i];
  }
  return res;
};