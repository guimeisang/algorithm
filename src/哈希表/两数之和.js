function twoSum(nums, targe) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if(map.has(targe - nums[i])) {
      return [map.get(targe - nums[i]), i]
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([3,2,4], 6)) // [1, 2]