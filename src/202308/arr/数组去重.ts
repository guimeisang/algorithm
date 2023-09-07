function removeDup(arr) {
  let slow = 1
  for (let fast = 1; fast < arr.length; fast++) {
    if(arr[fast] === arr[slow -1]) {
      continue
    } 
    arr[slow++] = arr[fast]
  }
  return slow
}

//想要拿到去除后的数组可以: arr.slice(0, slow);