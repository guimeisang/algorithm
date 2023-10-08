总结如下：
1、去重类：
用map就很舒服，关键技术：myMap = new Map()、myMap.set、myMap.get、Array.from(myMap)

2、合并有序数组：
用两个指针，从后往前移动，不断对比加入到新的数组。

3、有一种去深度遍历的方式，很多时候也可以看成是暴力方式，也就是回溯算法，将不符合要求的排除掉。
```js
result = []
function backtrack() {
  if(满足条件) {
    resule.push(path)
    return
  }
  for() {
    // 做选择（前序遍历）
    backtrack(path, list)
    // 撤销选择（后续遍历）
  }
}
```