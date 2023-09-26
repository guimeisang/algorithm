function removeDup(arr) {
  if(arr.length === 0) return 0;
  let slow = 0
  for (let fast = 0; fast < arr.length; fast++) {
    if(arr[slow] !== arr[fast]) {
      slow++;
      arr[slow] = arr[fast]
    }
  }
  return slow + 1
}

//想要拿到去除后的数组可以: arr.slice(0, slow);