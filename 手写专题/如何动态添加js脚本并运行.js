/**
1、document.write。
2、动态改变已有script的src属性，比如src路径进行改变。
3、动态创建script元素。
4、将script添加到文档头部
5、添加到onload函数
 * */ 

// 动态添加内联脚本
var scriptElement = document.createElement('script')
scriptElement.textContent = 'console.log("hhhh")'
document.head.appendChild(scriptElement)

// 使用Promise处理脚本加载
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    var script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}