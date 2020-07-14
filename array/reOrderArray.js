// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分

/*
思路：
第一个指针start从数组的第一个元素出发，向尾部前进
第二个指针end从数组最后一个出发，向头部前进
start 指针遇到偶数，end遇到 奇数的时候，交换两个数的位置
当 start > end时，跳出并且完成交换
*/

function reOrderArray(array) {
  if (Array.isArray(array)) {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
      while (array[start] % 2 === 1) {
        start++;
      }
      while (array[end] % 2 === 0) {
        end--;
      }
      if (start < end) {
        [array[start], array[end]] = [array[end], array[start]];
      }
    }
  }

  return array;
}

// demo
console.log(reOrderArray([1, 1, 2, 3, 4, 4, 2343432, 121, 434, 322]));

// [ 1, 1, 121, 3, 4, 4, 2343432, 2, 434, 322 ]
