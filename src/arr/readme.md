总结如下：
1、去重类：
用map就很舒服，关键技术：myMap = new Map()、myMap.set、myMap.get、Array.from(myMap)

2、合并有序数组：
用两个指针，从后往前移动，不断对比加入到新的数组。
